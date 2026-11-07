import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

const COOKIE = 'best_content_admin';
function secret() { const value = process.env.SESSION_SECRET; if (!value || value.length < 32) throw new Error('SESSION_SECRET must contain at least 32 characters'); return value; }
function signature(value: string) { return createHmac('sha256', secret()).update(value).digest('hex'); }
export function createSession() { const value = `${Date.now()}`; return `${value}.${signature(value)}`; }
export function verifySession(value?: string) {
  if (!value) return false;
  const [stamp, sig] = value.split('.');
  if (!stamp || !sig || !/^\d+$/.test(stamp)) return false;
  const age = Date.now() - Number(stamp);
  if (age < 0 || age > 1000 * 60 * 60 * 12) return false;
  const expected = signature(stamp);
  const a = Buffer.from(sig); const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
export async function isAdmin() { return verifySession((await cookies()).get(COOKIE)?.value); }
export const sessionCookieName = COOKIE;
