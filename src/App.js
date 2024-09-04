import { GlobalStyles } from "./assets/styles/GlobalStyles";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

function App() {
  return (
    <>
      <GlobalStyles/>
      <div className="App">
        <WelcomeScreen />
      </div>
    </>

  );
}

export default App;
