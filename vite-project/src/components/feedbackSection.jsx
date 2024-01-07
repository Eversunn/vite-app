import { useState, useRef } from 'react'
import Button from './button/Button'

function StateVsRef(){
    const input = useRef()
    const [value,setValue]= useState('')
    const [show,SetShow] = useState(false)

    function handleKeyDown(event){
        if(event.key ==='Enter'){
            SetShow(true)
        }
    }



    return(
        <div>
            <h3>Input Value: {show && input.current.value}</h3>
            <input ref={input} onKeyDown={handleKeyDown} type="text" className='control'/>
        </div>
    )
}

export default function Feedback(){
    const [form,setForm] =useState({
        name:'',
        reason:'',
        hasError:false,
    })
    function handleNameChange(event){

        setForm((prev)=>({
            ...prev,
            name:event.target.value,
            hasError:event.target.value.trim().length === 0
        }))
    }


    function toggleError(){
        setForm({
            hasError:((prev)=>!prev)
        })
    }




    return (
        <section>
            <Button onClick={toggleError}>Toggle Error</Button>
            <h3>FeedBack</h3>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="control" value={form.name} onChange={handleNameChange} style={{border: !form.hasError ? null: '1px solid red'}}/>
                <label htmlFor="reason">Reason</label>
                <select id="reason" className="control" onChange={event=> setForm((prev)=> ({...prev, reason:event.target.value}))}>
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="suggest">Suggest</option>
                </select>
                <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>
            </form>
            <StateVsRef></StateVsRef>
        </section>
    )
}