import { ActionTypes } from "../ActionTypes";

export const setLoaderValue = (value) => ({
  type: ActionTypes.UPDATE_LOADER,
  payload: value,
});
