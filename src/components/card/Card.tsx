import './Card.css';
import { useDispatch } from 'react-redux';
import IconButton from '../buttons/IconButton/IconButton';
import { removeCardAction } from '../../store/actions';
import { likeCardAction } from '../../store/actions';
import { FC } from 'react';
import { ICharacter } from '../../store/interfaces';

interface IProps extends ICharacter {}

const Card: FC<IProps> = (character) => {
  const { isLike, img, nickname, name, occupation } = character;

  const dispatch = useDispatch();

  const handleRemoveCard = () => {
    dispatch(removeCardAction(character.char_id));
  };

  const handleLikeCard = () => {
    dispatch(likeCardAction(character.char_id));
  };

  return (
    <div className='card'>
      <img className='card__img' src={img} alt={nickname} />
      <div className='card__info'>
        <h2>{name}</h2>
        <p className='card__nickName'>{nickname}</p>
        <p>{occupation}</p>
      </div>
      <IconButton className='btn-remove' onClick={handleRemoveCard}>
        &#10006;
      </IconButton>
      <IconButton
        className={`btn-like ${isLike ? 'active' : ''}`}
        onClick={handleLikeCard}
      >
        ❤
      </IconButton>
    </div>
  );
};

export default Card;
