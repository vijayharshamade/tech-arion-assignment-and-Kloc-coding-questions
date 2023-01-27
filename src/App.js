import './App.css';
import Counter from "./components/Counter"
import DisplayGrid from "./components/DisplayGrid"
import LoginForm from "./components/LoginForm"
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
    </Switch>
  </>

)
export default App;