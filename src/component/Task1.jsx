import { TextField } from "@mui/material"
import React from "react"

export const Task1 =()=>{
    return(
        <div>
            <div className="main06">
                <h2 style={{color:"blue"}}>Pain & Functional Description</h2>
                <p>The description of the current situation give your Optimum <br />
                    Trainer a picture of and clues           to the underlying causes of your <br />
                                   Problem.</p>
                If you have problem with pain/aches,stiffness.weakness or function problem,describe <br />
                 this/these below.(List the symptoms in descending order with the most troublesome first) <br />

            <div className="main6k1">
                
            </div>
            </div>
            <div className="main6k2">
                <pre>  <>Have you been diagnosed with this problem?</>  
                    
                    
                  <input type="radio" name="abcd" /> Not relevent
                <input type="radio" name="abcd" /> yes
                    <input type="radio" name="abcd" /> no 
                    </pre>
                <br />
                 
                <>Did the problem start after a physical trauma?</>
                <input type="radio" name="abcd" /> Not relevent
                <input type="radio" name="abcd" /> yes
                <input type="radio" name="abcd" /> no
                <br />
                <>Did the problem start after a mental trauma?</>
                <input type="radio" name="abcd" /> Not relevent
                <input type="radio" name="abcd" /> yes
                <input type="radio" name="abcd" /> no
                <br />
            </div>
            
        </div>
    )
}