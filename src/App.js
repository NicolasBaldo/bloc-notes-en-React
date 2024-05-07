import React, { useState, useEffect } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';

const App = () => {
  const [note, setNote] = useState('');

  useEffect(() => {
    // Charger les données du localStorage lors du montage
    const storedNote = localStorage.getItem('blocNote');
    if (storedNote) {
      setNote(storedNote);
    }
  }, []);

  const handleSave = (markdown) => {
    setNote(markdown);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ flex: 1, textAlign: 'left', paddingLeft: '20px' }}>
        <h1>Notes enregistrées</h1>
        <NoteDisplay markdown={note} />
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h1>MARKDOWN INPUT</h1>
        <MarkdownInput 
          onSave={handleSave} 
          style={{ width: '100%', height: '500px', border: '5px solid #ccc', borderRadius: '5px', padding: '10px' }} 
        /> 
      </div>
    </div>
  );
};

export default App;


