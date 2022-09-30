import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const fetchProduct = async (integer) => {
    let response = fetch(`/api/products/${integer}`).then((r) => r.json());
    console.log(response);
  };

  useEffect(() => {
    fetchProduct(1);
  }, []);

  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
