import TeachingParagraph2 from "./teaching-Paragraph-2"
import { ways } from "../data"

export default function TeachingSection(){
    return(
        <>
        <section>
        <h3>Teaching Header</h3>
        <ul>
        {ways.map((way)=>  <TeachingParagraph2 key={way.title} {...way}/>
        )}
        </ul>
        </section>
        </>
    )
}