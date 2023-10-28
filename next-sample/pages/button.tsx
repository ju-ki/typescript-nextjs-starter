import { NextPage } from "next"
import styled from "styled-components"

type ButtonPros = {
    color:string,
    backgroundColor:string
}

const Button = styled.button<ButtonPros>`
    color: ${(props) => props.color};
    background:${(props) => props.backgroundColor};
    border:2px solid ${(props) => props.color};
    font-size:2px;
    margin:1em;
    padding:0.25em 1em;
    border-radius:8px;
    cursor:pointer
`

const Page: NextPage = () => {
    return (
        <div>
            <Button backgroundColor="transparent" color="#FF0000">
                Hello
            </Button>
            <Button backgroundColor="#1E90FE" color="white">
                World
            </Button>

        </div>
    )
}


export default Page;