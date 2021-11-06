import { Dispatch } from 'redux';
import {
  REMOVE_CARD,
  SET_CARD_LIST,
  LIKE_CARD,
  FILTER_LIKED_CARD,
} from './constants';
import { ICharacter } from './interfaces';

export const setCardListAction =
  (cardList: ICharacter[]) => (dispatch: Dispatch) => {
    dispatch({ type: SET_CARD_LIST, payload: cardList });
  };

export const removeCardAction =
  (id: ICharacter['char_id']) => (dispatch: Dispatch) => {
    dispatch({ type: REMOVE_CARD, payload: id });
  };

export const likeCardAction =
  (id: ICharacter['char_id']) => (dispatch: Dispatch) => {
    dispatch({ type: LIKE_CARD, payload: id });
  };

export const filterCardAction = (dispatch: Dispatch) => {
  dispatch({ type: FILTER_LIKED_CARD });
};
