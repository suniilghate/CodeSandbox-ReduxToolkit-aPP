import "./styles.css";
import Counter from "./components/Count";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
        Increment Count
      </button>
      <Counter />
      <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
        Decrement Count
      </button>
    </div>
  );
}
