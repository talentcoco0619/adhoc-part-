export const getPrice = (product) => {
  const modifierPrice = product?.modifiers
    ?.map((i) => i?.Price)
    .reduce((a, b) => a + b, 0)
  return product.item?.Price + (modifierPrice ? modifierPrice : 0)
}

// todo EM add modifiers;
export const getTotalCost = (busket) => {
  let result = 0
  busket?.forEach((element) => {
    const currentPrice = getPrice(element)
    result = result + currentPrice * element?.qty
  })
  return result
}

export const getProcessingCost = (busket) => {
  let total = getTotalCost(busket) * 0.05
  return total
}
