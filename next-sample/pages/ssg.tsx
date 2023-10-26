import { GetStaticProps, NextPage } from "next"
import Head from "next/head"

type SSGProps = {
    message:string
}

const SSG: NextPage<SSGProps> = (props) => {
    const {message} = props;
    return (
        <div>
            <Head>
                <title>Static site Genereation</title>
                <link rel="icon" href="../public/favicon.ico"/>
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド
                </p>
                <p>
                    このページは静的サイト生成によってビルド
                </p>
                <p>
                    {message}
                </p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<SSGProps> = async(context) =>{ 
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp} にgetStaticPropsが実行されました`
    console.log(message);
    return {
        props: {
            message
        }
    }
    
}

export default SSG;