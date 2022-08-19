import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const Api = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <Card className="main">
              <CardContent>
                {/* <Grid container spacing={6}> */}

                <Grid item xs={4}>
                  <h4>$ = {item.price}</h4>
                </Grid>
                <Grid item xs={2}>
                  <h3>{item.title}</h3>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={item.image}
                    style={{ height: 90, width: 90 }}
                    alt="animal"
                  />
                </Grid>
                <h4>{item.description.substring(0, 40)} </h4>

                {/* </Grid> */}
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
