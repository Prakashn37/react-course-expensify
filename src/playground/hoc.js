// hoc - Higher Order Component - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedContent) =>{
    return (props) =>(
        <div>
        {props.isAdmin && <p> This is confidential info. Please don't share </p>}
        <WrappedContent {...props}/>
        </div>

    );

};

const requireAuthentication = (WrappedContent) =>{
    return (props) =>(
        <div>
        {props.isAuthenticated ? 
            <WrappedContent {...props}/>
            :
            <p>Please login to viewthe info</p>
        }
        </div>

    );

};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(< AdminInfo isAdmin = {true} info="These are the details" />,document.getElementById('app'));
ReactDOM.render(< AuthInfo isAuthenticated = {false} info="These are the details" />,document.getElementById('app'));

