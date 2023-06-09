import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>Details About: {friend.name}</h1>
            <p>Contact{friend.phone}</p>
            <h2>Personal info</h2>
        </div>
    );
};

export default FriendDetails;