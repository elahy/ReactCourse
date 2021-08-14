import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: "5%",
  },
  media: {
    height: 400,
  },
  button: {
    marginLeft: "15%",
    marginRight: "15%",
    color: "#04b4c4",
    borderColor: "#04b4c4",
  },
  detailsButton: {
    backgroundColor: "#04b4c4",
  },
});

function ProductList(props) {
  const history = useHistory();
  const productList = props.proList;
  console.log(productList);
  const classes = useStyles();
  const buttonHanlder = (e) => {
    console.log(e, "===event");
    history.push(`/product/${e}`);
  };
  return (
    <div>
      {productList.map((product, index) => (
        <div key={index} className="productList">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.category}
                </Typography>
                <Typography gutterBottom variant="h5" component="h4">
                  Price: ${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                // size="small"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Share
              </Button>
              <Button
                onClick={() => buttonHanlder(product.id)}
                className={classes.detailsButton}
                variant="contained"
                color="primary"
              >
                See Details
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
