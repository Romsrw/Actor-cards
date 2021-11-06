import {
  REMOVE_CARD,
  SET_CARD_LIST,
  LIKE_CARD,
  FILTER_LIKED_CARD,
} from './constants';
import { IAction, ICharacter, IState } from './interfaces';

const initialState: IState = {
  characters: [],
  isLikedFilter: false,
};

export const cardReducer = (state = initialState, action: IAction): IState => {
  switch (action.type) {
    case SET_CARD_LIST:
      return {
        ...state,
        characters: action.payload.map((item: ICharacter) => ({
          ...item,
          isLike: false,
        })),
      };
    case REMOVE_CARD:
      return {
        ...state,
        characters: state.characters.filter(
          (item: ICharacter) => item.char_id !== action.payload
        ),
      };
    case LIKE_CARD:
      return {
        ...state,
        characters: state.characters.map((item: ICharacter) => ({
          ...item,
          isLike: item.char_id === action.payload ? !item.isLike : item.isLike,
        })),
      };
    case FILTER_LIKED_CARD:
      return {
        ...state,
        isLikedFilter: !state.isLikedFilter,
      };
    default:
      return state;
  }
};
