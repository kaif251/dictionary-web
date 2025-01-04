import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [output, setOutput] = useState('');

  const fetData = async (url) =>{
   await fetch(url).then(res=>res.json()).then((data)=>{
    
    setOutput(data[0]["meanings"][0]["definitions"][0]["definition"]);
   })
  }
  const handleSearch =  () => {
    if (!searchQuery) return;

    // Mock dictionary data or API response.

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`;
    const result = fetData(url);
   
    //call your api here
    const mockData = {
      word: searchQuery,
      meaning: `Definition of ${searchQuery}`,
    };


    setOutput(mockData.meaning);
    setSearchHistory([searchQuery, ...searchHistory]);
    setSearchQuery('');
  };

  return (
    <div className="app-container">
      <div className="dictionary-app">
        <header className="app-header">Dictionary App</header>

        <div className="app-body">
          {/* History Section */}
          <div className="history-section">
            {searchHistory.map((item, index) => (
              <div className="history-item" key={index}>
                {item}
              </div>
            ))}
          </div>

          {/* Search and Output Section */}
          <div className="search-output-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Enter something to search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch}>Find</button>
            </div>

            <div className="output-section">
              <h3>Output:</h3>
              <p>{output}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/* App.css */
