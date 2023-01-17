import React from "react";

import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import classes from "./ArticlesCard.module.scss";

interface IArticlesCardProps {
  id: string;
  imgURL: string;
  publishedDate: string;
  title: string;
  description: string;
}


const ArticlesCard = (props: IArticlesCardProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgWrapper}>
        <img className={classes.img} src={props.imgURL} alt="acticlePoster" />
      </div>

      <div className={classes.content}>
        <div className={classes.publishedDateContainer}>
          <CalendarTodayOutlinedIcon sx={{ fontSize: 14 }} />
          <p className={classes.publishedDate}>{props.publishedDate}</p>
        </div>

        <h2 className={classes.title}>{props.title}</h2>
        
        <div className={classes.description}>{props.description}</div>

        <div className={classes.navLinkContainer}>
          <a className={classes.navLink} href="#">
            Read more
          </a>
          <EastOutlinedIcon sx={{ fontSize: 16 }} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
