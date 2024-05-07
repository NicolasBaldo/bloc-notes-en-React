// MarkdownInput.js
import React, { useState } from 'react';

const MarkdownInput = ({ onSave }) => {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const handleSaveClick = () => {
    onSave(markdown);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleInputChange} />
      <button onClick={handleSaveClick}>Enregistrer</button>
    </div>
  );
};

export default MarkdownInput;
