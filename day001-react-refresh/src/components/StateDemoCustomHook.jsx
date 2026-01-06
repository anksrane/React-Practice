import React from 'react';
import {useCounter} from '../hooks/useCounter';

const StateDemoCustomHook = () => {
    const { count, increment, decrement, resetCount, isMin } = useCounter(0);

    return (
        <div>
            <h1>useState Example</h1>
            <h2>Count is {count}</h2>
            <div className='flex'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement} disabled={isMin}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    )
}

export default StateDemoCustomHook
