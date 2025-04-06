import React from 'react';
import './App.css';
import RestaurantForm from './components/RestaurantForm';
import RestaurantHistory from './components/RestaurantHistory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>식당 방문 기록</h1>
      </header>
      <main>
        <RestaurantForm />
        <RestaurantHistory />
      </main>
    </div>
  );
}

export default App; 