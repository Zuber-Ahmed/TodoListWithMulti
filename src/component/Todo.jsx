import { Button, TextField } from "@mui/material";
import React,{useState} from "react";

export const Todo=()=>{
    const [txt,setTxt]=useState("")
    const [list,setList]=useState([])

    
      const handlead =()=>{
    txt !== " " && txt.length>0 && 
    
            setTxt(" ")}
        
       setList([...list,txt])
       setTxt(" ")

      
         


     const handledelete =(i)=>{
       let result=list.filter((elem,ind)=> ind !==i)
        setList(result)
     }



    return(
        <div className="Main03">
            <TextField label="Enter....." variant="outlined"  onChange={((e)=>setTxt(e.target.value))} />
            <Button variant="contained" color="primary" onClick={handlead}>Add</Button>
            {
                list.map((item,i)=>{
                    return(
                        <div>
                            <h1>{item}</h1>
                            <ul>
                                <li onClick={()=>handledelete(i)}>Delete</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
