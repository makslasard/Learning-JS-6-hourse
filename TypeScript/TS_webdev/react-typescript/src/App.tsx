import React from 'react';
import Component from './component';

import data from './mock'
// type TitleProps = {
//   title: string;
//   children?: string;
// };

// const Title: React.FC<{title: string; children: string}> = ({title, children}) => <h1>{title}{children}</h1>
// const Title: React.FC<TitleProps> = ({title, children}) => <h1>{title}{children}</h1>
// const Title = ({ title, children = 'children' }: TitleProps) => (
//   <h1>
//     {title}
//     {children}
//   </h1>
// );

const App: React.FC = () => (
  <Component
    id={1}
    title={'Название карточки'}
    discription={'Описание товара'}
    data={data}
  />
);

export default App;
