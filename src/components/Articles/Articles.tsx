import React from 'react';

import ArticlesCard from '../ArticlesCard/ArticlesCard';

import classes from './Articles.module.scss';
import IArticleData from '../../types/ArticleData.interface';
interface ArticlesProps {
  articles: IArticleData[];
  keywords: string[];
}

const Articles = ({ articles, keywords }: ArticlesProps) => {
  return (
    <div className={classes.articlesContainer}>
      {articles.map((article) => (
        <ArticlesCard article={article} keywords={keywords} key={article.id} />
      ))}
    </div>
  );
};

export default Articles;
