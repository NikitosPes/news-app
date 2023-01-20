import React, { useEffect } from 'react';

import useInput from '../hooks/useInput';
import useDebounce from '../hooks/useDebounce';
import useTypedSelector from '../hooks/useTypedSelector';
import useTypedDispatch from '../hooks/useTypedDispatch';

import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';

import { fetchArticles } from '../store/reducers/ActionCreators';

const Home = () => {
  const query = useInput('ReactJs');
  const dispatch = useTypedDispatch();
  const searchQuery = useDebounce<string>(query.value, 500);

  const { articles, loading, fetchingError } = useTypedSelector((state) => state.articlesReducer);

  useEffect(() => {
    dispatch(fetchArticles(query.value));
  }, []);

  useEffect(() => {
    dispatch(fetchArticles(query.value));
  }, [searchQuery]);

  return (
    <>
      <HomeTemplate
        query={query.value}
        loading={loading}
        articles={articles}
        fetchingErrorMessage={fetchingError}
        changeQueryHandler={query.onChange}
      />
    </>
  );
};

export default Home;
