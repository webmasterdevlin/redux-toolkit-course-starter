import React, { useEffect, useState } from "react";
import TitleBar from "components/TitleBar";
import UpdateUiLabel from "components/UpdateUiLabel";
import {
  Box,
  Button,
  createStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const HeroesPage = () => {
  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  /*local state*/
  const [counter, setCounter] = useState("0");

  useEffect(() => {}, []);

  return (
    <div>
      <TitleBar title={"Super HeroesPage"} />
      <UpdateUiLabel />
      <>
        <h2>Loading.. Please wait..</h2>

        <Box
          mb={2}
          display={"flex"}
          flexDirection={smallScreen ? "column" : "row"}
          justifyContent={"space-between"}
        >
          <Typography>
            <span>firstName lastName knownAs</span>
            <span> - marked</span>
          </Typography>
          <div>
            <Button
              className={classes.button}
              variant={"contained"}
              color={"default"}
            >
              Mark
            </Button>{" "}
            <Button
              className={classes.button}
              variant={"contained"}
              color={"secondary"}
            >
              Remove
            </Button>{" "}
            <Button
              className={classes.button}
              variant={"outlined"}
              color={"secondary"}
            >
              DELETE in DB
            </Button>
          </div>
        </Box>
      </>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
      >
        Re-fetch
      </Button>
    </div>
  );
};

export default HeroesPage;

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: "0 0.5rem",
      "&:focus": {
        outline: "none",
      },
    },
  })
);
