const DropDown = ({ filteredTags, addValue }) => {
  return filteredTags.map(
    (ele) =>
      ele.isActive && (
        <ul className="liDesign" key={ele._id} onClick={() => addValue(ele)}>
          {ele.displayName}
        </ul>
      )
  );
};

export default DropDown;
