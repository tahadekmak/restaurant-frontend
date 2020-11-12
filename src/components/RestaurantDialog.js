import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import image1 from "../images/image1.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ListItemText from "@material-ui/core/ListItemText";
import {default as data} from "../MOCK_DATA.json";
import Divider from "@material-ui/core/Divider";
import PublicIcon from "@material-ui/icons/Public";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import DialogActions from "@material-ui/core/DialogActions";
import {Button} from "@material-ui/core";
import React from "react";

const RestaurantDialog = (props) => {
    return (
        <Dialog aria-labelledby="customized-dialog-title" open={false}>
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
                <Button color="primary">
                    Close
                </Button>
                <Button color="primary">
                    Check in
                </Button>

            </DialogActions>
        </Dialog>
    )

}

export default RestaurantDialog;