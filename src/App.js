import './App.css';
import Counter from "./components/Counter"
import DisplayGrid from "./components/DisplayGrid"
import LoginForm from "./components/LoginForm"
import ReactPopUp from './components/ReactPopup';
import Table from './components/Table';
import Header from './components/Header';
import { Switch, Route } from "react-router-dom"


const App = () => (
  // <>
  //   <Counter />
  //   <DisplayGrid />
  //   <LoginForm />
  // </>

  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Counter} />
      <Route exact path="/displayview" component={DisplayGrid} />
      <Route exact path="/loginform" component={LoginForm} />
      <Route exact path="/reactpopup" component={ReactPopUp} />
      <Route exact path="/table" component={Table} />
    </Switch>
  </>

)
export default App;