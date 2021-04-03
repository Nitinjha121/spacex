import { landSuccessFilter } from "../api";
import axios from "axios";

const landAction = (id) => async (dispatch) => {
  dispatch({
    type: "LOAD",
  });

  const landData = await axios.get(landSuccessFilter(id));

  dispatch({
    type: "LAND",
    payload: {
      landData: landData.data,
    },
  });
};

export default landAction;
