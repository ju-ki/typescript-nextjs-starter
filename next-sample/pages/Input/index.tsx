import React, { useState } from "react";

type InputProps = JSX.IntrinsicElements["input"] & {
    label:string
}


const Input = (props: InputProps) => {
    const {label, ...rest} = props;

    const [text, setText] = useState("");

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const resetInputField = () => {
        setText("");
    }

    return (
        <div>
            <label htmlFor={props.id}>{label}</label>
            <p>{text}</p>
            <input type="text" value={text} onChange={onInputChange} aria-label={label} />
            <button onClick={resetInputField}>Reset</button>
        </div>
    )
}

export default Input;