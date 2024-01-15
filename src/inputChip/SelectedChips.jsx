const SelectedChips = ({ selected, removeTags }) => {
  return selected.map(
    (tag, index) =>
      tag.isActive === false && (
        <li key={index} className="tag">
          <span className="tag-title">{tag.displayName}</span>
          <span className="tag-close-icon" onClick={() => removeTags(tag._id)}>
            x
          </span>
        </li>
      )
  );
};

export default SelectedChips;
