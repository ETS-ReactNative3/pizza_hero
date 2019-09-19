import produce from 'immer';
import { CHANGE_CURRENT_TAB, VIEW_CHARACTER } from './constants';

// The initial state of the App
export const initialState = {
  currentTab: 'all',
  metaData: {},
  characterType: 0,
  id: 0,
};

/* eslint-disable default-case, no-param-reassign */
const myInventoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_CURRENT_TAB:
        draft.currentTab = action.tab;
        break;
      case VIEW_CHARACTER:
        draft.metaData = action.metaData;
        draft.characterType = action.characterType;
        draft.id = action.id;
        break;
    }
  });

export default myInventoryReducer;
