import React, { useState } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loader from "./Loader";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "44%",
      textAlign: "center",
      marginLeft: "28%",
      marginRight: "28%",
    },
  },
  input1: {
    margin: theme.spacing(1),
    marginLeft: "45%",
  },
  input2: {
    margin: theme.spacing(1),
    marginLeft: 15,
  },
  head: {
    margin: theme.spacing(1),
  },
}));

function AddProduct() {
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setProduct({
      ...product,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    setLoader(true);
    axios
      .post("https://fakestoreapi.com/products", {
        title: product.title,
        price: product.price,
        description: product.dexcription,
        image: product.image,
        category: product.category,
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log("Success");
          history.push("/success");
        } else {
          console.log("Failed");
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(product, "===product set done");
    e.preventDefault();

    // setTimeout(() => setLoader(false), 2500);
  };
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <Typography
            variant="h3"
            align="center"
            className={classes.head}
            gutterBottom
          >
            Add Product Details
          </Typography>
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Title"
                multiline
                maxRows={4}
                variant="outlined"
                type="text"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-textarea"
                label="Price"
                placeholder="Placeholder"
                multiline
                variant="outlined"
                type="text"
                name="price"
                onChange={handleChange}
              />
              <div />
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={8}
                  variant="outlined"
                  type="text"
                  name="description"
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Image"
                  multiline
                  maxRows={5}
                  variant="outlined"
                  type="text"
                  name="image"
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Category"
                  variant="outlined"
                  type="text"
                  name="category"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <div>
            <Button
              onClick={handleSubmit}
              className={classes.input1}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
            <Button
              onClick={handleSubmit}
              className={classes.input2}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddProduct;
