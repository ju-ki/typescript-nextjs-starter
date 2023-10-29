import React, { useState } from "react";

type InputProps = JSX.IntrinsicElements["input"] & {
    label:string
}


const Input = (props: InputProps) => {
    const {label, ...rest} = props;

    const [text, setText] = useState("");

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
        setText(e.target.value);
    }

    const resetInputField = () => {
        setText("");
    }

    return (
        <div>
            <label htmlFor={props.id}>{label}</label>
            <p>{text}</p>
            <input type="text" value="入力" onChange={onInputChange} />
            <button onClick={resetInputField}>Reset</button>
        </div>
    )
}

export default Input;