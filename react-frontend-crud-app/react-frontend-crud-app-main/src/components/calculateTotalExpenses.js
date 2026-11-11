function calculateTotalExpenses(transactions) {
  return transactions.reduce((total, transaction) => total + transaction.amount, 0);
}

export default calculateTotalExpenses;