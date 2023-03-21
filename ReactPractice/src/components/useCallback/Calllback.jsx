import React from 'react'
import { useCallback } from 'react';
import { useState } from "react";
import Button from './Button';
import Count from './Count';

function Calllback() {
    const [age, setage] = useState(0)
    const [salary, setsalary] = useState(0)
    const agehandle=useCallback(
        ()=>{
            setage(age+1)
        },
      [age],
    )
    
    const salaryhandle= useCallback(
        ()=>{
            setsalary(salary+1)
        },
      [salary],
    )
    
  return (
   <>
     <Count type={age}/>
    <Button handleclick={agehandle}>Increment age</Button>
     <Count type={salary}/>
    <Button handleclick={salaryhandle}>Increment salary</Button>
   </>
  )
}

export default Calllback