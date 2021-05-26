import React, { useState } from 'react';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import './App.scss';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked)
  };
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>BUTTON</Button>
        <Button color="gray" outline={true}>BUTTON</Button>
        <Button color="pink" size="small" outline={true}>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button fullWidth>BUTTON</Button>
        <Button color="gray" fullWidth={true}>BUTTON</Button>
        <Button color="pink" fullWidth={true} 
        onClick={() => {
          console.log('클릭!')
        }} 
        onMouseMove={() => {
          console.log('마우스 무브!')
        }}>BUTTON</Button>
      </div>
      <CheckBox onChange={onChange} checked={check}>다음 약관에 모두 동의</CheckBox>
      <p>
        <b>check: </b>
        {check ? 'true' : 'false'}
      </p>
    </div>
  );
}

export default App;
