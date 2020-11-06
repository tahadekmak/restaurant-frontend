import React from "react";
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import withStyles from "@material-ui/core/styles/withStyles";
import {TableCell} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

function Visited() {


    const StyledTableCell = withStyles((theme) => ({
        head: {
            textAlign: "center",
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            textAlign: "center",
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const rows = [
        {name: "Al Turki", date: "28/8/1997"},
        {name: "Al Turki", date: "28/8/1997"},
        {name: "Al Turki", date: "28/8/1997"},
        {name: "Al Turki", date: "28/8/1997"},
        {name: "Al Turki", date: "28/8/1997"},
    ];

    const useStyles = makeStyles({
        table: {
            minWidth: 400,
        },
    });

    const classes = useStyles();

    return (

        <div style={{padding: "20px"}}>
            <Grid container
                  justify={'center'}
                  alignContent={'center'}
                  spacing={5}
            >
                <Grid item
                      justify={'center'}
                      alignContent={'center'}>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Restaurant</StyledTableCell>
                                    <StyledTableCell align="right">Visit Date</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                                        <StyledTableCell align="right">{row.date}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </div>
    );
}

export default Visited;
