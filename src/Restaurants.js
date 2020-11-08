import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "./Pagination";
import {default as data} from "./MOCK_DATA.json";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import ButtonBase from "@material-ui/core/ButtonBase";
import image1 from "./images/image1.jpg"
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PublicIcon from '@material-ui/icons/Public';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';

export default function Restaurants() {


    const divstyle1 = {
        minWidth: '200px',
    }

    const divstyle2 = {
        marginTop: '25px',
    }

    const divstyle3 = {
     padding: "40px"
}


    let [page, setPage] = useState(1);
    const PER_PAGE = 4;

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={divstyle3}>
            <div >
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
                    <Grid item>
                        <div >
                            <Autocomplete
                                id="dropDownAutoComplete"
                                Choose Category
                                options={data.map((option) => option.name)}
                                renderInput={(params) => (
                                    <TextField {...params} style={divstyle1} label="Category" margin="normal" variant="outlined"/>
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
                </div>
                <Grid container
                      justify={'center'}
                      alignContent={'center'}
                      spacing={5}
                >
                    <Grid item
                          justify={'center'}
                          alignContent={'center'}>

                        <Grid container spacing={2} justify="center">
                            {_DATA.currentData().map(post => (
                                <Grid style={{display: "flex"}} item key={post.id}>
                                    <Card elevation={5}>
                                        <CardActionArea onClick={handleClickOpen}>

                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h3">
                                                    {post.name}
                                                </Typography>
                                            </CardContent>

                                            <CardMedia
                                                component="img"
                                                alt="Image not available"
                                                height="170"
                                                image={image1}
                                                title="Contemplative Reptile"
                                            />
                                        </CardActionArea>
                                        <CardActions style={{float: "right"}}>
                                            <Button color="primary">
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
                        />
                    </Grid>
                </Grid>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogContent dividers>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <div>
                                        <div>
                                            <ButtonBase>
                                                <img src={image1} alt={""}/>
                                            </ButtonBase>
                                        </div>
                                        <div>
                                            <List>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <RestaurantIcon/>
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Name" secondary={data[0].name}/>
                                                </ListItem>
                                                <Divider/>

                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <PublicIcon/>
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Type" secondary={data[0].type}/>
                                                </ListItem>
                                                <Divider/>

                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <AttachMoneyIcon/>
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Average Cost"
                                                                  secondary={data[0].averageCost + " $ for 2 persons"}/>
                                                </ListItem>
                                                <Divider/>

                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <LocationOnIcon/>
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Address" secondary={data[0].address}/>
                                                </ListItem>
                                                <Divider/>

                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <CallIcon/>
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Call us" secondary={data[0].phoneNumber}/>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button color="primary">
                        Check in
                    </Button>

                </DialogActions>
            </Dialog>
            </div>
        </ThemeProvider>
    );
}
