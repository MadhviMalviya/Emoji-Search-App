
import './App.css';

import React, { useState } from 'react';


const emojis = [
  "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "😊", "😇",
  "🙃", "😉", "😌", "🥰", "😍", "🤩", "😘", "😗", "😚", "😋",
  "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥳", "😏",
  "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫"
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  function handleSearch (e) {
    setSearchTerm(e.target.value);
  }

  const filteredEmojis = emojis.filter(emoji => {
    return emoji.includes(searchTerm);
  });

  return (
    <div className="App">
      <h1>Emoji Search App</h1>
      
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="emoji-list">
        {filteredEmojis.map(emoji => (
          <span key={emoji} className="emoji">{emoji}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
