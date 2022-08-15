import React, { useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Animalpic = () => {
  const [animal, setAnimal] = useState("Elephant");
  return (
    <div className="ssub">
      <h1>Animal Gallary</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent className="txt2">{animal}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent className="txt">
              <img
                src={`Images/${animal}.jpg`}
                className="img"
                width={250}
                height={200}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Cat")}
            variant="contained"
            fullWidth
            color="secondary"
          >
            Cat
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Cheetah")}
            variant="contained"
            fullWidth
            color="secondary"
          >
            Cheetah
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Cub")}
            variant="contained"
            fullWidth
            color="secondary"
          >
            Cub
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Tiger")}
            variant="contained"
            fullWidth
            color="primary"
          >
            Tiger
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Zebra")}
            variant="contained"
            fullWidth
            color="primary"
          >
            Zebra
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Elephant")}
            variant="contained"
            fullWidth
            color="primary"
          >
            Elephant
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};