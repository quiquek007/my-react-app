import { useReducer } from 'react';

interface CounterState {
  count: number;
}

interface CounterAction {
  type: 'increment' | 'decrement' | 'reset';
}

enum CounterActionType {
  Increment = 'increment',
  Decrement = 'decrement',
  Reset = 'reset',
}

const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const Counter = () => {
  const initialState: CounterState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Лічыльнік: {state.count}</h1>
      <button onClick={() => dispatch({ type: CounterActionType.Increment })}>Павялічыць</button>
      <button onClick={() => dispatch({ type: CounterActionType.Decrement })}>Паменшыць</button>
      <button onClick={() => dispatch({ type: CounterActionType.Reset })}>Скінуць</button>
    </div>
  );
};

export default Counter;