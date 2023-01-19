import React from 'react';

import Highlighter from "react-highlight-words";

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import ArrowLink from '../ArrowLink/ArrowLink';

import classes from './ArticlesCard.module.scss';
import IArticleData from '../../types/ArticleData.interface';

interface IArticlesCardProps {
  article: IArticleData;
  keywords: string[];
}

const ArticlesCard = ({ article, keywords }: IArticlesCardProps) => {
  const normilizeTextToFixedCharsNumber = (text: string, textLenth: number) => {
    if (text.length < textLenth) return text;
    return text.slice(0, textLenth - 3) + '...';
  };

  const formatPublishedDate = (date: string): string => {
    const fromtedDate = new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
    return fromtedDate;
  };

  formatPublishedDate(article.publishedAt);
  return (
    <div className={classes.container}>
      <div className={classes.imgWrapper}>
        <img className={classes.img} src={article.urlToImage} alt='acticlePoster' />
      </div>

      <div className={classes.content}>
        <div className={classes.publishedDateContainer}>
          <CalendarTodayOutlinedIcon sx={{ fontSize: 14 }} />
          <p className={classes.publishedDate}>{formatPublishedDate(article.publishedAt)}</p>
        </div>

        <h2 className={classes.title}>
          <Highlighter 
            searchWords={keywords}
            autoEscape={true}
            textToHighlight={normilizeTextToFixedCharsNumber(article.title, 100)}
          />
        </h2>

        <div className={classes.description}>
          <Highlighter 
            searchWords={keywords}
            autoEscape={true}
            textToHighlight={normilizeTextToFixedCharsNumber(article.description, 100)}
          />
        </div>

        <div className={classes.navLinkContainer}>
          <ArrowLink text='Read more' redirectURL='#'/>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
