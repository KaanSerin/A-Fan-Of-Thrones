import React, { useState } from "react";
import classes from "./AutoCompleteInput.module.css";

const AutoCompleteInput = ({ dataset, submitEvent }) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestList, setSuggestList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const onInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);

    if (inputValue.length == 0) {
      setSuggestList([]);
      return;
    }

    setSuggestList(filterDataSetByName(inputValue));
  };

  const onKeyDown = (event) => {
    if (event.keyCode !== 13 || event.target.value.length < 3) return;
    if (submitEvent === undefined) return;

    submitEvent(searchValue);
    console.log("OnSubmit();");
  };

  const onSuggestionSelected = (event) => {
    setSearchValue(event.target.innerText);
    submitEvent(event.target.innerText);
  };

  const filterDataSetByName = (name) => {
    name = name.trim().toLowerCase();
    const dataSetFiltered = dataset
      .filter((char) => char.Name.toLowerCase().slice(0, name.length) === name)
      .slice(0, 5);
    return dataSetFiltered;
  };

  return (
    <div>
      <input
        className={classes.Input}
        placeholder="Search for a character!"
        value={searchValue}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setShowSuggestions(true)}
      />
      {showSuggestions ? (
        <div
          className={classes.SuggestionContainer}
          onMouseLeave={() => setShowSuggestions(false)}
        >
          <ul className={classes.SuggestionList}>
            {suggestList.length > 0
              ? suggestList.map((suggestion) => (
                  <li
                    className={classes.Suggestion}
                    key={suggestion.Id}
                    onClick={onSuggestionSelected}
                  >
                    {suggestion.Name}
                  </li>
                ))
              : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default AutoCompleteInput;
