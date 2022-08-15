import React, { useState } from "react";
import { Grid, Card, Button, CardContent } from "@mui/material";

export const Animal = () => {
  const [animal, setAnimal] = useState("Monkey");

  return (
    <div className="ssub">
      <h1>Animal Home</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent className="txt">{animal}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => setAnimal("CAT")}
            fullWidth
            color="warning"
          >
            Cat
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => setAnimal("TIGER")}
            fullWidth
            color="warning"
          >
            Tiger
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => setAnimal("ZEBRA")}
            fullWidth
            color="warning"
          >
            Zebra
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setAnimal("GOAT")}
            fullWidth
            color="error"
          >
            Goat
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setAnimal("CUB")}
            fullWidth
            color="error"
          >
            Cub
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setAnimal("ELEPHANT")}
            fullWidth
            color="error"
          >
            Elephant
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setAnimal("CHEETAH")}
            fullWidth
            color="error"
          >
            Cheetah
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};