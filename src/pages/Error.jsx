import React from 'react';
import Banner from '../Component/UI/Banner/Banner';
import Button from '../Component/UI/Button/Button';
import { useNavigate } from 'react-router-dom';


const Error = () => {
    const router = useNavigate()
    return (
        <div>
            <Banner position="center" title="Unfortunately, something went wrong">
                <Button onClick={() => router(`/dashboard`)}>Go back</Button>
            </Banner>
        </div>
    );
};

export default Error;
