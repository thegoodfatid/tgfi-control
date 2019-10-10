const PREFIX = 'MENU';
export const UPDATE = `${PREFIX}-UPDATE`;

export const update = payload => dispatch => {
  dispatch({ type: UPDATE, payload });
};
