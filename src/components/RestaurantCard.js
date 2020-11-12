import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import image1 from "../images/image1.jpg";
import CardActions from "@material-ui/core/CardActions";
import {Button} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React, {useEffect, useState} from "react";

const RestaurantCard = (props) => {

    const {
        visible: [visibilty, setVisibilty]
    } = {
        visible: useState(false),
        ...(props.state || {})
    };

    return (
                    <Card elevation={5}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h3">
                                    {props.restaurant.name}
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

    )
}

export default RestaurantCard;