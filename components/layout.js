import { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    marginLeft: "20px",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));
const Layout = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <Link href="/page/[page]" as="/page/1"><a>Full Access</a></Link>
        <Link href="/page/[page]" as="/page/2"><a>Restricted Access</a></Link> */}

      <CssBaseline />
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            variant='a'
            color='inherit'
            href="/"
            noWrap
            className={classes.toolbarTitle}
          >
            Test website
          </Link>
          <nav style={{ marginLeft: "100px" }}>
            <Link href='/page/[page]' as='/page/1'>
              <a class='navLink'>Full Access</a>
            </Link>
            <Link href='/page/[page]' as='/page/2'>
              <a class='navLink'>Restricted Access</a>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth='sm' component='main' className={classes.heroContent}>
        {props.children}
      </Container>
      {/* End hero unit */}
    </Fragment>
  );
};

export default Layout;
