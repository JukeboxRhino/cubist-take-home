import React from 'react';
import './App.css';
import WelcomeHeader from './WelcomeHeader';
import Widgets from './Widgets';
import { useData } from './util/use-data';

function App() {
  const { loading, data, mutate } = useData();
  const displayName = data?.user?.displayName;
  return (
    <main className="App">
      <WelcomeHeader loading={loading} name={displayName} />
      <Widgets loading={loading} data={data} mutate={mutate} />
    </main>
  );
}

export default App;
