import React from "react";
import IArticleData from "../../types/ArticleData.interface";
import ArrowLink from "../../components/ArrowLink/ArrowLink";

import classes from "./ArticleTemplate.module.scss";

interface ArticleTemplateProps {
  article: IArticleData;
}

const ArticleTemplate = ({ article }: ArticleTemplateProps) => {
  return (
    <div className={classes.articlePageContainer}>
      <img
        className={classes.backgroundImg}
        src={article.urlToImage}
        alt="articleImg"
      />
      <div className={classes.articleContent}>
        <h2 className={classes.articleTitle}>{article.title}</h2>
        <div className={classes.articleContentText}>{article.content}</div>
      </div>
      <div className={classes.backwardLinkWrapper}>
        <ArrowLink redirectURL="#" text="Back" type="backward" />
      </div>
    </div>
  );
};

export default ArticleTemplate;
