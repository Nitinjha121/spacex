const intializeState = {
  launchData: [],
  isLoading: true,
};

const launchReducer = (state = intializeState, action) => {
  switch (action.type) {
    case "LAUNCH":
      return {
        ...state,
        launchData: action.payload.launchData,
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

export default launchReducer;
