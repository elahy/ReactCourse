import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function ProductList(props) {
  const pro = useParams();
  console.log(pro, "===id");
  const [product, setProduct] = useState([]);
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      alignContent: "center",
    },
  });
  const classes = useStyles();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${pro.id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [pro]);

  return (
    <Card className={classes.root}>
      {/* <div key={product.id} className="productDetails">
          <p>{product.price}</p>
          <p>{product.category}</p>
        </div> */}

      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.title}
          height="350"
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {product.description}
          </Typography>
          <Typography variant="h5" color="textPrimary" component="p">
            Price: ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductList;
