import { allFilter } from "../api";
import axios from "axios";

const homeAction = (year) => async (dispatch) => {
  dispatch({
    type: "LOAD",
  });

  const yearData = await axios.get(allFilter(year));

  dispatch({
    type: "YEAR",
    payload: {
      yearData: yearData.data,
    },
  });
};

export default homeAction;
