export const Types = {
  OPEN_MODAL: 'auth/OPEN_MODAL',
  CLOSE_MODAL: 'auth/CLOSE_MODAL',
}

const initialState = {
  isVisible: false,
  message: '',
  imgUrl: '',
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return {
        ...state,
        isVisible: true,
        imgUrl: action.payload.data,
      };
      case Types.CLOSE_MODAL:
        return {
          ...state,
          isVisible: false,
        };
        default:
            return state;
        }
    }

    export const Creators = {
      openModal: data => ({
        type: Types.OPEN_MODAL,
        payload: {data},
      }),
      closeModal: () => ({
        type: Types.CLOSE_MODAL,
        payload: {},
      }),
    };
