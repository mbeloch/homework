const initialState = {
  phonewords: []
};

function counterApp(state, action) {
  if (typeof state === "undefined") return initialState;
  console.log(action.type);
  switch (action.type) {
    case "PHONEWORDS_FULFILLED":
      const phonewords = Array.isArray(action.payload.data) ? action.payload.data : [];
      return Object.assign({}, state, {phonewords: phonewords});
      break; // unreachable code?
    case "PHONEWORDS_REJECTED":
      return Object.assign({}, state, {phonewords: []});
      break; // unreachable code?
    default:
      return state
  }
}

export default counterApp;