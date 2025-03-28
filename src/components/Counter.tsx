import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { decrement, incrementAsync } from "../state/counter/CounterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <input type="number" />
      <div>
        <button
          className="border-2 mr-1"
          onClick={() => dispatch(incrementAsync(10))}
        >
          Increment
        </button>
        <button className="border-2 ml-1" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
