import React from 'react';
import { Link } from 'react-router-dom';

export default function Logout(props) {
    return (
        <div>
            <Link to={'/'} onClick={props.logout} >
                Logout
            </Link>
        </div>
    )
}
