// NoteDisplay.js
import React from 'react';
import showdown from 'showdown';

const converter = new showdown.Converter();

const NoteDisplay = ({ markdown }) => {
  const html = converter.makeHtml(markdown);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default NoteDisplay;
