import { useState } from 'react'
import Button from './button/Button'
import { differences } from '../data'

export default function Differences(){
    const [contentType,setContentType] = useState()


    function handleClick(type){
      setContentType(type)
    }
  
    return(
        <>
        <Button isActive={
            contentType === 'way'
        } onClick={() => handleClick('way') }>Way</Button>
          <Button isActive={
              contentType === 'easy'
            } onClick={() => handleClick('easy')}>Easy</Button>
          <Button isActive={
              contentType === 'program'
            } onClick={() => handleClick('program')}>Programm</Button>
          { contentType ? (<p>{differences[contentType]}</p>) : (<p>Press The Button</p>)}
            </>
    )
}