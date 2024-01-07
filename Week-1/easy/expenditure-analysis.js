/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  transactions.forEach((transaction) => {
    let idx = result.findIndex(
      (element) => element.category === transaction.category
    );

    if (idx === -1) {
      result.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    } else {
      result[idx].totalSpent += transaction.price;
    }
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
