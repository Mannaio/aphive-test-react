import axios from "axios";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { Fragment } from "react";
import useSwr from "swr";
import { useState } from "react";
const fetcher = (url) => fetch(url).then((res) => res.json());
const createData = (name, calories) => {
  return { name, calories };
}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    minWidth: 275,
  },
});
const Page = ({ rows, security }) => {
  const classes = useStyles();
  const [prompt, setPrompt] = useState("");
  console.log(security.view);
  console.log(
    security &&
      security.view &&
      security.view.length > 0 &&
      security.view.includes("GRID")
  );
  const handleClick = (row) => {
    if (row) {
      let prompt = "";
      prompt += `Brand:${row.name}  Cal:${row.calories}  `;
      setPrompt(prompt);
    }
  }
  return (
    <Fragment>
      <Container style={{ textAlign: "center", margin: "10px" }} maxWidth='sm'>
        {security &&
          security.view &&
          security.view.length > 0 &&
          security.view.includes("SEARCH") && (
            <TextField
              label='Search'
              id='outlined-size-small'
              variant='outlined'
              size='small'
            />
          )}
        {security &&
          security.view &&
          security.view.length > 0 &&
          security.view.includes("ADD") && (
            <Button
              style={{ marginLeft: "10px" }}
              variant='contained'
              color='primary'
            >
              Add
            </Button>
          )}
      </Container>
      <Card className={classes.root} variant='outlined'>
        <CardContent>{prompt}</CardContent>
      </Card>
      {security &&
        security.view &&
        security.view.length > 0 &&
        security.view.includes("GRID") && (
          <TableContainer>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Brands</TableCell>
                  <TableCell align='right'>Points</TableCell>
                  <TableCell align='center'>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell
                      align='right'
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClick(row)}
                    >
                      {row.calories}
                    </TableCell>
                    <TableCell align='right'>
                      {security &&
                        security.access &&
                        security.access.length > 0 &&
                        security.access.includes("ADD") && (
                          <Button
                            style={{ marginLeft: "10px" }}
                            variant='contained'
                            color='primary'
                          >
                            Add
                          </Button>
                        )}
                      {security &&
                        security.access &&
                        security.access.length > 0 &&
                        security.access.includes("EDIT") && (
                          <Button
                            style={{ marginLeft: "10px" }}
                            variant='contained'
                            color='primary'
                          >
                            Edit
                          </Button>
                        )}
                      {security &&
                        security.access &&
                        security.access.length > 0 &&
                        security.access.includes("DELETE") && (
                          <Button
                            style={{ marginLeft: "10px" }}
                            variant='contained'
                            color='primary'
                          >
                            Delete
                          </Button>
                        )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
    </Fragment>
  );
};

export default Page;

export async function getStaticPaths() {
  const paths = [{ params: { page: "1" } }, { params: { page: "2" } }];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const page = params.page;
  const rows = [
    createData("Divin", 159),
    createData("Storic", 237),
    createData("Shark", 262),
    createData("Cybero", 305),
    createData("Luminous", 356),
  ];
  console.log(page);
  const res = await fetch(`http://localhost:3000/api/security/` + page);
  const security = await res.json();
  console.log(security, "res");
  return {
    props: { page, rows, security },
  };
}

