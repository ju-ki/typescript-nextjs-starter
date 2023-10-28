import { NextPage } from "next"
import Link, { LinkProps } from "next/link"
import React from "react"
import styled from "styled-components"
import css from "styled-jsx/css"

const redBox = css`
    padding:0.25em 1em;
    border:3px solid #ff0000;
    border-radius:10px;
`

const font = css`
    color:#1e90ff;
    font-size:2em
`

const Button = styled.button`
    background:transparent;
    margin:1em;
    cursor:pointer;

    ${redBox}
    ${font}
`

const Text = styled.p`
    font-weight:bold;

    ${font}
`

const BorderedText = styled(Text)`
    padding:8px 16px;
    border:3px solid blue;
    border-radius:8px;
`

const Text2 = styled.a`
    color:green
    border:3xp solid green
`

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?:string
    children:React.ReactNode
}

const BaseLink = (props:BaseLinkProps) => {
    const {className, children, ...rest} = props;
    return (
        <Link  {...rest}>
            <p className={className}>{children}</p>
            {/* <a className={className}>{children}</a> */}
        </Link>
    )
}

const StyledLink = styled(BaseLink)`
    color:#1e90ff;
    font-size:2em;
`

const Text3 = styled.span`
    color:${(props) => props.theme.colors.red};
    font-size:${(props) => props.theme.fontSizes[6]};
    margin:${(props) => props.theme.space[2]};
`


const Page: NextPage = () => {
    return (
        <div>
            <Button>Hello</Button>
            <Text>Next.js</Text>
            <BorderedText>React</BorderedText>
            <Text2 as="a" href="/">
                Go TO Index
            </Text2>
            <StyledLink href="/">GoToIndex</StyledLink>
            <Text3>aaa</Text3>
        </div>

    )
}


export default Page;