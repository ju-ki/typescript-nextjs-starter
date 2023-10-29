import {Meta, StoryObj, ComponentStory} from "@storybook/react"
import { StyledButton, StyledButtonProps } from "./StyledButton";
import {action} from "@storybook/addon-actions"
import MDXDocument from "./StyledButton.mdx"
import {linkTo} from "@storybook/addon-links"
import { useState } from "react";

const meta =  {
    title:"Styled Button",
    component:StyledButton,
    parameters:{
        docs:{
            page:MDXDocument
        }
    },
    argTypes:{
        onClick:{action:"clicked"},
        variant:{
            control:{type:'radio'},
            options:["primary", "success", "transparent"]
        },
        children:{
            control:{type:"text"}
        }
    }
} satisfies Meta<typeof StyledButton>;

export default meta;

const incrementAction = action("increment");

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {
    ...args
} />

export const TemplateTest = Template.bind({});
TemplateTest.args = {
    variant:"primary",
    children:"Primary"
}

type Story = StoryObj<typeof meta>;


export const Primary: Story<StyledButtonProps> = (props) => {
    const [count, setCount] = useState(0);
    const onClick = (e: React.MouseEvent) => {
        incrementAction(e, count);
        setCount((c) => c+1)
    }
    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Count:{count}
        </StyledButton>
    )
}

export const Success: Story<StyledButtonProps> = (props) => {
    return (
        <StyledButton {...props} variant="success" onClick={linkTo("Styled Button", "Transparent")}>
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