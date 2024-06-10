function jimOrders(orders) {
  for (let i = 0; i < orders.length; i++) {
    orders[i] = [orders[i][0] + orders[i][1], i + 1];
  }
  orders.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < orders.length; i++) {
    orders[i] = orders[i][1];
  }
  return orders;
}

let orders = [
  [8, 1],
  [4, 2],
  [5, 6],
  [3, 1],
  [4, 3],
];
console.log(jimOrders(orders));
