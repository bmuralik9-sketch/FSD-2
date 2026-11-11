import { createRoot } from 'react-dom/client'


const name="Ravi";
const age=20;

const message=(
  <span>
    <h1>Name:{name}</h1>
    <h2>Age:{age}</h2>
  </span>
);

createRoot(document.getElementById("root")).render(
  <div>
    <h1>React JSX Render App</h1>
    <p>{message}</p>
  </div>
);
