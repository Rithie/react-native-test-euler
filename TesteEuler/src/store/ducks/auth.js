export const Types = {
  LOG_IN_REQUEST: 'auth/LOG_IN_REQUEST',
  LOG_IN_SUCCESS: 'auth/LOG_IN_SUCCESS',
  LOG_IN_ERROR: 'auth/LOG_IN_FAILURE',
}

const initialState = {
  conteudo: null,
  loading: false,
  error: false,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.LOG_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
      case Types.LOG_IN_SUCCESS:
        console.tron.log(action.payload.data)
        return {
          ...state,
          loading: false,
          error: false,
          conteudo: action.payload.data,
        };
        case Types.LOG_IN_FAILURE:
          return {
            ...state,
            loading: false,
            error: true,
          };
        default:
            return state;
        }
    }

    export const Creators = {
      logInSuccess: data => ({
        type: Types.LOG_IN_SUCCESS,
        payload: { data },
      }),
      logInFailure: data => ({
        type: Types.LOG_IN_FAILURE,
        payload: { data },
      }),
      logInRequest: (login, password) => ({
        type: Types.LOG_IN_REQUEST,
        payload: {login, password},
      }),
    };
