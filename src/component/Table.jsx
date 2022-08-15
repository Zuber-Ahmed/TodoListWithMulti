import { Grid, Card,TextField,CardContent} from "@mui/material";
import React, { useState } from "react";

export const Table =()=>{
    const [arr]=useState([1,2,3,4,5,6,7,8,9,10])
    const [num,setNum]=useState(0)
    


    return(
        <React.Fragment>
            <h1>This Is Table</h1>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Card>
                    <CardContent>
            <TextField lable="outlined" variant="outlined" onChange={((e)=>setNum(e.target.value))} />
            </CardContent>
                    </Card>
                    </Grid>
            </Grid>
            {
                arr.map(item=>
                    <div>
                        <Grid item xs={2}>
                            <Card >
                                <CardContent>
                              <h1>{num}X{item}={item*num}</h1>
                                </CardContent>
                            </Card>
                        </Grid>
                    </div>
                 )
            }
        
            </React.Fragment>

)
}