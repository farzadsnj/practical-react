import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastNotification = () => {
    const notify = () =>{
        toast(customMessage, {position: toast.POSITION.TOP_LEFT})
        toast.success('basic notice', {position: toast.POSITION.TOP_RIGHT, autoClose: 8000})
        toast.info('basic notice', {position: toast.POSITION.TOP_CENTER, autoClose: false})
        toast.warn('basic notice', {position: toast.POSITION.BOTTOM_LEFT})
        toast.error('basic notice', {position: toast.POSITION.BOTTOM_RIGHT})
        toast('basic notice', {position: toast.POSITION.BOTTOM_CENTER})
    }
  return (
    <div>
        <button onClick={notify}>notify!</button>
        <ToastContainer />
    </div>
  )
}

const customMessage = ({closeToast}) =>{
    return(
        <div>
            something is wrong!
            <button onClick={closeToast}>close</button>
        </div>
    )
}

export default ToastNotification