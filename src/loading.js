import React from "react";
import spinner from './Spinner-1s-200px.gif'

const loadingStyle = {
    position: 'fixed',
    top: '50vh',
    left: '50vw',
    transform: 'translate(-50%, -50%)',
}
const LoadingIndicator=()=>{
    return (
        <div style={loadingStyle}>
        <img src={spinner} />
        </div>
    )
} 
export default LoadingIndicator;