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
import VideoPlayer from './components/VideoPlayer';
import { SpinnersLoaders } from './components/Spinners-Loaders';
import LineChart, { Data, Options } from './components/charts/LineChart';

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
        {/* <VideoPlayer /> */}
        <SpinnersLoaders />
        <LineChart>
          <Options />
          <Data />
        </LineChart>
      </div>
  );
}

export default App;
