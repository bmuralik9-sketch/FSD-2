import "./App.css";

function App() {
  const patients = [
    { id: 1, name: "John Doe", age: 30, gender: "male", ward: "A" },
    { id: 2, name: "Jane Smith", age: 25, gender: "female", ward: "B" },
    { id: 3, name: "Alice Johnson", age: 40, gender: "female", ward: "C" },
  ];
  return (
    <div className="App">
      <h1>React Rendering Lists</h1>
      <table className="patient-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Ward</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.ward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
