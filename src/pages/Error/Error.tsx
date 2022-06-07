import React from 'react';
import errorImg from './../../assets/404_img.svg';

// css
import './error.css';

interface IErrorProps {}

const Error: React.FC<IErrorProps> = (props) => {
    return (
        <div className="error-container">
            <div className="img-box">
                <img src={errorImg} alt="Error 404 - Page Not Found" />
            </div>
            <div className="description-box">
                <div className="title-404">Error: 404</div>
                <div className="subtitle-404">Page Not Found</div>
            </div>
        </div>
    );
};

export default Error;
