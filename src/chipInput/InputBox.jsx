const InputBox = ({ chipEle, addTags }) => {
  return (
    <input
      type="text"
      ref={chipEle}
      onKeyUp={addTags}
      placeholder="Press enter to add tags"
    />
  );
};

export default InputBox;
