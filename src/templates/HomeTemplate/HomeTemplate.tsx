import React, { ChangeEvent } from 'react';

import Articles from '../../components/Articles/Articles';
import SearchInput from '../../components/SearchInput/SearchInput';
import LoadingSpinner from '../../components/LoadingSpiner/LoadingSpiner';

import classes from './HomeTemplate.module.scss';
import IArticleData from '../../types/ArticleData.interface';

interface HomeTemplateProps {
  query: string;
  loading: boolean;
  articles: IArticleData[];
  fetchingErrorMessage: string;
  changeQueryHandler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const HomeTemplate = (props: HomeTemplateProps) => {
  return (
    <div className={classes.homePageContainer}>
      <div className={classes.homePageSearchInputWrapper}>
        <SearchInput
          value={props.query}
          label='Filter by keywords'
          handlerChange={props.changeQueryHandler}
        />
      </div>

      <div className={classes.homePageResultsCount}>Results: {props.articles.length}</div>

      <div className={classes.homePageArticlesWrapper}>
        { props.loading && <LoadingSpinner />}
        {!props.loading && <Articles articles={props.articles} keywords={props.query.split(' ')} />}
      </div>
    </div>
  );
};

export default HomeTemplate;
