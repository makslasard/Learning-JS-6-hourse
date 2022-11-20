import React from 'react';

type TitleProps = {
  title: string,
  children?: string
}

// const Title: React.FC<{title: string; children: string}> = ({title, children}) => <h1>{title}{children}</h1>
// const Title: React.FC<TitleProps> = ({title, children}) => <h1>{title}{children}</h1>
const Title = ({title, children = 'children'}: TitleProps) => <h1>{title}{children}</h1>

const App = () => <Title title='test' children={''}/>

export default App;
