import React from 'react';

import useTypedSelector from '../hooks/useTypedSelector';
import useTypedDispatch from '../hooks/useTypedDispatch';

import { resetSelectedArticle } from '../store/reducers/ArticlesSlice';

import ArticleTemplate from '../templates/ArticleTemplate/ArticleTemplate';

const Article = () => {
  const dispatch = useTypedDispatch();
  const { selectedArticle } = useTypedSelector((state) => state.articlesReducer);

  const clickLinkHandler = () => {
    dispatch(resetSelectedArticle());
  };

  return (
    <>
      {selectedArticle && (
        <ArticleTemplate clickLinkHandler={clickLinkHandler} article={selectedArticle} />
      )}
    </>
  );
};

export default Article;
