import Image from "next/image";
import logo from "../../public/images/G.png"

export default function Header (){
    return (
        <div>
            <div className="flex flex-row h-[70px] w-full bg-gradient-to-r from-green-400 to-green-700 fixed z-50 top-0 left-0">
                
                <div className="flex ml-10 mt-4 mb-4 mr-80">
                <a href="/">
                <Image
                src={logo}
                alt="logo"
                height={40}
                width={40}
                />
                </a>
                </div>

                

                <div className="flex gap-4 items-center ml-96 ">
                    <a className="ml-96 text-gray-900 hover:text-gray-700" href="https://wa.me/5511958500429" target="_blank">SUPORTE</a>
                    <a className="text-gray-900 hover:text-gray-700" href="https://santaterezinha.org.br/" target="_blank">ONG PARCEIRA</a>
                </div>
                

            </div>
        </div>
    )
}