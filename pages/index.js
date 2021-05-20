import Layout from "../components/layout";
import Typography from "@material-ui/core/Typography";
import { Fragment } from "react";
const Home = (props) => {
  return (
    <Fragment>
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        Welcome
      </Typography>
      <Typography
        variant='h5'
        align='center'
        color='textSecondary'
        component='p'
      >
        This is the test
      </Typography>
    </Fragment>
  );
};

export default Home;
