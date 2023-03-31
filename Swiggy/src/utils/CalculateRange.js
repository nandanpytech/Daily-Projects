export const pricerange=(ItemDetails)=>{
    let range={initial:0,last:0}
    const prices=ItemDetails?.variantsV2?.pricingModels
    range.initial=prices[prices.length-1].price/100
    range.last=prices[0].price/100
    return range
  }