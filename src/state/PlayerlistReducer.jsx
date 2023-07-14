const initialState = {
   ready: [],
   filter: "",
   requests: {
      received: [],
      current: null,
      sent: [],
   },
};

export const ActionType = {
   ADD_READY: 0,
   REMOVE_READY: 1,
   ADD_RECEIVED: 2,
   REMOVE_RECEIVED: 3,
   SET_CURRENT: 4,
   REMOVE_CURRENT: 5,
   ADD_SENT: 6,
   REMOVE_SENT: 7,
   APPLY_FILTER: 8,
};

const playerlistReducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.ADD_READY:
         return { ...state, ready: [...state.ready, action.payload] };
      case ActionType.REMOVE_READY:
         return { ...state, ready: state.ready.filter((player) => player.id !== action.payload.id) };
      case ActionType.ADD_RECEIVED:
         return { ...state, requests: { ...state.requests, received: [...state.requests.received, action.payload] } };
      case ActionType.REMOVE_RECEIVED:
         return {
            ...state,
            requests: {
               ...state.requests,
               received: state.requests.received.filter((player) => player.id !== action.payload.id),
               current: state.requests.current.id === action.payload.id ? null : state.requests.current,
            },
         };
      case ActionType.ADD_SENT:
         return { ...state, requests: { ...state.requests, sent: [...state.requests.sent, action.payload] } };
      case ActionType.REMOVE_SENT:
         return { ...state, requests: { ...state.requests, sent: state.requests.sent.filter((player) => player.id !== action.payload.id) } };
      case ActionType.APPLY_FILTER:
         return { ...state, filter: action.payload };
      case ActionType.SET_CURRENT:
         return { ...state, requests: { ...state.requests, current: action.payload } };
      case ActionType.REMOVE_CURRENT:
         return { ...state, requests: { ...state.requests, current: null } };
      default:
         return state;
   }
};

export default playerlistReducer;
