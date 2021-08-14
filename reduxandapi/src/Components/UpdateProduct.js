import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
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
  input: {
    margin: theme.spacing(1),
    marginLeft: "40%",
    backgroundColor: "#04b4c4",
  },
  input2: {
    margin: theme.spacing(1),
    marginLeft: 15,
  },
  head: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: "45%",
  },
}));

function UpdateProduct(props) {
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const pro = useParams();
  const classes = useStyles();
  const [product, setProduct] = useState(props.proList[pro.id - 1]);
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
      .put(`https://fakestoreapi.com/products/${pro.id}`, {
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
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
            Edit Product info
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Title"
                placeholder="Placeholder"
                multiline
                maxRows={4}
                variant="outlined"
                type="text"
                name="title"
                defaultValue={product.title}
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
                defaultValue={product.price}
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
                  defaultValue={product.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  // id="outlined-multiline-static"
                  label="Image"
                  multiline
                  maxRows={5}
                  variant="outlined"
                  type="text"
                  name="image"
                  defaultValue={product.image}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  // id="outlined-multiline-static"
                  label="Category"
                  variant="outlined"
                  type="text"
                  name="category"
                  defaultValue={product.category}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <Button
            onClick={handleSubmit}
            className={classes.input}
            variant="contained"
            color="primary"
          >
            Update
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
      )}
    </>
  );
}

export default UpdateProduct;
