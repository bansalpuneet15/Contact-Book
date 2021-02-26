import React from 'react'
import spinner from './Spinner.gif'

const SpinnerComponent = () => {
    return ( 
        <img src={spinner} alt="loading..." style={{width:'200px',margin:"auto",display:'block'}}/>
    );
}

export default SpinnerComponent;