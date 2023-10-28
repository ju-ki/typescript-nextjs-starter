import { NextPage } from "next";
import Image from "next/image";

import CatImage from "../public/cat.png";


const ImageSample: NextPage<void> = (props) => {
    return(
        <div>
            <h1>画像表示</h1>
            <p>img tag</p>
            <img src="../public/cat.png" alt="猫の画像2" width={500} height={500}/>
            <p>img com</p>
            <main>
                <div className="w-screen h-screen -z-50">
                    <Image src={CatImage} alt="猫の画像" sizes="100vw" quality={100} fill className="object-cover" />
                    <div>
                        <h2>猫ちゃん</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ImageSample