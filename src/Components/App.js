import BlockHeader from "./BlockHeader";
import BlockPortfolio from "./BlockPortfolio";
import BlockExperience from "./BlockExperience";
import BlockEducation from "./BlockEducation";
import BlockFooter from "./BlockFooter";

function App() {
  return (
    <div className="App">
        <BlockHeader />
        <BlockPortfolio />
        <BlockExperience />
        <BlockEducation />
        <BlockFooter />
    </div>
  );
}

export default App;
