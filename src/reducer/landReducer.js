const intializeState = {
  landData: [],
  isLoading: true,
};

const landReducer = (state = intializeState, action) => {
  switch (action.type) {
    case "YEAR":
      return {
        ...state,
        landData: action.payload.landData,
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

export default landReducer;
