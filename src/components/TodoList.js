import React from 'react';

function TodoList({ list, remove, complete }) {
  return (
    <>
      {list?.length > 0 ? (
        <ul className='todo-list'>
          {list.map((entry, index) => (
            <div className='todo' key={index}>
              <li>
                <span style={{ textDecoration: entry.completed ? 'line-through' : 'none' }}>
                  {entry.text}
                </span>
              </li>
              <button 
                className='delete-button'
                onClick={() => remove(entry.text)}
              >
                Delete
              </button>
              <button 
                className='completed-button'
                onClick={() => complete(entry.text)}
              >
                {entry.completed ? 'Undo' : 'Completed'}
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className='empty'>
          <p>No task found!!!</p>
        </div>
      )}
    </>
  );
}

export default TodoList;
