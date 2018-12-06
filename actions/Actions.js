import axios from "axios";

export const FETCH_LAB = cid => async dispatch => {
  let resp = await axios.post("http://61.19.22.99:3002/lab", { cid: cid });
  dispatch({
    type: "FETCH_LAB",
    payload: {
      cid: cid,
      ...resp.data
    }
  });
};
