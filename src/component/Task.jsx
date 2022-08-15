import { Card, CardContent, Grid, TextField,Button } from "@mui/material";
import React, { useState } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export const Task =()=>{
    const [task,setTask]=useState("")
    const [list,setList]=useState([])

    const handledelet =(i)=>{
       let result=list.filter((elem,ind)=> ind != i)
        setList(result)
        console.log(list)
    }


   
    return(
        <div className="main05">

         <TextField label="New task name" 
         variant="outlined" value={task} onChange={((e)=> setTask(e.target.value))}/>

         <Button onClick={()=>task !==" " && task.length>0 && setList([...list,task])}>Create task</Button>
            <Grid container spacing={4}>



                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                       <h2>Backiog</h2>
                       {
                        list.map((item,i)=>{
                            return(
                                <div>
                                    <h4>{item} 
                                    

                                    <sub>  {<KeyboardBackspaceIcon   />}    
                                        {<ArrowRightAltIcon  />}
                                        {<DeleteForeverIcon onClick={()=>handledelet (i)}/>}</sub></h4>
                                                                 
                                </div>
                            )
                        })
                       }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <h2>TO DO</h2>
                            

                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                       <h2>Ongoing</h2>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                       <h2>Done</h2>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}