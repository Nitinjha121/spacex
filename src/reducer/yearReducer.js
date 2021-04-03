const intializeState = {
  yearData: [],
  isLoading: true,
};

const yearReducer = (state = intializeState, action) => {
  switch (action.type) {
    case "YEAR":
      return {
        ...state,
        yearData: action.payload.yearData,
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

export default yearReducer;
