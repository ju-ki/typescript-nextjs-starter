import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
    title:"Atoms/Button",
    argTypes:{
        variant:{
            options:["primary", "secondary"],
            control:{type:"radio"},
            defaultValue:"primary",
            description:"ボタンバリアント",
            table:{
                type:{summary:"primary | secondary"},
                defaultValue:{summary:"primary"}
            }
        },
        children:{
            control:{type:"text"},
            defaultValue:"Button",
            description:"ボタンテキスト",
            table:{
                type:{summary:"string"}
            }
        },
        disabled:{
            control:{type:"boolean"},
            defaultValue:false,
            description:"Disabledフラグ",
            table:{
                type:{summary:"boolean"}
            }
        },
        width:{
            control:{type:"number"},
            description:"横幅",
            table:{
                type:{summary:"number"}
            }
        },
        height:{
            control:{type:"number"},
            description:"縦幅",
            table:{
                type:{summary:"number"}
            }
        },
        onClick:{
            description:"onclickイベントハンドラ",
            table:{
                type:{summary:"function"}
            }
        },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {variants:"primary", children:"Primary Button"}

export const Secondary = Template.bind({})
Secondary.args = {variants:"secondary", children:"Secondary Button"}

export const Disabled = Template.bind({})
Disabled.args = {disabled:true, children:"Disabled Button"}