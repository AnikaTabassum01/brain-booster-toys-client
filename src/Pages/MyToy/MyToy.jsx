import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const MyToy = () => {

        const { user } = useContext(AuthContext);

        const [myToy, setMyToy] = useState([]);

        const url = `http://localhost:5000/myToy?email=${user?.email}`;

        useEffect( () => {
            fetch(url) 
            .then(res => res.json())
            .then(data => console.log(data))
        }, [])

    return (
        <div>
            <h2>My Toy: {myToy.length}</h2>
        </div>
    );
};

export default MyToy;