import './App.css';
import React from 'react';
import { Icons } from './components/Icons';
import ToastNotification from './components/ToastNotification';
import { ModalComp } from './components/Modal';
import ToolTip from './components/ToolTip';
import CountUpComp from './components/CountUpComp';
import IdleTimerContainer from './components/IdleTimerContainer';
import ColorPiker from './components/ColorPiker';
import CreditCards from './components/CreditCards';
import DatePickerComp from './components/DatePicker';

function App() {
  return (
      <div className="App">
        <DatePickerComp />
        <Icons />
        <ToastNotification />
        <ModalComp />
        <ToolTip />
        {/* <CountUpComp /> */}
        {/* <IdleTimerContainer /> */}
        <ColorPiker />
        <CreditCards />
      </div>
  );
}

export default App;
