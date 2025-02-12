import React from 'react';
import './App.css';
import WelcomeHeader from './WelcomeHeader';
import Widgets from './Widgets';

function App() {
  return (
    <main className="App">
      <WelcomeHeader loading={true} />
      <Widgets loading={true} />
    </main>
  );
}

export default App;
