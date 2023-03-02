const initalState = {
  autoCompleteLocation: [],
  selectedLocation: ''
};

export default function googleMap(state = initalState, action) {
  switch (action.type) {
    case "SET_SELECTED_LOACTION":
      return {
        ...state,
        selectedLocation: action.payload,
      };

    case "GET_AUTO_COMPLETE_LOCATION":
      return {
        ...state,
        autoCompleteLocation: action.payload,
      };
    default:
      break;
  }
  return state;
};

