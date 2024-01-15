const InputBox = ({ chipEle, addTags }) => {
  return (
    <input
      type="text"
      ref={chipEle}
      onKeyUp={addTags}
      placeholder="Press enter or Select using Mouse to Add Tags"
    />
  );
};

export default InputBox;
