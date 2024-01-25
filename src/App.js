import "./App.css";
import MyForm from "./components/MyForm";
import MyFormWithCheckbox from "./components/MyFormWithCheckbox";
import MyFormWithErrorMsg from "./components/MyFormWithErrorMsg";
import MyFormWithNumberInput from "./components/MyFormWithNumberInput";
import MyFormWithRequiredField from "./components/MyFormWithRequiredField";
import MyFormWithSelect from "./components/MyFormWithSelect";


function App() {
  return (
    <div className="base">
    <div className="app"><MyForm/></div>
    <div className="app"><MyFormWithCheckbox/></div>
    <div className="app"><MyFormWithErrorMsg/></div>
    <div className="app"><MyFormWithRequiredField/></div>
    <div className="app"><MyFormWithSelect/></div>
    <div className="app"><MyFormWithNumberInput/></div>
    </div>
  );
}

export default App;
