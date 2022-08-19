import React, { useState } from "react";
import {Grid,TextField,Button} from "@mui/material";
import { ItemTaskList, ItemTaskList2, ItemTaskList3 } from "./ItemTaskList";
import { Box } from "@mui/system";

export const Task = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [todo2, setTodo2]= useState([])
  const [todo3, setTodo3]=useState([])

  // console.log("orignalList",list);
    const handleDelet = (i) => {
      let result = list.filter((elem, ind) => ind !== i);
        setList(result)}

        const handleDelet2 = (i) => {
          let result = todo2.filter((elem, ind) => ind !== i);
            setTodo2(result)}
            const handleDelet3 = (i) => {
              let result = todo3.filter((elem, ind) => ind !== i);
                setTodo3(result)}

      const handleAdd = () => {
        if (task !== " " && task.length > 0) {
          setList([task,...list] );
        }
      };
      
      const handleForward =(item,i)=>{
        setTodo2([...todo2,item])
        console.log("todo2 BLOCK LEVEL",todo2);
        let result = list.filter((elem, ind) => ind !== i);
        setList(result)
      }
      const handleForward2 =(item,i)=>{
        setTodo3([...todo3,item])
        let result = todo2.filter((elem, ind) => ind !== i);
        console.log("=====>",result);
        setTodo2(result)
      }
      const handleBack =(item,i)=>{
        setList([...list,item])
        let result = todo2.filter((elem, ind) => ind !== i);
        console.log(result)
        setTodo2(result)
      }


  return (
    <div className="main05">
      <TextField
        label="New task name"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" onClick={handleAdd}>Create task</Button>
      <Box
        component="div"
        style={{ borderRadius: "5px", border: "2px solid black" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h3 style={{ textAlign: "center" }}>Todo</h3>
            {list && list?.map((item, i) => {
                return <ItemTaskList item={item} id={i} handleForward={handleForward} handleDelet={handleDelet} handleBack={handleBack} />;
              })}
          </Grid>
          <Grid item xs={4}>
            <h3 style={{ textAlign: "center" }}>Todo2</h3>
              {todo2 && todo2?.map((item,i) => <ItemTaskList2 item={item} id={i} handleForward2={handleForward2} handleDelet2={handleDelet2} handleBack={handleBack}/>)}
          </Grid>
          <Grid item xs={4}>
            <h3 style={{ textAlign: "center" }}>Todo3</h3>
            {todo3 && todo3?.map((item,i) => <ItemTaskList3 item={item} id={i} handleForward2={handleForward2} handleDelet3={handleDelet3} handleBack={handleBack}/>)}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
