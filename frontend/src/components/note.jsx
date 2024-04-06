import React from 'react';

const Note = (props) => {
  return (
    <div className="border-2 p-5 w-full rounded">
      <h1 className="flex justify-center items-center py-2 text-xl font-bold">
        {props.title}
      </h1>
      <h2 className="text-justify">{props.content}</h2>
      <div className="flex justify-center items-center">
        <button className="py-1 my-2 px-3 bg-blue-400 text-white rounded-lg mx-2">
          Mark as done
        </button>
        <button className="py-1 my-2 px-3 bg-red-600 text-white rounded-lg mx-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
