export const formatPrice = (price) => {
  let n

  // Check if price is a string and parse it
  if (typeof price === 'string') {
    n = parseFloat(price)
  } else if (typeof price === 'number') {
    n = price
  } else {
    return '0.00' // Handle non-numeric, non-string inputs by returning '0.00'
  }

  // Round to two decimal places and convert to formatted string
  return (Math.round(n * 100) / 100).toFixed(2)
}
