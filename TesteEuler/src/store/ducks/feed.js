export const Types = {
  REQUEST_FEED: 'auth/REQUEST_FEED',
  FEED_LOAD_SUCCESS: 'auth/FEED_LOAD_SUCCESS',
  FEED_LOAD_FAILURE: 'auth/FEED_LOAD_FAILURE',
}

const initialState = {
  contextUrl: '',
  loading: false,
  err: false,
}

export default function feed(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST_FEED:
      return {
        ...state,
        isVisible: true,
        imgUrl: action.payload.data,
      };
      default:
          return state;
      }
    }

    export const Creators = {
      requestFeed: (contextUrl, token, imgUrl) => ({
        type: Types.REQUEST_FEED,
        payload: {contextUrl, token, imgUrl},
      }),
    };
