import React, { useState } from 'react';
import Note from './components/note';

const App = () => {
  const [notes, setNotes] = useState();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    console.log('Note added - ', notes);
  };

  return (
    <div>
      <h1 className="w-screen bg-yellow-400 text-xl font-medium py-4 mx-auto text-center">
        Notes Keeper
      </h1>
      <form
        onSubmit={addNote}
        className="py-2 shadow-xl rounded-lg px-5 w-1/3 mx-auto text-left">
        <input
          className="block shadow w-full mx-auto px-2 py-2 my-2 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          type="text"
          placeholder="Title"
        />
        <textarea
          placeholder="Write your note here..."
          rows={4}
          className="block shadow w-full mx-auto my-2 px-2 py-4 rounded-lg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          type="text"
        />

        <button className="bg-yellow-400 px-2 rounded py-1" type="submit">
          Add Note
        </button>
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
