import "@/css/hero.css"
import Link from "next/link"
import Button from "./button"
import Image from "next/image"
import mypic from "../../public/mypic.jpeg"



export default function Hero(){
    return(
        <div className="hero">
            {/*left section */}
            <div>
                <h1 className="first">Make anything posible with</h1>
                <span className="second">web development</span>
            </div>
            
            <p className="third">Hi! i am</p>
            <span className="forth">Neelish Manoja</span>
            <div className="button-main">
                <div className="button-div"><Link href="/about"> <Button test="About"/>
                </Link></div>
                <div className="button-div"><Link href="/projects"> <Button test="Projects"/>
                </Link></div>
                <div className="button-div"><Link href="/contact"> <Button test="Contact me"/>
                </Link></div>
            </div>


            {/*right section */}
            <div  className="image">
                <Image src={mypic} alt="mypic"/>
            </div>

        </div>
    )
}