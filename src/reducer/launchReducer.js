const intializeState = {
  launchData: [],
  isLoading2: true,
};

const launchReducer = (state = intializeState, action) => {
  switch (action.type) {
    case "LAUNCH":
      return {
        ...state,
        launchData: action.payload.launchData,
        isLoading2: false,
      };
    case "LOAD":
      return {
        ...state,
        isLoading2: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default launchReducer;
