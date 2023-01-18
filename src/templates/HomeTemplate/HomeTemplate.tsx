import React, { ChangeEvent } from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import classes from "./HomeTemplate.module.scss";
import IArticleData from "../../types/ArticleData.interface";
import Articles from "../../components/Articles/Articles";
import LoadingSpinner from "../../components/LoadingSpiner/LoadingSpiner";

interface HomeTemplateProps {
  loading: boolean,
  query: string;
  articles: IArticleData[];
  changeSearchQueryHandler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => void;
}

const HomeTemplate = (props: HomeTemplateProps) => {
  return (
    <div className={classes.homePageWrapper}>

      <div className={classes.searchTextFieldWrapper}>
        <label 
          htmlFor="home_search-texfield" 
          className={classes.searchTextFieldLabele}
        >
          Filter by keywords
        </label>
        <TextField
          id="home_search-texfield"
          size="small"
          placeholder="Enter the topic you are interested in"
          value={props.query}
          onChange={e => props.changeSearchQueryHandler(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
          
      <div className={classes.searchResultCount}>Results: {props.articles.length}</div>
      <div>
        { props.loading ? <LoadingSpinner /> :<Articles articles={props.articles}/> }
      </div>
    </div>
  );
};

export default HomeTemplate;
