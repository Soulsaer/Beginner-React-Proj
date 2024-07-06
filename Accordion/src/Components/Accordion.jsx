import React from "react";
import { useState } from "react";
import questionsAndAnswers from "./data";
const Accordion = ()=>{
    const [selected, setSelected] = useState(null);
    const [Enable, setEnable] = useState(false);
    const [multiple, setMultiple] = useState([]);


    const handleSingleSelection = (currentId)=>{
        setSelected(currentId === selected ? null : currentId);
    }

    const handlemulitSelection = () =>{
        setEnable(!Enable);
        setSelected(null);
        setMultiple([]);
    }

    const handleMulti = (currentId)=>{
        if(multiple.includes(currentId)){
            setMultiple(multiple.filter(id => id !== currentId))
        }
        else{ 
            setMultiple([...multiple,currentId]);
        }
        console.log(currentId);
    }



    return (
        <div className="row ">
            <div className="col-12 text-center ">
            {
                questionsAndAnswers && questionsAndAnswers.length > 0 ?
                questionsAndAnswers.map((key,index)=>(
                    <>
                    <div className="card bg-success my-3 text-white">
                    <div key={index} onClick={
                        Enable 
                        ? ()=> handleMulti(key.id) 
                        : ()=> handleSingleSelection(key.id)}>{key.question}</div>
                    
                    {
                        selected === key.id ? 
                        (<><div key={index}>{key.answer}</div></>)
                        : null
                    }

                    {   multiple.includes(key.id)
                        ? (<><div key={index}>{key.answer}</div></>) 
                        : null
                    }
                    <br/>
                    </div>
                    </>

                )) 
                
                : <div> No item Available</div>
            }
            <input type="checkbox" checked={Enable} onChange={handlemulitSelection}/><span> Enable Multi Selection</span>
            </div>
        </div>
    )
}

export default Accordion