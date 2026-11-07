export const TELEGRAM_MESSAGE = (productName: string) => `Hello! I visited your store and I'm interested in the following product:\n\nProduct: ${productName}\n\nI would like to receive more information, know the price, and learn how I can purchase it.\n\nThank you!`;

// Telegram's share flow pre-fills the text and asks the customer to choose a chat and confirm.
export function telegramShareUrl(productName: string, pageUrl = '') {
  const params = new URLSearchParams({ text: TELEGRAM_MESSAGE(productName) });
  if (pageUrl) params.set('url', pageUrl);
  return `https://t.me/share/url?${params.toString()}`;
}

export function safeTelegramLink(input: string) {
  try { const url = new URL(input); return url.protocol === 'https:' && (url.hostname === 't.me' || url.hostname === 'telegram.me') ? url.toString() : 'https://t.me/biggselller'; }
  catch { return 'https://t.me/biggselller'; }
}
