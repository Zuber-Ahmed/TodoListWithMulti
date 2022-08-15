import React from "react";
import {Grid,Card,CardContent} from "@mui/material"
import { Link } from "react-router-dom";


export const Navbar =()=>{
    return(
      <div className="main02">
     <React.Fragment >
       <Grid container spacing={4}>
          <Grid item xs={2}>
             <Card>
            <CardContent>
               
                <Link style={{textDecoration:"none"}} to="/Home">Home</Link>
            </CardContent>
           </Card>
          </Grid>
        {/* </Grid> */}

        {/* <Grid container spacing={6}> */}
          <Grid item xs={2}>
          <Card>
            <CardContent>
                <Link to="/Animals" style={{textDecoration:"none"}}  >Animal</Link>
            </CardContent>
          </Card>
          </Grid>
        {/* </Grid> */}
        {/* <Grid container spacing={3}> */}
          <Grid item xs={2}>
          <Card>
            <CardContent>
                <Link to="/Animalpic" style={{textDecoration:"none"}} >Animalpic</Link>
            </CardContent>
          </Card>
          </Grid>
        {/* </Grid> */}
        {/* <Grid container spacing={3}> */}
          <Grid item xs={2}>
          <Card>
            <CardContent>
                <Link to="/Todo" style={{textDecoration:"none"}} >Todo</Link>
            </CardContent>
          </Card>
          </Grid>
        {/* </Grid> */}
       
        {/* <Grid container spacing={3}> */}
          <Grid item xs={2}>
          <Card>
            <CardContent>
                <Link to="/Table"  style={{textDecoration:"none"}} >Table</Link>
            </CardContent>
          </Card>
          </Grid>
        {/* </Grid> */}
        {/* <Grid container spacing={3}> */}
          <Grid item xs={2}>
          <Card>
            <CardContent>
                <Link to="/Api"style={{textDecoration:"none"}} >Api</Link>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardContent>
                <Link to="/Task" style={{textDecoration:"none"}}>Task</Link>
              </CardContent>
            </Card>

          </Grid>
          <Grid item xs={2}>
           <Card>
            <CardContent>
              <Link to="/Task1" style={{textDecoration:"none"}}>Task1</Link>
            </CardContent>
           </Card>
          </Grid>
        </Grid>
        

        </React.Fragment>
        </div>
    )
}