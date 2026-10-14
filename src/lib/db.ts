import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { Registration, WorkshopSettings, NotificationLog } from './types';

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'garvi.db');
const db = new Database(dbPath);

// Enable WAL mode for concurrency and durability
db.pragma('journal_mode = WAL');

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    registration_id TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    email TEXT NOT NULL,
    school_name TEXT NOT NULL,
    city TEXT NOT NULL,
    role TEXT NOT NULL,
    amount INTEGER NOT NULL DEFAULT 199,
    currency TEXT NOT NULL DEFAULT 'INR',
    status TEXT NOT NULL DEFAULT 'pending_payment',
    razorpay_order_id TEXT,
    razorpay_payment_id TEXT,
    razorpay_signature TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_content TEXT,
    utm_term TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_reg_status ON registrations(status);
  CREATE INDEX IF NOT EXISTS idx_reg_order_id ON registrations(razorpay_order_id);
  CREATE INDEX IF NOT EXISTS idx_reg_email ON registrations(email);
  CREATE INDEX IF NOT EXISTS idx_reg_mobile ON registrations(mobile);

  CREATE TABLE IF NOT EXISTS workshop_settings (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    workshop_title TEXT NOT NULL,
    workshop_date TEXT NOT NULL,
    workshop_time TEXT NOT NULL,
    duration TEXT NOT NULL,
    price INTEGER NOT NULL DEFAULT 199,
    max_seats INTEGER NOT NULL DEFAULT 75,
    whatsapp_group_link TEXT NOT NULL,
    preview_video_url TEXT NOT NULL,
    instructor_name TEXT NOT NULL,
    instructor_role TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    contact_phone TEXT NOT NULL,
    contact_address TEXT NOT NULL,
    meta_pixel_id TEXT NOT NULL DEFAULT ''
  );

  CREATE TABLE IF NOT EXISTS notifications_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    registration_id TEXT NOT NULL,
    channel TEXT NOT NULL,
    template_name TEXT NOT NULL,
    recipient TEXT NOT NULL,
    status TEXT NOT NULL,
    error_message TEXT,
    sent_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS analytics_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_name TEXT NOT NULL,
    event_id TEXT,
    registration_id TEXT,
    utm_source TEXT,
    utm_campaign TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Insert default workshop settings if not exists
const existingSettings = db.prepare('SELECT id FROM workshop_settings WHERE id = 1').get();
if (!existingSettings) {
  const insertSettings = db.prepare(`
    INSERT INTO workshop_settings (
      id, workshop_title, workshop_date, workshop_time, duration, price, max_seats,
      whatsapp_group_link, preview_video_url, instructor_name, instructor_role,
      contact_email, contact_phone, contact_address, meta_pixel_id
    ) VALUES (
      1,
      'Online School Management Workshop',
      'Saturday, 25 October 2026',
      '6:00 PM – 8:00 PM IST',
      '2 Hours Interactive Live Session',
      199,
      75,
      'https://chat.whatsapp.com/GarviEducationWorkshop',
      'https://www.youtube.com/embed/dQw4w9WgXcQ',
      'Senior School Operations Specialist',
      'Garvi Education Academic Panel',
      'contact@garvieducation.com',
      '+91 94251 00000',
      'Garvi Education, Civil Lines, Rewa, Madhya Pradesh 486001',
      ''
    )
  `);
  insertSettings.run();
}

export { db };

// Database Helper methods
export function getWorkshopSettings(): WorkshopSettings {
  return db.prepare('SELECT * FROM workshop_settings WHERE id = 1').get() as WorkshopSettings;
}

export function updateWorkshopSettings(settings: Partial<WorkshopSettings>) {
  const current = getWorkshopSettings();
  const merged = { ...current, ...settings };
  db.prepare(`
    UPDATE workshop_settings SET
      workshop_title = @workshop_title,
      workshop_date = @workshop_date,
      workshop_time = @workshop_time,
      duration = @duration,
      price = @price,
      max_seats = @max_seats,
      whatsapp_group_link = @whatsapp_group_link,
      preview_video_url = @preview_video_url,
      instructor_name = @instructor_name,
      instructor_role = @instructor_role,
      contact_email = @contact_email,
      contact_phone = @contact_phone,
      contact_address = @contact_address,
      meta_pixel_id = @meta_pixel_id
    WHERE id = 1
  `).run(merged);
  return getWorkshopSettings();
}

export function createRegistration(data: {
  registration_id: string;
  full_name: string;
  mobile: string;
  email: string;
  school_name: string;
  city: string;
  role: string;
  amount: number;
  razorpay_order_id?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}): Registration {
  const stmt = db.prepare(`
    INSERT INTO registrations (
      registration_id, full_name, mobile, email, school_name, city, role,
      amount, status, razorpay_order_id, utm_source, utm_medium, utm_campaign, utm_content, utm_term
    ) VALUES (
      @registration_id, @full_name, @mobile, @email, @school_name, @city, @role,
      @amount, 'pending_payment', @razorpay_order_id, @utm_source, @utm_medium, @utm_campaign, @utm_content, @utm_term
    )
  `);
  stmt.run(data);
  return getRegistrationById(data.registration_id)!;
}

export function getRegistrationById(registrationId: string): Registration | null {
  const row = db.prepare('SELECT * FROM registrations WHERE registration_id = ?').get(registrationId);
  return (row as Registration) || null;
}

export function getRegistrationByOrderId(orderId: string): Registration | null {
  const row = db.prepare('SELECT * FROM registrations WHERE razorpay_order_id = ?').get(orderId);
  return (row as Registration) || null;
}

export function updateRegistrationPaymentSuccess(
  registrationId: string,
  razorpayPaymentId: string,
  razorpaySignature: string
): Registration {
  const stmt = db.prepare(`
    UPDATE registrations SET
      status = 'registration_confirmed',
      razorpay_payment_id = ?,
      razorpay_signature = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE registration_id = ?
  `);
  stmt.run(razorpayPaymentId, razorpaySignature, registrationId);
  return getRegistrationById(registrationId)!;
}

export function updateRegistrationStatus(registrationId: string, status: string): void {
  db.prepare(`
    UPDATE registrations SET
      status = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE registration_id = ?
  `).run(status, registrationId);
}

export function logNotification(data: {
  registration_id: string;
  channel: 'email' | 'whatsapp';
  template_name: string;
  recipient: string;
  status: 'sent' | 'pending' | 'failed';
  error_message?: string;
}) {
  db.prepare(`
    INSERT INTO notifications_log (registration_id, channel, template_name, recipient, status, error_message)
    VALUES (@registration_id, @channel, @template_name, @recipient, @status, @error_message)
  `).run(data);
}

export function getNotificationLogs(limit: number = 50): NotificationLog[] {
  return db.prepare('SELECT * FROM notifications_log ORDER BY id DESC LIMIT ?').all(limit) as NotificationLog[];
}

export function recordAnalyticsEvent(eventName: string, registrationId?: string, utmSource?: string, utmCampaign?: string) {
  db.prepare(`
    INSERT INTO analytics_events (event_name, registration_id, utm_source, utm_campaign)
    VALUES (?, ?, ?, ?)
  `).run(eventName, registrationId || null, utmSource || null, utmCampaign || null);
}
