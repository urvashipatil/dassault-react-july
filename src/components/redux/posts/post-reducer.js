export function postReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return action.payload;
  }

  return state;
}
