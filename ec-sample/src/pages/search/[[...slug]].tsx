import BreadcrumbItem from "components/atoms/BreadcrumbItem";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Breadcrumb from "components/molecules/Breadcrumb";
import FilterGroup from "components/molecules/FilterGroup";
import Layout from "components/templates/Layout";
import { NextPage } from "next";
import Link from "next/link";
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
                paddingLeft={{ 
                    base:2,
                    md:3
                 }}
                 paddingTop={2}
                 paddingBottom={2}
            >
                <Box marginBottom={1}>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link href="/">トップヘ</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link href="/search">検索ヘ</Link>
                        </BreadcrumbItem>
                        {slug.slice(0, slug.length-1).map((category, i) => (
                            <BreadcrumbItem key={i}>
                                <Link href={`/search/${slug.slice(0, i+1).join('/')}`}>
                                    <a>{categoryNameDict[category] ?? 'Unknown'}</a>
                                </Link>

                            </BreadcrumbItem>
                        ))}
                        {slug.length == 0 && <BreadcrumbItem>全て</BreadcrumbItem>}
                        {slug.length > 0 && (
                            <BreadcrumbItem>
                                {categoryNameDict[slug[slug.length - 1]] ?? "Unknown"}
                            </BreadcrumbItem>
                        )}
                    </Breadcrumb>
                </Box>
                <Flex>
                    <Flex flexDirection={{ base:"column", md:"row" }}>
                        <Box as="aside" minWidth="200px" marginBottom={{ base:2, md:0 }}>
                            <FilterGroup
                                title="商品の状態"
                                items={[
                                    {label:"新品", name:"new"},
                                    {label:"中古", name:"used"},
                                ]}
                                value={conditions}
                                onChange={handleChange}
                            />
                        </Box>

                    </Flex>

                </Flex>

            </Box>
        </Layout>
    )
}