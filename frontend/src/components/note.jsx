import React, { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

const Note = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(props.title);
  const [updatedContent, setUpdatedContent] = useState(props.content);

  const handleUpdate = () => {
    props.updateNote(props.id, updatedTitle, updatedContent);
    setEditMode(false);
  };

  return (
    <div className="border-2 px-5 py-2 w-full rounded my-10">
      {editMode ? (
        <div>
          <input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="block shadow w-full mx-auto px-2 py-2 my-2 rounded-lg"
            required
            type="text"
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            placeholder="Write your note here..."
            rows={4}
            className="block shadow w-full mx-auto my-2 px-2 py-4 rounded-lg"
            required
            type="text"
          />
          <button
            onClick={handleUpdate}
            className="text-blue-400 text-3xl px-2 py-1">
            <TiTick />
          </button>
        </div>
      ) : (
        <div>
          <h1 className="flex justify-center items-center py-2 text-xl font-bold">
            {props.title}
          </h1>
          <h2 className="text-justify">{props.content}</h2>
          <div className="flex justify-center items-center">
            <button
              onClick={() => setEditMode(true)}
              className="py-1 my-2 px-3 text-blue-400 text-3xl rounded-lg mx-2">
              <MdModeEditOutline />
            </button>
            <button
              onClick={props.deleteNote}
              className="py-1 my-2 px-3 text-red-600 text-3xl rounded-lg mx-2">
              <MdDeleteForever />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
