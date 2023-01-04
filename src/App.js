import './App.css';
import React from 'react';
import { Icons } from './components/Icons';
import ToastNotification from './components/ToastNotification';
import { ModalComp } from './components/Modal';
import ToolTip from './components/ToolTip';
import CountUpComp from './components/CountUpComp';
import IdleTimerContainer from './components/IdleTimerContainer';

function App() {
  return (
      <div className="App">
        <Icons />
        <ToastNotification />
        <ModalComp />
        <ToolTip />
        {/* <CountUpComp /> */}
        {/* <IdleTimerContainer /> */}
      </div>
  );
}

export default App;
