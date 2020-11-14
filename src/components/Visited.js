import React, {useEffect} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import withStyles from "@material-ui/core/styles/withStyles";
import {TableCell} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Box from "@material-ui/core/Box";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import getDate, {getDateForGet} from "./DateConverter";

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

    const divStyle = {
        padding: "20px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const dispatch = useDispatch();
    const visits = useSelector(state => state.visits.visits);
    const loading = useSelector(state => state.visits.loading);
    const error = useSelector(state => state.visits.error);
    const personId = 1;

    useEffect(() => {
        dispatch({type: 'GET_BY_PERSON_ID_VISITS_REQUESTED', id: {personId}})
    }, [dispatch])

    return (

        <div style={divStyle}>
            <Typography gutterBottom variant="h5" component="h3">
            </Typography>
            <Box width="80%">
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Restaurant</StyledTableCell>
                                    <StyledTableCell align="right">Visit Date</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {visits.map((row) => (
                                    <StyledTableRow key={row.restaurantName}>
                                        <StyledTableCell component="th" scope="row">{row.restaurantName}</StyledTableCell>
                                        <StyledTableCell align="right">{getDateForGet(row.visitDate)}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </Box>
        </div>
    );
}

export default Visited;
