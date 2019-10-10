import { UPDATE } from '../actions/menuA';

export const initialState = {
  isGroupOpen: true,
  isDrawerOpen: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
