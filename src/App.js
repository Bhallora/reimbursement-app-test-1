import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import Stuff from './components/view-Applications';
import { Route, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import NewEntry from './components/new-Entry';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    }
    );
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {

    let backdrop;
    if (this.state.sideDrawerOpen) {

      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (<HashRouter>
      <div style={{ height: '100%' }}>
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }} />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/components/view-Applications" component={Stuff} />
          <Route path="/components/new-Entry" component={NewEntry} />

        </div>
      </div>
    </HashRouter>
    )
  }

}

export default App;
