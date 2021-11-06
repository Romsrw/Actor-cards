import axios from 'axios';
import { useState } from 'react';
import { ICharacter } from '../store/interfaces';

interface IUseFetchCharacters {
  getCharacters: () => Promise<ICharacter[] | undefined>;
  isLoading: boolean;
  isError: string;
}

const useFetchCharacters = (): IUseFetchCharacters => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const getCharacters = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<ICharacter[]>(
        'https://www.breakingbadapi.com/api/characters?limit=20'
      );
      return response.data;
    } catch (error) {
      setIsError(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getCharacters,
    isLoading,
    isError,
  };
};

export default useFetchCharacters;
