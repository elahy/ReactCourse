import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  requestProductDetails,
  updateProduct,
} from "../store/action/productAction";
import { setLoaderValue } from "../store/action/loaderAction";

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

function UpdateProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const pro = useParams();
  // console.log(pro.id, "===pro.id");

  useEffect(() => {
    dispatch(setLoaderValue(true));
    dispatch(requestProductDetails(pro.id));
  }, [dispatch, pro.id]);

  const { currentProduct, productEdited } = useSelector(
    (store) => store.productStore
  );
  const { loaderStore } = useSelector((store) => store);
  const [product, setProduct] = useState(currentProduct);

  const handleChange = (event) => {
    const value = event.target.value;
    setProduct({
      ...product,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(setLoaderValue(true));
    dispatch(updateProduct(product));
  };
  if (productEdited && productEdited.status === 200) {
    dispatch(editProduct(null));
    history.push("/success");
  }

  return (
    <>
      {loaderStore.loader ? (
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
