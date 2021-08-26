import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderValue } from "../store/action/loaderAction";
import {
  deleteProduct,
  requestDeleteProduct,
} from "../store/action/productAction";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import Loader from "./Loader";

function DeleteProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentProduct, productDeleted } = useSelector(
    (store) => store.productStore
  );
  const { loaderStore } = useSelector((store) => store);

  const deleteHandler = () => {
    dispatch(setLoaderValue(true));
    dispatch(requestDeleteProduct(currentProduct.id));
  };
  if (productDeleted && productDeleted.status === 200) {
    dispatch(deleteProduct(null));
    history.push("/success");
  }

  return (
    <>
      {loaderStore.loader ? (
        <Loader />
      ) : (
        <Button variant="contained" color="primary" onClick={deleteHandler}>
          Confrim Delete?
        </Button>
      )}
    </>
  );
}

export default DeleteProduct;
