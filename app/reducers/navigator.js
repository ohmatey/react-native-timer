import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

export default function reducer(state = initialState, action = { type: "" }) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
