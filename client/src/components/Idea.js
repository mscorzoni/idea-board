import React from 'react';

const Idea = (props) => {
  return (
    <div className="tile" key={props.idea.id}>
      <h4>{props.idea.title}</h4>
      <p>{props.idea.body}</p>
    </div>
  );
};

export default Idea;