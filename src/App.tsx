import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useFetchCharacters from './API/useFetchCharacters';
import './App.css';
import CardList from './components/cardList/CardList';
import Loader from './components/loader/Loader';
import { setCardListAction } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const { getCharacters, isLoading, isError } = useFetchCharacters();

  const fetchData = async () => {
    const data = await getCharacters();
    dispatch(setCardListAction(data || []));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='app'>
      <h1 className='app__title'>The Breaking Bad</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <CardList onReload={fetchData} isError={isError} />
      )}
    </div>
  );
};

export default App;
