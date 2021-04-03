const intializeState = {
  yearData: [],
  isLoading1: true,
};

const yearReducer = (state = intializeState, action) => {
  switch (action.type) {
    case "YEAR":
      return {
        ...state,
        yearData: action.payload.yearData,
        isLoading1: false,
      };
    case "LOAD":
      return {
        ...state,
        isLoading1: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default yearReducer;
