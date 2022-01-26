import React from 'react';
import { Link } from 'react-router-dom';

export default function Logout(props) {
    return (
        <div>
            <Link to={'/'} className='link' onClick={props.logout} >
                Logout
            </Link>
        </div>
    )
}
