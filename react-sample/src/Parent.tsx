import { memo, useState } from "react";

type FizzProps = {
    isFizz: boolean
};

const Fizz = (props: FizzProps) => {
    const {isFizz} = props;
    console.log("fizz", isFizz);
    
    return <span>{isFizz ? "Fizz" : ""}</span>
}

type BuzzProps = {
    isBuzz: boolean
    onClick: () => void
}

const areBuzzPropsEqual = (prevProps: BuzzProps, nextProps: BuzzProps) => {
    return prevProps.isBuzz === nextProps.isBuzz;
}

const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz, onClick} = props;
    return <span onClick={onClick}>{isBuzz ? "Buzz" : ""}</span>
}, areBuzzPropsEqual)

export const FizzBuzz = () => {
    const [count, setCount] = useState(1);
    const isFizz = count % 3 === 0;
    const isBuzz = count % 5 === 0;

    const onBuzzClick = () => {
        console.log("clicked buzz", isBuzz);
    }

    console.log("rendering parent");
    
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
            <p>{`現在のカウント:${count}`}</p>
            <p>
                <Fizz isFizz={isFizz}/>
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
            </p>
        </div>
    )
}
