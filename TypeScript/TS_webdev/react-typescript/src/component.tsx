import React, { useState } from 'react';

import data from './mock';

interface IComponentProps {
  id: number;
  title: string;
  discription: string;
  data: {
    id: number;
    title: string;
    discription: string;
  }[];
}

const Component: React.FC<IComponentProps> = ({ ...props }) => {
  const [count, setCount] = useState<IComponentProps['data']>({ ...data });

  const buttonClickIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('')
  };

  return (
    <>
      <div className="header">
        <h1>0</h1>
        <button onClick={buttonClickIncrement} className="">
          +
        </button>
        <button className="buttonDecrement">-</button>
        <button className="buttonClear">clear</button>
      </div>
      <div className="footer">
        <h1>{props.id}</h1>
        <h2>{props.title}</h2>
        <p>{props.discription}</p>
      </div>
    </>
  );
};

export default Component;
