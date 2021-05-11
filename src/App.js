import React from 'react';
import logo from './logo.svg';

import './App.css';
import { Container } from 'react-bootstrap'
import LoginPage from '../src/components/loginPage';
import EmployementListPage from '../src/components/employementListPage';
import { BrowserRouter as Router , Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <main className="py-3">
        <Container>
          <Route path='/' component={LoginPage} exact/>
          <Route path='/employementListPage' component={EmployementListPage} />
        </Container>
      </main>
      
    </Router>
  );
}

export default App;