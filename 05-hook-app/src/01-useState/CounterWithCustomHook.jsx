import { useCounter } from "../hook/useCounter"

export const CounterWithCustomHook = () => {
    const {counter, increment, decrement, reset} = useCounter()
    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            <hr />
            <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-primary">reset</button>
            <button onClick={() => decrement(2)} className="btn btn-primary">-1</button>
        </>
    )}
