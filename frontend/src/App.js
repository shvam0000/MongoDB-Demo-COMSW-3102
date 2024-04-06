import React, { useState } from 'react';
import Note from './components/note';

const App = () => {
  const [notes, setNotes] = useState();

  const addNote = (e) => {
    e.preventDefault();
    console.log('Note added - ', notes);
  };

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={addNote} className="py-10">
        <label>Enter Note</label>
        <input
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
          type="text"
        />
        <button type="submit">Create Note</button>
      </form>
      <div className="grid grid-cols-4 px-5">
        <div className="p-2">
          <Note title="This is a heading" content="This is not a heading" />
        </div>
      </div>
    </div>
  );
};

export default App;
