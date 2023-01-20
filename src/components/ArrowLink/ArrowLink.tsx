import React from 'react';
import classes from './ArrowLink.module.scss';

import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Link } from 'react-router-dom';

interface ArrowLinkProps {
  text: string;
  redirectURL: string;
  type?: 'forward' | 'backward';
  onClick: () => void;
}

const ArrowLink = ({ redirectURL, text, type = 'forward', onClick }: ArrowLinkProps) => {
  return (
    <div className={classes.arrowLinkContainer}>
      {type === 'backward' ? <WestOutlinedIcon fontSize='small' /> : null}
      <Link to={redirectURL} className={classes.arrowLink} onClick={onClick}>
        {text}
      </Link>
      {type === 'forward' ? <EastOutlinedIcon fontSize='small' /> : null}
    </div>
  );
};

export default ArrowLink;
