// 이건 동작안함. 이 코드를 복붙해서 
// new-250902-new 에 입력 ()
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 숫자: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1 하기
      </button>
    </div>
  );
}

export default Counter;