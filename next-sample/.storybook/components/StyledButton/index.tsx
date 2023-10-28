import styled, {css} from "styled-components"

const variants = {
    primary:{
        color:"red",
        backgroundColor:"blue",
        border:"none"
    },
    success:{
        color:"#ffffff",
        backgroundColor:"green",
        border:"none"
    },
    transparent:{
        color:"#111111",
        backgroundColor:"transparent",
        border:"1px solid red"
    },
} as const


export type StyledButtonProps = {
    variant: keyof typeof variants
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${({variant}) => {
        const style = variants[variant];
        return css`
            color:${style.color};
            border:${style.border};
        `;
    }}


    border-radius:100px;
    font-size:14px;
    height:38px;
    line-height:22px;
    letter-spacing:0;
    cursor:pointer;

    &:focus {
        outline:none;
    }
`