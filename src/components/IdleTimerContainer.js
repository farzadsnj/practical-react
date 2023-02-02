import React, { useRef, useState, Component } from "react";
import { useIdleTimer } from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

function IdleTimerContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    console.log("User is Idle");
    setIsModalOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };
  const logOut = () => {
    setIsLoggedIn(false);
    setIsModalOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User is logged out");
  };

  const stayActive = () => {
    setIsModalOpen(false);
    setIsLoggedIn(true);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User is Active");
  };

  const IdelTimerN = useIdleTimer({ onIdle, stayActive });

  return (
    <div>
      {isLoggedIn ? <h2>Hello Karthik</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={modalIsOpen}>
        <h2>You've been idle for a while</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      {/* <IdelTimerN ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle} /> */}
    </div>
  );
}

export default IdleTimerContainer;
