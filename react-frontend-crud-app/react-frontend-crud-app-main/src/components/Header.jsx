import "./Header.css";

function Header({ handleAdd }) {
  return (
    <header className="header-container">
      <h1 className="header-title">Expense Tracker App</h1>
      <button className="header-button" onClick={handleAdd}>
        Add
      </button>
    </header>
  );
}

export default Header;
