import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loader from "./Loader";
import { useHistory } from "react-router";

function ProductList(props) {
  const [loader, setLoader] = useState(true);
  const pro = useParams();
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const useStyles = makeStyles({
    root: {
      maxWidth: "40%",
      alignContent: "center",
      marginLeft: "30%",
    },
  });
  const classes = useStyles();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${pro.id}`)
      .then((response) => {
        setProduct(response.data);
        setTimeout(() => setLoader(false));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [pro]);

  const buttonHandler = () => {
    history.push("/");
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.title}
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.title}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                color="textSecondary"
                component="p"
              >
                {product.description}
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                Type: {product.category}
              </Typography>
              <Typography variant="h5" color="textPrimary" component="p">
                Price: ${product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="medium" variant="outlined" color="primary">
              Add to cart
            </Button>
            <Button
              onClick={buttonHandler}
              size="medium"
              variant="outlined"
              color="primary"
            >
              Go Back
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}

export default ProductList;
