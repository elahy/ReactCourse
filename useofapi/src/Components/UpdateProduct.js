import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loader from "./Loader";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
    marginLeft: "45%",
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
  const [id, setId] = useState(1);
  const classes = useStyles();
  const [product, setProduct] = useState(props.proList);
  const handleSelect = (event) => {
    setId(event.target.value);
  };
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
      .put(`https://fakestoreapi.com/products/${id}`, {
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
  };
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <Typography variant="h4" align="center" gutterBottom>
            Select a product
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Product Id
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={id}
              onChange={handleSelect}
              label="Product Id"
            >
              <MenuItem value={1}>Product 1</MenuItem>
              <MenuItem value={2}>Product 2</MenuItem>
              <MenuItem value={3}>Product 3</MenuItem>
              <MenuItem value={4}>Product 4</MenuItem>
              <MenuItem value={5}>Product 5</MenuItem>
              <MenuItem value={6}>Product 6</MenuItem>
              <MenuItem value={7}>Product 7</MenuItem>
              <MenuItem value={8}>Product 8</MenuItem>
              <MenuItem value={9}>Product 9</MenuItem>
              <MenuItem value={10}>Product 10</MenuItem>
              <MenuItem value={11}>Product 11</MenuItem>
              <MenuItem value={12}>Product 12</MenuItem>
              <MenuItem value={13}>Product 13</MenuItem>
              <MenuItem value={14}>Product 14</MenuItem>
              <MenuItem value={15}>Product 15</MenuItem>
              <MenuItem value={16}>Product 16</MenuItem>
              <MenuItem value={17}>Product 17</MenuItem>
              <MenuItem value={18}>Product 18</MenuItem>
              <MenuItem value={19}>Product 19</MenuItem>
              <MenuItem value={20}>Product 20</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h2" align="center" gutterBottom>
            Edit Product info
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
                placeholder="Placeholder"
                multiline
                maxRows={4}
                variant="outlined"
                type="text"
                name="title"
                defaultValue={product[id - 1].title}
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
                defaultValue={product[id - 1].price}
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
                  defaultValue={product[id - 1].description}
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
                  defaultValue={product[id - 1].image}
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
                  defaultValue={product[id - 1].category}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              className={classes.input}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

export default UpdateProduct;
