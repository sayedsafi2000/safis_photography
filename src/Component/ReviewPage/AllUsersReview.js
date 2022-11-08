import React, { useState, useEffect } from 'react';

const AllUsersReview = () => {
    const [allReview, setAllReview] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user-review")
    }, [])
    return (
        <div>

        </div>
    );
};

export default AllUsersReview;