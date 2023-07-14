const initialState = {
   socket: null,
   connected: false,
};

export const ActionType = {
   APPLY_SOCKET: 9,
   SET_CONNECTED: 10,
};

const socketReducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.APPLY_SOCKET:
         return { ...state, socket: action.payload };
      case ActionType.SET_CONNECTED:
         return { ...state, connected: action.payload };
      default:
         return state;
   }
};

export default socketReducer;
