const REGISTER = 'user/REGISTER';

const initialState = {
  auth: null,
  authError: null,
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};

export default user;
