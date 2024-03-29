import { successFilter } from "../api";
import axios from "axios";

const launchAction = (id) => async (dispatch) => {
  dispatch({
    type: "LOAD",
  });

  const launchData = await axios.get(successFilter(id));

  dispatch({
    type: "LAUNCH",
    payload: {
      launchData: launchData.data,
    },
  });
};

export default launchAction;
