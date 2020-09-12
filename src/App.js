import React from 'react';
import './App.css';
import ButtonsWrapper from './components/ButtonsWrapper';
import Button from './components/Button';

function App() {
  return (
    <>
      <ButtonsWrapper>
        <Button type="danger" name="Gui"></Button>
        <Button type="success" name="Lindão"></Button>
        <Button name="Teste"></Button>
      </ButtonsWrapper>
      <br/>
      <ButtonsWrapper>
        <Button name="Clique aqui"></Button>
      </ButtonsWrapper>
    </>
  );
}

export default App;
