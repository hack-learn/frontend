import { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import StoreContext, { initialState, reducer } from '../store';
import { 
  Home,
  BasicInformation,
  Students,
  Diagnostic,
  Detail,
  Success
} from '../pages';
import theme from '../theme';
import './App.css';

function App() {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={{ globalState, dispatch }}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/basic-information" component={BasicInformation} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/students/detail" component={Detail} />
              <Route exact path="/diagnostic" component={Diagnostic} />
              <Route exact path="/diagnostic/success" component={Success} />
            </Switch>
          </Router>
        </StoreContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
