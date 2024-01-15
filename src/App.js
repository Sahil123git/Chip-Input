import InputChip from "./chipInput";
import "./App.css";
import { chipText } from "./staticData";
function App() {
  return (
    <div className="App">
      <div>
        <h3 className="decorativeHeader">You can Search Vegetables here :- </h3>
        <div className="bottomSpace">
          {chipText.map((ele) => (
            <span key={ele._id}>{ele.displayName}, </span>
          ))}
        </div>
      </div>
      <InputChip chipText={chipText} />
    </div>
  );
}

export default App;
