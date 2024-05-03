import Course from "./course";
import img1 from "../../public/images/course1.jpg"
import img2 from "../../public/images/course2.jpg"
import img3 from "../../public/images/course3.jpg"
import img4 from "../../public/images/course4.jpg"
import img5 from "../../public/images/course5.jpg"
import img6 from "../../public/images/course6.jpg"
import img7 from "../../public/images/course7.jpg"
import img8 from "../../public/images/course8.jpg"
import img9 from "../../public/images/course9.jpg"

export default function ContentCourse (){
    return (

        <div>
            <Course 
            href="https://curso.mairovergara.com/cadastro-gratuito/ingles-gratuito?utm_source=google_search&utm_content=aprender%20ingles%20rapido&gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pVKCdQ1iFKDE1mK8sfwUGaPjdtTy6l5tb1xbRD3G1dCMP0hLGT9PSBoCzekQAvD_BwE"
            img={img1}
            plat="Mario Vergara - CURSOS"
            classname="mr-96"
            />
            
            <Course
            img={img2}
            plat="American & Britsh Academy"
            href="https://learn.abaenglish.com/pt/curso-aprender-falar-ingles-50/?matchtype=p&network=Google&campaign_id=14111561511&adgroup_id=124251683246&keyword=curso%20ingl%C3%AAs%20de%20gra%C3%A7a&placement=&ad_id=629738852075&campaign=14111561511&gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pXOLzWUqw1IeV_hRrA1nVOfqfhggCfa3vMoJo7gKzJTY2C1hoJQQZBoCnHkQAvD_BwE"
            classname="mr-80"
            class="ml-6"
            />
            <Course
            img={img3}
            plat="KULTIVI - Curso de inglês completo"
            href="https://kultivi.com/cursos/idiomas/ingles"
            classname="mr-64"
            />
            <Course
            img={img4}
            plat="Open English - Curso de inglês"
            href="https://www.openenglish.com.br/aulas-de-ingles-gratis/"
            classname="mr-72"
            class="ml-4"
            />
            <Course
            img={img5}
            plat="GINEAD - Curso de inglês online"
            href="https://www.ginead.com.br/curso/curso-de-ingles-intermediario-online-gratis"
            classname="mr-72"
            />
            <Course
            img={img6}
            plat="Fundação MUDES - cursos gratuitos"
            href="https://mudes.org.br/estudante/cursos-de-ingles-gratuitos-104/"
            classname=" mr-60"
            />
            <Course
            img={img7}
            plat="EDUNE - Curdo de Inglês Básico"
            href="https://www.edunecursos.com.br/curso/curso-online-gratuito-ingles-basico?gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pfTttgW4Bb_5jRLu8iwHaNXLtWJ4CUHdW_Ytxkq2ozOVEDwCaXt2SxoC1cgQAvD_BwE"
            classname="mr-72"
            />
            <Course
            img={img8}
            plat="PENSAR CURSOS - Curso de inglês Online"
            href="https://www.pensarcursos.com.br/curso/curso-de-ingles-completo"
            classname="mr-44"
            />
            <Course
            img={img9}
            plat="UDEMY - Nathaly Aprendendo rápido"
            href="https://www.udemy.com/course/curso-ingles-essencial-express/"
            classname="mr-60"
            />
            <Course
            img={img9}
            plat="UDEMY - davisson Galindo"
            href="https://www.udemy.com/course/curso-de-ingles-revisao-do-simple-present/"
            classname="mr-80"
            class="ml-10"
            />
            <Course
            img={img9}
            plat="UDEMY - Davi Duarte Ribeiro"
            href="https://www.udemy.com/course/ingles-gramatica-basica-gratis/"
            classname="mr-80"
            class="ml-6"
            />
            <Course
            img={img9}
            plat="UDEMY - Cinthia Locatelli"
            href="https://www.udemy.com/course/mini-curso-de-ingles-gratuito/"
            classname="mr-96"
            />
                        

        </div>
    )
}