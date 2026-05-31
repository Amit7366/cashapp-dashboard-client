export const PAYMENT_LINKS = [
  { slug: 'Luna07', lastPayment: '1 week ago' },
  { slug: 'CashApp2', lastPayment: '2 days ago' },
  { slug: 'cashapp', lastPayment: '5 days ago' },
  { slug: 'Cash App', lastPayment: '3 days ago' },
]

export function getPaymentUrl(slug) {
  return `https://www.payin-cash.app/${encodeURIComponent(slug)}`
}
