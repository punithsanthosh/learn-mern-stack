import { useEffect, useState } from "react";

const Input = (props) => {

    const [inputText,setInputText] = useState();
    const handleInput = (e) => {
            setInputText(e.target.value);
            console.log(e.target.value);
        }    
const handleSubmit = (e) => {
    if(!isVAlid)
        {
            alert("invalid text")
        }
        else
        {
            props.addTaskHandler(inputText);
            setInputText("")
        }
        e.preventDefault();
        props.addTaskHandler(inputText);
    }
    useEffect{()=>{
        if(inputText.length>0)
            {

            }
    }
    return (
            <form onSubmit={handleSubmit}>
                <input
                 type="text" 
                 placeholder="enter your task here"
                value={inputText}
                onChange={handleInput}
            />
                <button type="submit">Add Task</button>
            </form>
        )
    }
    export default Input;