import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    marginLeft: "45%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: "45%",
  },
}));

function DeleteProduct() {
  const classes = useStyles();
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const [id, setId] = useState(1);
  const handleChange = (event) => {
    setId(event.target.value);
    console.log(id, "===selected id");
    console.log(event.target.value, "=== event.target.value");
  };

  const performDelete = () => {
    setLoader(true);
    axios.delete(`https://fakestoreapi.com/products/${id}`).then((response) => {
      if (response.status === 200) {
        console.log("Success");
        history.push("/success");
      } else {
        console.log("Failed");
      }
      console.log(response);
    });
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
              onChange={handleChange}
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
          <div>
            <Button
              onClick={performDelete}
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Delete
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteProduct;
