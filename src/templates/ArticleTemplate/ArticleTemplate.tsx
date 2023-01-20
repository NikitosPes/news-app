import React from 'react';
import ArrowLink from '../../components/ArrowLink/ArrowLink';

import classes from './ArticleTemplate.module.scss';
import IArticleData from '../../types/ArticleData.interface';

interface ArticleTemplateProps {
  article: IArticleData;
}

const ArticleTemplate = ({ article }: ArticleTemplateProps) => {
  return (
    <div className={classes.articlePageContainer}>
      <img className={classes.articlePageBackgroundImg} src={article.urlToImage} alt='articleImg' />
      <div className={classes.articlePageContent}>
        <h2 className={classes.articlePageContentTitle}>{article.title}</h2>
        <div className={classes.articlePageContentText}>{article.content}</div>
      </div>
      <div className={classes.articlePageLinkWrapper}>
        <ArrowLink redirectURL='#' text='Back' type='backward' />
      </div>
    </div>
  );
};

export default ArticleTemplate;
