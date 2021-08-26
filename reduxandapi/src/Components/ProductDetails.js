import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loader from "./Loader";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { requestProductDetails } from "../store/action/productAction";
import { setLoaderValue } from "../store/action/loaderAction";

const useStyles = makeStyles({
  root: {
    maxWidth: "45%",
    minWidth: "40%",
    alignContent: "center",
    margin: "2% 27%",
  },
  buttton: {
    color: "#04b4c4",
    borderColor: "#04b4c4",
    margin: "2% 4%",
    display: "block",
  },
  buttton1: {
    backgroundColor: "#04b4c4",
    margin: "2% 4%",
    display: "block",
  },
});

function ProductList() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    console.log("===Console in useEffect1");
    dispatch(setLoaderValue(true));
    dispatch(requestProductDetails(param.id));
    console.log("===Console in useEffect2");
  }, [dispatch, param.id]);

  const { currentProduct } = useSelector((store) => store.productStore);
  console.log(currentProduct, "===currentProduct");
  const { loaderStore } = useSelector((store) => store);

  const buttonHandler = () => {
    history.push("/products");
  };
  const updateHandler = () => {
    history.push(`/update/${currentProduct.id}`);
  };
  const deleteHandler = () => {
    history.push(`/delete/${currentProduct.id}`);
  };

  return (
    <>
      {loaderStore.loader ? (
        <Loader />
      ) : (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={currentProduct && currentProduct.title}
              image={currentProduct && currentProduct.image}
              title={currentProduct && currentProduct.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {currentProduct && currentProduct.title}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                color="textSecondary"
                component="p"
              >
                {currentProduct && currentProduct.description}
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                Type: {currentProduct && currentProduct.category}
              </Typography>
              <Typography variant="h5" color="textPrimary" component="p">
                Price: ${currentProduct && currentProduct.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="medium"
              className={classes.buttton}
              variant="outlined"
              color="primary"
            >
              Add to cart
            </Button>
            <Button
              onClick={buttonHandler}
              className={classes.buttton}
              size="medium"
              variant="outlined"
              color="primary"
            >
              Go Back
            </Button>
            <Button
              onClick={updateHandler}
              className={classes.buttton1}
              size="medium"
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
            <Button
              onClick={deleteHandler}
              className={classes.buttton1}
              size="medium"
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}

export default ProductList;
