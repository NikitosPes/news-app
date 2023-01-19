import React from 'react';

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import classes from './ArticlesCard.module.scss';
import IArticleData from '../../types/ArticleData.interface';

interface IArticlesCardProps {
  article: IArticleData;
}

const ArticlesCard = ({ article }: IArticlesCardProps) => {
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

        <h2 className={classes.title}>{normilizeTextToFixedCharsNumber(article.title, 100)}</h2>

        <div className={classes.description}>
          {normilizeTextToFixedCharsNumber(article.description, 100)}
        </div>

        <div className={classes.navLinkContainer}>
          <a className={classes.navLink} href='#'>
            Read more
          </a>
          <EastOutlinedIcon sx={{ fontSize: 16 }} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
