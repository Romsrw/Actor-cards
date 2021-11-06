import { IState } from './interfaces';

export const getCardsSelector = (state: IState) => state.characters;

export const getFilteredCardsSelector = (state: IState) =>
  state.characters.filter((item) => (state.isLikedFilter ? item.isLike : true));

export const getIsLikedFilter = (state: IState) => state.isLikedFilter;
