import { Card, CardContent, Grid } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";

export const ItemTaskList = ({ item,handleForward,id,handleDelet,handleBack }) => {
//   console.log("tasklist", item);

  return (
    <>
      <Grid container>
        <Grid item xs={3} md={12}>
          <Card
            component="div"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5px",
              alignText: "center",
              backgroundColor: "lightblue",
            }}
          >
            <CardContent> {item}</CardContent>
            <CardContent
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <ArrowBackIosNew />
              <DeleteForeverIcon onClick={()=>handleDelet(id)} style={{ cursor: "pointer" }} />
              <ArrowForwardIos
                onClick={()=>handleForward(item,id)}
                style={{ cursor: "pointer" }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export const ItemTaskList2 = ({ item,handleForward2,id,handleDelet2,handleBack }) => {
    //   console.log("tasklist", item);
    
      return (
        <>
          <Grid container>
            <Grid item xs={3} md={12}>
              <Card
                component="div"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5px",
                  alignText: "center",
                  backgroundColor: "lightblue",
                }}
              >
                <CardContent> {item}</CardContent>
                <CardContent
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ArrowBackIosNew onClick={()=>handleBack(item,id)} style={{ cursor: "pointer" }} />
                  <DeleteForeverIcon onClick={()=>handleDelet2(id)} style={{ cursor: "pointer" }}/>
                  <ArrowForwardIos
                    onClick={()=>handleForward2(item,id)}
                    style={{ cursor: "pointer" }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      );
    };

export const ItemTaskList3 = ({ item,handleForward2,id,handleDelet3,handleBack }) => {
        //   console.log("tasklist", item);
        
          return (
            <>
              <Grid container>
                <Grid item xs={3} md={12}>
                  <Card
                    component="div"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "5px",
                      alignText: "center",
                      backgroundColor: "lightblue",
                    }}
                  >
                    <CardContent> {item}</CardContent>
                    <CardContent
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <ArrowBackIosNew />
                      <DeleteForeverIcon onClick={()=>handleDelet3(id)} style={{ cursor: "pointer" }}/>
                      <ArrowForwardIos
                        onClick={()=>handleForward2(item)}
                        style={{ cursor: "pointer" }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          );
        };
    