
const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  orderQuantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  orderQuantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  orderQuantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  orderQuantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  orderQuantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  orderQuantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  orderQuantity: 0
}]


function alterScoopQty(name, action){
  const scoop = iceCream.find(ice => ice.name == name)
  if (action == 'add'){
    scoop.orderQuantity++
  } else if (action == 'subtract'){
    scoop.orderQuantity--
  } else if (action == 'remove'){
    scoop.orderQuantity = 0
  }

  drawCart()
}

function alterToppingQty(name, action){
  const topping = toppings.find(top => top.name == name)
  if (action == 'add'){
    topping.orderQuantity++
  } else if (action == 'subtract'){
    topping.orderQuantity--
  } else if (action == 'remove'){
    topping.orderQuantity = 0
  }

  drawCart()
}

function alterBaseQty(name, action){
  const base = containers.find(b => b.name == name)
  if (action == 'add'){
    base.orderQuantity++
  } else if (action == 'subtract'){
    base.orderQuantity--
  } else if (action == 'remove'){
    base.orderQuantity = 0
  }

  drawCart()
}

function drawCart(){
  let iceCreamTotal = 0
  let toppingsTotal = 0
  let containersTotal = 0
  let template = ''

  iceCream.forEach(ice => {
    iceCreamTotal += ice.price * ice.orderQuantity
    if (ice.orderQuantity){
    template+=`<div class="row">
      <div class="col-3 text-end">${ice.name}</div>
      <div class="col-3 text-center">${ice.orderQuantity}</div>
      <div class="col-3 text-end">$${ice.price}</div>
      <div class="col-3 text-end">$${ice.price * ice.orderQuantity}</div>
    </div>`


    }
  })

  toppings.forEach(top => {
    toppingsTotal += top.price * top.orderQuantity
    if (top.orderQuantity){
      template+=`<div class="row">
      <div class="col-3 text-end">${top.name}</div>
      <div class="col-3 text-center">${top.orderQuantity}</div>
      <div class="col-3 text-end">$${top.price}</div>
      <div class="col-3 text-end">$${top.price * top.orderQuantity}</div>
    </div>`
    }
  })

  containers.forEach(container => {
    containersTotal += container.price * container.orderQuantity
    if (container.orderQuantity){
      template+=`<div class="row">
      <div class="col-3 text-end">${container.name}</div>
      <div class="col-3 text-center">${container.orderQuantity}</div>
      <div class="col-3 text-end">$${container.price}</div>
      <div class="col-3 text-end">$${container.price * container.orderQuantity}</div>
    </div>`
    }
  })

  template+=`<div class="row">
  <div class="col-12 text-end">Grand Total: $${iceCreamTotal + toppingsTotal + containersTotal}</div>
</div>`

document.getElementById('receipts').innerHTML = template

}

function clearAll(){
  iceCream.forEach(ice => ice.orderQuantity = 0)
  toppings.forEach(top => top.orderQuantity = 0)
  containers.forEach(c => c.orderQuantity = 0)

  drawCart()
}

