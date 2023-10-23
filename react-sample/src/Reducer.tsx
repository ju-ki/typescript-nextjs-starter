import { useReducer } from "react";

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

const reducer = (currentCount: number, action:Action) => {
    switch(action){
        case "INCREMENT":
            return currentCount + 1
        case "DECREMENT":
            return currentCount - 1
        case "DOUBLE":
            return currentCount * 2
        case "RESET":
            return 0
        default:
            return currentCount
    }
}

type CounterProps = {
    initValue:number
};


const Counter = (props:CounterProps) => {
    const {initValue} = props;
    const [count, dispatch] = useReducer(reducer, initValue);

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => dispatch("DECREMENT")}>-</button>
            <button onClick={() => dispatch("INCREMENT")}>+</button>
            <button onClick={() => dispatch("DOUBLE")}>*2</button>
            <button onClick={() => dispatch("RESET")}>reset</button>
        </div>
    )
}

export default Counter;