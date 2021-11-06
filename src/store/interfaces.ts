export interface IState {
  characters: ICharacter[];
  isLikedFilter: boolean;
}
export interface ICharacter {
  isLike: boolean;
  char_id: number;
  name: string;
  occupation: string;
  img: string;
  nickname: string;
}

export interface ISetCardListAction {
  type: 'SET_CARD_LIST';
  payload: ICharacter[];
}
export interface IRemoveCardAction {
  type: 'REMOVE_CARD';
  payload: ICharacter['char_id'];
}
export interface ILikeCardAction {
  type: 'LIKE_CARD';
  payload: ICharacter['char_id'];
}
export interface IFilterCardAction {
  type: 'FILTER_LIKED_CARD';
}

export type IAction =
  | ISetCardListAction
  | IRemoveCardAction
  | ILikeCardAction
  | IFilterCardAction;
