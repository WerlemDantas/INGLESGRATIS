import Apresentation from "@/components/apresentation";
import ContentCourse from "@/components/contentCourses";

import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300 h-full">
          
          <Header/>
           <br /><br />
        

        <div className="">
          <Apresentation/>
        </div>
  
        <h1 className="flex justify-center text-4xl font-extrabold text-green-900">Os melhores cursos gratuitos online:</h1>
         
         <div>
          <ContentCourse/>
         </div>
    </div>
  );
}
