import './App.css';
import React from 'react';
import { Icons } from './components/Icons';
import ToastNotification from './components/ToastNotification';
import { ModalComp } from './components/Modal';
import ToolTip from './components/ToolTip';
import CountUpComp from './components/CountUpComp';

function App() {
  return (
      <div className="App">
        <Icons />
        <ToastNotification />
        <ModalComp />
        <ToolTip />
        <CountUpComp />
      </div>
  );
}

export default App;
