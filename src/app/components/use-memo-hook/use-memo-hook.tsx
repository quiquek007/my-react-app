import { useMemo, useState } from "react";

export const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Вылічваем значэнне толькі калі `count` змяняецца
  const memoizedValue = useMemo(() => {
    console.log("Складанае вылічэнне...");
    return count * 2; // Тут можа быць складаная аперацыя
  }, [count]);

  return (
    <div>
      <h1>Прыклад з useMemo</h1>
      <p>Тэарэтычна: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Змяніць count: {count}</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Змяніць otherCount: {otherCount}
      </button>
    </div>
  );
};