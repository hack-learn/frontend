import { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import StoreContext, { initialState, reducer } from '../store';
import { 
  Home,
  BasicInformation
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
            </Switch>
          </Router>
        </StoreContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
