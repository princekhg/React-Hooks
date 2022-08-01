import React, {useState} from "react";
function HookCounterTwo()
{
    const initCount = 0
    const [count, setCount] = useState(initCount)

// here we can see that it won't work

    const incrementFive =() =>
    {
        for(let i=0;i<5;i++)
            // setCount(count + 5)
            setCount(prevCount =>prevCount+1)
    }
    return(
        <div>
            Count: {count}
            <button onClick={() => setCount(initCount)}>Reset</button>
            <button onClick={() =>setCount(prevCount =>prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount =>prevCount -1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}
export default HookCounterTwo