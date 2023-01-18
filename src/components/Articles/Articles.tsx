import React from 'react';
import IArticleData from '../../types/ArticleData.interface';
import ArticlesCard from '../ArticlesCard/ArticlesCard';

import classes from './Articles.module.scss';

interface ArticlesProps {
  articles: IArticleData[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return(
    <div className={classes.container}>
      {
        articles.map(article => <ArticlesCard article={article} key={article.id}/>)
      }
    </div>
  )
};

export default Articles;