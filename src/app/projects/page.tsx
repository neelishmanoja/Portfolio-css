import "@/css/projects.css"
import Image from "next/image"
import amazon from "../../../public/amazon.jpeg"
import resume from "../../../public/static resume.png"
import Link from "next/link"
import Header from "@/components/header"


export default function projects(){
    return(
        <div>
        <Header text="Projects."/>
            <div className="hero">
                <p className="amazon-p">Amazon-Clone:</p>

                <Link href="https://github.com/neelishmanoja/amazon-clone">
                <Image src={amazon} alt="amazon" className="amazon"/>
                </Link>
                <p className="resume-p">Static Resume:</p>
                <div className="resume " >
                    
                    <Link href="https://github.com/neelishmanoja/hackathon-milstones/tree/main/milestone1">
                    <Image src={resume} alt="resume"/></Link>
                    </div>
            </div>
        </div>
    )
}