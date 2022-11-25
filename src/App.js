
import styles from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';

import React, { Component } from 'react';

class App extends Component {
  state = {
    users : [],
    authUser : null,
  };

  setAuthUser = loggedUser => {
    const filteredUsers = this.state.users
      .filter(e => e.email === loggedUser.email && e.password === loggedUser.password);
    
    this.setState({ authUser : filteredUsers.length ? this.state.users[0] : null});  
  };

  addUser = signedUser => this.setState({ users : [...this.state.users, signedUser] });

  render() {
    const {authUser} = this.state;
    return (
      <div className={styles.container}>
        <Switch>
          <Header authUser={authUser}/>   
        </Switch>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact 
              render={ (routerProps) => <LoginPage {...routerProps} appStateHandler={this.setAuthUser}/> } 
            />
            <Route path="/signup" exact 
              render={ (routerProps) => <SignupPage {...routerProps} appStateHandler={this.addUser}/> }
            />
            <Route path="*" component={NotFoundPage} /> 
          </Switch>
        </main>
    </div>
    );
  }
}

export default App;

/*function App() {
  return (
    <div className={styles.container}>
        <Switch>
          <Header />  
        </Switch>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="*" component={NotFoundPage} /> 
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default App;*/
