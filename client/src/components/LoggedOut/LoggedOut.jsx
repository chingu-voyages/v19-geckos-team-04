import React from 'react';

import './LoggedOut.scss'; 

const LoggedOut = () => {
    return (
        <div>
            <bitton className="spotify-login" onClick={ () => window.location = 'http://geckos4-backend.herokuapp.com/login' }>Sign In</bitton>
        </div>
    )
}
export { LoggedOut };