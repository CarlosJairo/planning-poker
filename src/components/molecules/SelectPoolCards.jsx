import React from "react";
import Option from "../atoms/Option";
import "../../styles/molecules/SelectPoolCards.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changePoolCards } from "../../reducers/game/gameSlice";

const SelectPoolCards = () => {
  const [value, setValue] = useState("fibonacci");
  const { allPoolCards, selectedCards } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(changePoolCards(e.target.value));
  };

  return (
    <>
      {selectedCards.length === 0 && (
        <select
          name="poolCard"
          id="poolCard"
          className="select-pool-cards"
          onChange={handleChange}
          value={value}
        >
          {Object.keys(allPoolCards).map((key) => (
            <Option key={key} value={key}>
              {key.toUpperCase()}
            </Option>
          ))}
        </select>
      )}
    </>
  );
};

export default SelectPoolCards;
