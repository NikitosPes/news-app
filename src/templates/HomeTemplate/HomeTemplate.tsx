import React from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import classes from "./HomeTemplate.module.scss";

const HomeTemplate = () => {
  return (
    <>
      <div className={classes.searchTextFieldWrapper}>
        <label
          className={classes.searchTextFieldLabele}
          htmlFor="home_search-texfield"
        >
          Filter by keywords
        </label>
        <TextField
          id="home_search-texfield"
          size="small"
          placeholder="Enter the topic you are interested in"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={classes.searchResultCount}>Results: 6</div>
      <div>{/* List of ArticlesCard */}</div>
    </>
  );
};

export default HomeTemplate;
