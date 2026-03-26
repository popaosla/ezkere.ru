export function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU').format(price) + ' \u20BD'
}

export function calcDiscount(price, discountPercent) {
  if (!discountPercent) return price
  return Math.round(price * (1 - discountPercent / 100))
}
