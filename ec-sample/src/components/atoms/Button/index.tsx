import styled from "styled-components";
import { Responsive } from "@/types/styles";
import { toPropValue,Color, FontSize, LetterSpacing, LineHeight, Space } from "@/utils/styles";

export type ButtonVariant = 'primary'| 'secondary' | 'danger';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variants?:ButtonVariant
    fontSize?:Responsive<FontSize>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>
    fontWeight?:Responsive<string>x
}