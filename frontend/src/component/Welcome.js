import { Grid, Typography } from "@material-ui/core";
import './Welcome.css';

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="left"
      justify="center"
      style={{ padding: "5%", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2"><div class="myclass">Welcome to</div></Typography>
        <Typography variant="h2"><h2><div class="myclass">Career Grip</div></h2></Typography>

      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
