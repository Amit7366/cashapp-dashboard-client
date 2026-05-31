export const LIGHTNING_PAYMENT_URL =
  'https://cash.app/launch/lightning/lnbc682900n1p4phkpvpp5huzsegq0s3kmx4uktw72uw3ru3use04czl0cda328a44jjgv4w7sdpz2djkuepqw3hjqnpdgf2yxgrpv3j8yetnwvcqzxrxqr9ghsp5u4nuayzsvnrlywxfc6wml0u9un988fgmgyel23qmexr9tq07a6us9qxpqysgqwjxnmxjh57vhtd4vz56crdfkh0qmm9krcq72l9ag5296z937rjd3lvp2nv74f3zpyh3m5rhuu8gcuh9vnvx4kw0xuskc5umsxynek4sqfslza4'

export function formatUsdAmount(value) {
  const amount = Number.parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0

  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}
