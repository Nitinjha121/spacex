const intializeState = {
  landData: [],
  isLoading3: true,
};

const landReducer = (state = intializeState, action) => {
  switch (action.type) {
    case "LAND":
      return {
        ...state,
        landData: action.payload.landData,
        isLoading3: false,
      };
    case "LOAD":
      return {
        ...state,
        isLoading3: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default landReducer;
