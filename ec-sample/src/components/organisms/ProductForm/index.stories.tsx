import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductForm from ".";

export default {
    title:"Organisms/ProductForm",
    argTypes:{
        description:"出品ボタンを押した時のイベントハンドラ",
        table:{summary:"function"}
    }
} as ComponentMeta<typeof ProductForm>

const Template : ComponentStory<typeof ProductForm> = (args) => (
    <ProductForm {...args}/>
)

export const Form = Template.bind({});