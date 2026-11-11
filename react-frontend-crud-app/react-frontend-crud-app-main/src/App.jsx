import { useState } from "react";
import AddEditForm from "./components/AddEditForm";
import Header from "./components/Header";
import "./App.css";
import calculateTotalExpenses from "./components/calculateTotalExpenses";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "breakfast", amount: 50, date: "2026-10-27" },
    { id: 2, title: "lunch", amount: 100, date: "2026-10-27" },
  ]);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [isAddEditMode, setIsAddEditMode] = useState(false);

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id,
    );
    setTransactions(updatedTransactions);
  };

  const handleAdd = () => {
    setCurrentTransaction(null);
    setIsAddEditMode(true);
  };

  const handleEdit = (transaction) => {
    setCurrentTransaction(transaction);
    setIsAddEditMode(true);
  };

  const saveFormData = (payload) => {
    if (payload.id) {
      //Edit existing transaction
      const updatedTransactions = transactions.map((t) =>
        t.id === payload.id ? payload : t,
      );
      setTransactions(updatedTransactions);
    } else {
      //Add new transaction
      const newTransaction = { ...payload, id: transactions.length + 1 };
      setTransactions([...transactions, newTransaction]);
    }
    setIsAddEditMode(false);
    setCurrentTransaction(null);
  };

  return (
    <div className="app-container">
      <Header handleAdd={handleAdd} />
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>
                <button onClick={() => handleEdit(transaction)}>Edit</button>
                <button onClick={() => handleDelete(transaction.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Expenses: {calculateTotalExpenses(transactions)}</h3>
      {isAddEditMode && (
        <AddEditForm
          currentTransaction={currentTransaction}
          saveFormData={saveFormData}
        />
      )}
    </div>
  );
}

export default App;
