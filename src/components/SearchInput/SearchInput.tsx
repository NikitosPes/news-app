import React, { ChangeEvent } from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import classes from './SerachInput.module.scss';

interface SearchInputProps {
  value: string;
  handlerChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  size?: 'small' | 'medium';
  label?: string;
  placeholder?: string;
}

const SearchInput = ({ size = 'small', placeholder = '', ...props }: SearchInputProps) => {
  return (
    <div className={classes.searchInputContainer}>
      {props.label && <label className={classes.searchInputLabel}>{props.label}</label>}
      <TextField
        size={size}
        value={props.value}
        placeholder={placeholder}
        onChange={(e) => props.handlerChange(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
