import React from 'react';
import './App.css';
import WelcomeHeader from './WelcomeHeader';
import Widgets from './Widgets';
import { useData } from './util/use-data';

function App() {
  const { loading, data } = useData();
  return (
    <main className="App">
      <WelcomeHeader loading={loading} />
      <Widgets loading={loading} />
    </main>
  );
}

export default App;
