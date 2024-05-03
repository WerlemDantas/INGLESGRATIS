import Image from "next/image";
import logo from "../../public/images/G.png"
import { IconFace, IconInsta, IconLinkedin, IconTwitter } from "./icons";

export default function Footer (){
    return(
        <div className="flex flex-row w-full h-[70px] bg-gradient-to-r from-gray-400 to-gray-700 z-50">
            
            <div className="flex ml-10 mt-4 mb-4 mr-96">
                <a href="/">
            <Image
            src={logo}
            alt="logo"
            height={40}
            width={40}
            />
            </a>
            </div>

            <div className="flex flex-row items-center gap-4 ml-96">
                <a className="ml-60 hover:bg-gray-200 rounded-full" href="https://pt.wikipedia.org/wiki/Instagram" target="_blank">{IconInsta}</a>
                <a className=" hover:bg-gray-200 rounded-full" href="https://pt.wikipedia.org/wiki/Facebook" target="_blank">{IconFace}</a>
                <a className=" hover:bg-gray-200 rounded-full" href="https://pt.wikipedia.org/wiki/LinkedIn" target="_blank">{IconLinkedin}</a>
                <a className=" hover:bg-gray-200 rounded-full p-1" href="https://pt.wikipedia.org/wiki/Twitter" target="_blank">{IconTwitter}</a>

            </div>
        </div>
    )
}