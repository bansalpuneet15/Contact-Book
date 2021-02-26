import React, { useContext } from "react";
import AlertContext from "../reducers/AlertContext";

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alerts } = alertContext;
    return (
        // <div className='alert alert-primary' role="alert">
        //     alert
        // </div>
        alerts.length > 0 &&
        alerts.map((alert) => {
            return  <div key={alert.id} className={`alert alert-${alert.type}`} role="alert">
                        {alert.type === 'success' ? <i class="fas fa-check-square m-2"></i> : <i class="fas fa-exclamation-triangle m-2"></i>}{alert.msg}
                    </div>
        })
    );
};

export default Alert;