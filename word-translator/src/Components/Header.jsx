import React from "react";
import "../Styles/Header.css";
import Country from "../Data/Category";
import { MenuItem, TextField } from "@mui/material";

const Header = ({ category, setCategory, word, setWord, setMeanings }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeanings([]);
  };

  const handleText = (text) => {
    setWord(text);
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word - Translator"}</span>
      <div className="inputs">
        <TextField
          id="filled-basic"
          label="Search a Word"
          variant="filled"
          className="search"
          onChange={(e) => handleText(e.target.value)}
        />
        <TextField
          id="outlined-select-country"
          select
          label="Select"
          value={category}
          className="select"
          onChange={(e) => handleChange(e)}
          helperText="Please select your country"
        >
          {Country.map((el, index) => (
            <MenuItem key={el.label} value={el.label}>
              {el.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
