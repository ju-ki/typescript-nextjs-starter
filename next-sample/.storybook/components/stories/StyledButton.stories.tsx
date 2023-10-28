import {ComponentMeta, Story} from "@storybook/react"

import { StyledButton, StyledButtonProps } from "../StyledButton";
import React from "react";

export default {
    title:"StyledButton",
    component:StyledButton
} as ComponentMeta<typeof StyledButton>


export const Primary: Story<StyledButtonProps> = (props) => {
    return (
        <StyledButton {...props} variant="primary">
            Primary
        </StyledButton>
    )
}

export const Success: Story<StyledButtonProps> = (props) => {
    return (
        <StyledButton {...props} variant="success">
            Success
        </StyledButton>
    )
}

export const Transparent: Story<StyledButtonProps> = (props) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}