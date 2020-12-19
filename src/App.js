import React from 'react';
import Navigator from './components/nav/Navigator'
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import {styles, drawerWidth} from './styles'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Dashboard from './pages/Main/Dashboard'
import Chat from './pages/Chat';
import Header from './components/header/Header'
import Thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { compose, createStore} from 'redux'
import {MiddlewareRegistry,
        ReducerRegistry,
        StateListenerRegistry
} from './redux'
import axios from 'axios';

const apiUrl = 'http://45.32.252.246:8000'

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.black,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 24,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
    MuiAppBar:{
      colorPrimary:{
        backgroundColor:"#132d54"
      }
    }
  },
};

function _createStore() {
  // Create combined reducer from all reducers in ReducerRegistry.
  const reducer = ReducerRegistry.combineReducers();

  // Apply all registered middleware from the MiddlewareRegistry and
  // additional 3rd party middleware:
  // - Thunk - allows us to dispatch async actions easily. For more info
  // @see https://github.com/gaearon/redux-thunk.
  let middleware = MiddlewareRegistry.applyMiddleware(Thunk);

  // Try to enable Redux DevTools Chrome extension in order to make it
  // available for the purposes of facilitating development.
  let devToolsExtension;

  if (typeof window === 'object'
          && (devToolsExtension = window.devToolsExtension)) {
      middleware = compose(middleware, devToolsExtension());
  }

  const store = createStore(reducer, middleware);

  console.log("HUNG_LOG", "CreateStore")
  // StateListenerRegistry
  StateListenerRegistry.subscribe(store);

  return store;
}

function App(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [_store, setStore] = React.useState(undefined)
  const storedJwt = localStorage.getItem('user_token');
  const storedRefreshJwt = localStorage.getItem('refresh_token');
  // const [_Jwt, setJwt] = React.useState(storedJwt || null);
  const [_RefreshJwt, setRefreshJwt] = React.useState(storedRefreshJwt || null);

  const getJwt = async () => {
    var bodyFormData = new FormData();
    bodyFormData.append('username', 'admin');
    bodyFormData.append('password', '123456aA@');

    await axios({
      method: 'post',
      url: `${apiUrl}/api/token/`,
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => response.data)
    .then(data => {
      localStorage.setItem('user_token',data.access);
      localStorage.setItem('refresh_token',data.refresh);
      // setJwt(data.access);
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  const refreshJwt = async () => {
    var bodyFormData = new FormData();
    bodyFormData.append('refresh', _RefreshJwt);

    await axios({
      method: 'post',
      url: `${apiUrl}/api/token/refresh/`,
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
        
      }
    })
    .then(response => response.data)
    .then(data => {
      localStorage.setItem('refresh_token',data.refresh);
      // setJwt(data.access);
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  React.useEffect(()=>{
    if(!_store){
      setStore(_createStore())
    }
    
  })
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // if(!_Jwt){
  //   getJwt();
  // } else {
  //    if(!_RefreshJwt){
  //     getJwt();
  //    } else {
  //     refreshJwt();
  //    }
  // }
  getJwt();
  if(_store){
    return (
      <ThemeProvider theme={theme}>
        <Provider store={_store}>
          <Router>
          <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div className={classes.app}>
              <Header onDrawerToggle={handleDrawerToggle} />
                <Switch>
                  <Route path='/dashboard' exact component={Dashboard} />
                  <Route path='/chat' render={()=>(<Chat {...props} mobileOpen={mobileOpen} />)}/>
                  <Redirect from="/" to="/dashboard" />
                </Switch>
          </div>
          </div>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
  return (<></>);
}

export default withStyles(styles)(App);
