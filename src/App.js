import './App.css';
import Main from './components/MainComponent';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
