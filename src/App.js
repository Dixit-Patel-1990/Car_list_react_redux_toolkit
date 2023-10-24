import "./App.css";
import "./Styles/style.css";
import Cars from "./Components/Cars";
import { store } from "./Store/index";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cars />
      </div>
    </Provider>
  );
}

export default App;
