import Text from "components/atoms/Text";
import Layout from "components/templates/Layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Category, Condition } from "types/data";

const Anchor = styled(Text)`
    cursor:pointer
    &:hover {
        text-decoration: underline
    }
`

const categoryNameDict: Record<Category, string> = {
    book:"本",
    shoes:"シューズ",
    clothes:"トップス",
}

const SearchPage: NextPage = () => {
    const router = useRouter();
    const slug: Category[] = Array.isArray(router.query.slug) ? (router.query.slug  as Category[]) : [];

    const conditions = (() => {
        if(Array.isArray(router.query.condition)){
            return router.query.condition as Condition[]
        }
        else if(router.query.condition){
            return [router.query.condition as Condition]
        }else{
            return [];
        }
    })()

    const handleChange = (selected:string[]) => {
        router.push({
            pathname:router.pathname,
            query:{
                slug,
                condition:selected
            }
        })
    }

    return (
        <Layout>
            <Box
                
            >

            </Box>
        </Layout>
    )
}