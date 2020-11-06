import React, {useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Col, Row} from "react-simple-flex-grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "./Pagination";
import { default as data } from "./MOCK_DATA.json";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

export default function Restaurants() {

    const divStyle1 = {
        width: '200px',}

    const divstyle2 = {
        marginTop: '25px',}

    const RestaurantsList = [
        { id: 1, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 2, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 3, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 4, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 5, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 6, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 7, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 8, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 9, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 10, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 11, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 12, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 13, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},
        { id: 14, name: 'Tabaleye', type: 'Lebanese', averageCost: 100, address: 'Nabatieh', phoneNumber: '76947094', image: "https://imgur.com/hTkpXvw"},

    ];

    let [page, setPage] = useState(1);
    const PER_PAGE = 4;

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <ThemeProvider theme={theme}>
        <div>
            <Grid container
                  justify={'center'}
                  alignContent={'center'}
                  spacing={5}
            >
                <Grid item>
                    <TextField
                        label="Search Restaurants"
                        margin="normal"
                        variant="outlined"/>
                               </Grid>
                <Grid item >
                    <div style={divStyle1}>
                        <Autocomplete
                            id="dropDownAutoComplete"
                            Choose Category
                            options={RestaurantsList.map((option) => option.name)}
                            renderInput={(params) => (
                                <TextField {...params} label="Choose Category" margin="normal" variant="outlined" />
                            )}
                        />
                    </div>
                </Grid>
                <Grid item alignContent={"center"} alignItems={"center"}>
                    <div style={divstyle2}>
                    <Button variant="contained" color="primary">Search</Button>
                </div>
                </Grid>
            </Grid>

            <Grid container
                  justify={'center'}
                  alignContent={'center'}
                  spacing={10}
            >
                <Grid item
                      justify={'center'}
                      alignContent={'center'}>

                        <Grid container spacing={2} justify="center">
                            {_DATA.currentData().map(post => (
                                <Grid style={{display:"flex"}} item key={post.id}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Image not available"
                                                height="170"
                                                image={post.image}
                                                title="Contemplative Reptile"
                                            />
                                        </CardActionArea>
                                        <CardActions>
                                            <h3>
                                                {post.name}
                                            </h3>
                                            <Button size="small" color="primary">
                                                Check in
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                </Grid>

            </Grid>

            <Grid container
                  justify={'center'}
                  alignContent={'center'}
                  spacing={5}
            >
                <Grid item
                      justify={'center'}
                      alignContent={'center'}>
                    <Pagination
                        count={count}
                        size="large"
                        page={page}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChange}
                    />                </Grid>
            </Grid>

        </div>
        </ThemeProvider>
    );
}
