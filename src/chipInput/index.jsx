import { useState, useRef } from "react";
import "./chipInput.css";
import DropDown from "./DropDown";
import InputBox from "./InputBox";
import SelectedChips from "./SelectedChips";

const InputChip = ({ chipText }) => {
  const [tags, setTags] = useState(chipText);
  const [filteredTags, setFilteredTags] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isBackSpace, setIsBackSpace] = useState(false);
  const chipEle = useRef();

  const removeTags = (id) => {
    const updatedArray = tags.map((obj) => {
      if (obj._id === id) {
        return { ...obj, isActive: true };
      }
      return obj;
    });
    setFilteredTags([...filteredTags.filter((ele) => ele._id !== id)]);
    setSelected([...selected.filter((ele) => ele._id !== id)]);
    setTags(updatedArray);
  };
  const chipAdd = (word) => {
    if (word) {
      const updatedArray = tags.map((obj) => {
        if (obj._id === word._id) {
          return { ...obj, isActive: false };
        }
        return obj;
      });
      setTags(updatedArray);
      setSelected([...selected, { ...word, isActive: false }]);
      setFilteredTags([]);
    }
  };
  const addValue = (data) => {
    chipEle.current.value = "";
    chipAdd(data);
  };
  const addTags = (event) => {
    const text = event.target.value;
    console.log(text);
    if (text === "" && event.key === "Backspace" && selected.length > 0) {
      if (isBackSpace) {
        removeTags(selected[selected.length - 1]._id);
        setIsBackSpace(false);
      } else {
        setIsBackSpace(true);
      }
    } else if (event.key === "Enter" && text !== "") {
      chipEle.current.value = "";
      setIsBackSpace(false);
      const word = tags.find(
        (ele) => ele.isActive && ele.displayName.startsWith(text)
      );
      chipAdd(word);
    } else {
      setIsBackSpace(false);
      if (text === "") {
        setFilteredTags([]);
      } else {
        const arr = [];
        tags.forEach((ele) => {
          if (ele.isActive === true && ele.displayName.startsWith(text)) {
            arr.push(ele);
          }
        });
        setFilteredTags(arr);
      }
    }
  };

  return (
    <>
      <div className="tags-input">
        <ul id="tags">
          <SelectedChips selected={selected} removeTags={removeTags} />
        </ul>
        <InputBox chipEle={chipEle} addTags={addTags} />
      </div>
      <div className="customDropDown">
        <DropDown filteredTags={filteredTags} addValue={addValue} />
      </div>
    </>
  );
};
export default InputChip;
