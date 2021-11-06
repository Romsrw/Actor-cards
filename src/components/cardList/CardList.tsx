import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { filterCardAction } from '../../store/actions';
import {
  getCardsSelector,
  getFilteredCardsSelector,
  getIsLikedFilter,
} from '../../store/selectors';
import TextButton from '../buttons/TextButton/TextButton';
import Card from '../card/Card';
import './CardList.css';

interface IProps {
  isError: string;
  onReload: () => void;
}

const CardList: FC<IProps> = ({ isError, onReload }) => {
  const characters = useSelector(getCardsSelector);
  const filteredCharacters = useSelector(getFilteredCardsSelector);

  const isLikedFilter = useSelector(getIsLikedFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = () => {
    dispatch(filterCardAction);
  };
  if (isError) {
    return (
      <div className='error-wrapper'>
        <h2>Something went wrong...</h2>
        <p>{isError}</p>
        <TextButton onClick={onReload}>Reload</TextButton>
      </div>
    );
  }
  return (
    <div className='card-list-wrapper'>
      {characters.length ? (
        <TextButton onClick={handleChangeFilter}>
          {isLikedFilter ? 'show all' : 'show liked'}
        </TextButton>
      ) : (
        <TextButton onClick={onReload}>Reload</TextButton>
      )}

      {filteredCharacters.length ? (
        <TransitionGroup className='card-list'>
          {filteredCharacters.map((character) => (
            <CSSTransition
              key={character.char_id}
              timeout={500}
              classNames='cards'
            >
              <Card {...character} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        !!characters.length && (
          <div className='no-liked-message'>Sorry, no liked cards :(</div>
        )
      )}
    </div>
  );
};

export default CardList;
