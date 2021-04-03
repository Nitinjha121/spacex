const intializeState = {
  homeData: [],
  isLoading: true,
};

const homeRenducer = (state = intializeState, action) => {
  switch (action.type) {
    case "HOME":
      return {
        ...state,
        homeData: action.payload.homeData,
        isLoading: false,
      };
    case "LOAD":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default homeRenducer;
