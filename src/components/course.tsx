import Image from "next/image";
import img1 from "../../public/images/lingua-inglesa.png"

interface CourseProps{
    img?: any
    plat?: string
    href?: string
    classname?: string
    class?: string

}

export default function Course(props:CourseProps){
    return (
        <div>
            <div className="flex flex-row bg-green-100 ml-14 mr-14 mt-8 mb-4 p-8 rounded-xl hover:scale-105 transition-all">
                <Image
                src={props.img}
                alt=""
                height={90}
                width={90}
                />

                <div className={`ml-20 ${props.classname}`}>
                    <h1 className="font-bold mb-4 text-2xl text-green-900">{props.plat}</h1>
                    <a className="text-xl text-green-700 hover:text-blue-900" href={props.href} target="_blank">Ir para o curso</a>
                </div>

                <div className=" ">
                    <Image
                    src={img1}
                    alt="bandeira"
                    height={100}
                    width={100}
                    className={props.class}
                    />
                </div>
            </div>
        </div>
    )
}