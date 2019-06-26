import React, { Fragment } from 'react';

export const Person = ({name, children, age, clickHandler, changeHandler}) => (
  <Fragment>
    <p onClick={() => clickHandler()}>
      Name: {name} and Age: {age}
    </p>
    <p>{children}</p>
    <input type="text" onChange={(event) => changeHandler(event)} value={name} />
  </Fragment>
)

export default Person;
