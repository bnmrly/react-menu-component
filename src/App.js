import React from 'react';
import Menu from './components/Menu/Menu';
import styled from 'styled-components/macro';

const Header = styled.header`
  background-color: #ee5f63;
`;

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <Menu />
      </Header>
    </div>
  );
}

export default App;
