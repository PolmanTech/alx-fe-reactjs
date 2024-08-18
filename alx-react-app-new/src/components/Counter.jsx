
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
            <div>
                <p>{count}</p>
                <button onClick={ () => { setCount((count) => count - 1 ) }}>Decrement</button>
                <button style={{margin: '0 8px'}} onClick={ () => { setCount((count) => count = 0 ) }}>Reset</button>
                <button onClick={ () => { setCount((count) => count + 1 ) }}>Increment</button>
            </div>
    );
}

export default Counter;
