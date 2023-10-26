import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

type ISRPros = {
    message:string
}

const ISR: NextPage<ISRPros> = (props) => {
    const {message} = props

    const router = useRouter();
    if(router.isFallback)
    {
        return <div>Loading</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main>
                <p>Created by ISR</p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps:GetStaticProps<ISRPros> = async(context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp} でうs`

    return {
        props:{
            message
        },
        revalidate:60
    }
}

export default ISR;