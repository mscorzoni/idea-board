import React from 'react';

const idea = ({idea}) => {
  return (
    <div className="tile" key={idea.id}>
      <h4>{idea.title}</h4>
      <p>{idea.body}</p>
    </div>
  );
};

export default idea;