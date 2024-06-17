const menu = [
  {
    id: 0,
    item: '우동',
    price: 5000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 1,
    item: '짜장면',
    price: 6000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 2,
    item: '짬봉',
    price: 7000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 3,
    item: '볶음밥',
    price: 8000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 4,
    item: '탕수육',
    price: 20000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 5,
    item: '동파육',
    price: 25000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 6,
    item: '양장피',
    price: 30000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 7,
    item: '사천당면',
    price: 10000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 8,
    item: '군만두',
    price: 5000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 9,
    item: '유산슬',
    price: 40000,
    qty: 0,
    itemPrice: 0,
  },
  {
    id: 10,
    item: '고량주',
    price: 10000,
    qty: 0,
    itemPrice: 0,
  },
]

let menuTable = document.getElementById('menuTable')
let sumPrice = document.getElementById('sum')

function generateTable() {
  menuTable.innerHTML = ''
  menu.forEach(function (item) {
    let tr = `<tr>
    <td>${item.id + 1}</td>
    <td>${item.item}</td>
    <td>${new Intl.NumberFormat().format(item.price)}</td>
    <td>${new Intl.NumberFormat().format(item.qty)}</td>
    <td>${new Intl.NumberFormat().format(item.itemPrice)}</td>
    <td> <button type="button" class="btn btn-primary" onclick="increase(${
      item.id
    })">+</button> </td>
    <td> <button type="button" class="btn btn-success" onclick="decrease(${
      item.id
    })">-</button> </td>
    <td> <button type="button" class="btn btn-secondary" onclick="unselect(${
      item.id
    })">X</button> </td>
    </tr>`
    menuTable.innerHTML += tr
  })
}

generateTable()
calcSum()

function increase(id) {
  menu[id].qty += 1
  menu[id].itemPrice = menu[id].price * menu[id].qty
  generateTable()
  calcSum()
}

function decrease(id) {
  if (menu[id].qty >= 1) {
    menu[id].qty -= 1
    menu[id].itemPrice = menu[id].price * menu[id].qty
  }
  generateTable()
  calcSum()
}

function unselect(id) {
  menu[id].qty = 0
  menu[id].itemPrice = menu[id].price * menu[id].qty
  generateTable()
  calcSum()
}

function calcSum() {
  let sum = 0
  menu.forEach(function (item) {
    item.itemPrice = item.price * item.qty
    sum += item.itemPrice
  })
  sumPrice.innerHTML = new Intl.NumberFormat().format(sum)
}
