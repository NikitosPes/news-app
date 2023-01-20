import React from 'react';

import Highlighter from 'react-highlight-words';

import useTypedDispatch from '../../hooks/useTypedDispatch';

import ArrowLink from '../ArrowLink/ArrowLink';
import ArticlePublishedDate from '../ArticlePublishedDate/ArticlePublishedDate';

import classes from './ArticlesCard.module.scss';
import IArticleData from '../../types/ArticleData.interface';

interface IArticlesCardProps {
  article: IArticleData;
  keywords: string[];
  clickLinkHandler: (article: IArticleData) => void;
}

const ArticlesCard = ({ article, keywords, clickLinkHandler }: IArticlesCardProps) => {
  const dispatch = useTypedDispatch();
  const MAX_TEXT_LENGTH = 100;

  const formatTextToFixedLength = (text: string, maxLength: number): string => {
    if (text.length < maxLength) return text;
    return text.slice(0, maxLength - 3) + '...';
  };

  return (
    <div className={classes.container}>
      <div className={classes.articlesCardImgContainer}>
        <img className={classes.articlesCardImg} src={article.urlToImage} alt='acticlePoster' />
      </div>

      <div className={classes.articlesCardContent}>
        <ArticlePublishedDate date={article.publishedAt} />

        <div className={classes.articlesCardMainContent}>
          <h2 className={classes.articlesCardTitle}>
            <Highlighter
              searchWords={keywords}
              autoEscape={true}
              textToHighlight={formatTextToFixedLength(article.title, MAX_TEXT_LENGTH)}
            />
          </h2>

          <div className={classes.articlesCardDescription}>
            <Highlighter
              searchWords={keywords}
              autoEscape={true}
              textToHighlight={formatTextToFixedLength(article.description, MAX_TEXT_LENGTH)}
            />
          </div>
        </div>

        <ArrowLink
          redirectURL='/article'
          text='Read more'
          onClick={() => clickLinkHandler(article)}
        />
      </div>
    </div>
  );
};

export default ArticlesCard;
