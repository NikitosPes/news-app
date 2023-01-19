import React from 'react';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import normilizeISOFormatDate from '../../utils/normilizeISOFormatDate';

import classes from './ArticlePublishedDate.module.scss';

interface ArticlePublishedDateProps {
  date: string;
}

const ArticlePublishedDate = ({ date }: ArticlePublishedDateProps) => {
  return (
    <div className={classes.articlePublishedDateContainer}>
      <CalendarTodayOutlinedIcon fontSize='small' />
      <p className={classes.articlePublishedDateText}>{normilizeISOFormatDate(date)}</p>
    </div>
  );
};

export default ArticlePublishedDate;
