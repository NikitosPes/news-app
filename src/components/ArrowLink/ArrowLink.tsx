import React from "react";
import classes from "./ArrowLink.module.scss";

import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

interface ArrowLinkProps {
  text: string;
  redirectURL: string;
  type?: "forward" | "backward";
};

const ArrowLink = ({ redirectURL, text, type = "forward" }: ArrowLinkProps) => {
  return (
    <div className={classes.arrowLinkContainer}>
      {type === "backward" ? <WestOutlinedIcon fontSize="small" /> : null}
      <a href={redirectURL} className={classes.arrowLink}>
        {text}
      </a>
      {type === "forward" ? <EastOutlinedIcon fontSize="small" /> : null}
    </div>
  );
};

export default ArrowLink;
