import React from 'react';

const UserInput = ( props ) => {
  return (
    <input onChange={(event) => props.changeHandler(event)} value={props.username} />
  );
}

export default UserInput;
