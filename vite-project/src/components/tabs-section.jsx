import Button from "./button/Button";

export default function TabsSetction({active, onChange}){
    return(
        <>
        <section className="tabs">
            <Button isActive={active ==='main'} onClick={()=>onChange('main')}>Main</Button>
            <Button isActive={active ==='feedback'} onClick={()=>onChange('feedback')}>FeedBack</Button>
        </section>
        </>
    )
}