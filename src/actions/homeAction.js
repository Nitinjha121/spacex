import { homePage } from "../api";
import axios from "axios";

const homeAction = () => async (dispatch) => {
  dispatch({
    type: "LOAD",
  });
  const homeData = await axios.get(homePage);

  dispatch({
    type: "HOME",
    payload: {
      homeData: homeData.data,
    },
  });
};

export default homeAction;
