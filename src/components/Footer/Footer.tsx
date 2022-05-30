import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

import './footer.css';

// interface
interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
    return (
        <footer className="footer-wrapper">
            <div className="socials">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/maciejpieczarka/reactjs-markdown-generator"
                    className="social-link"
                >
                    Source code:
                    <AiOutlineGithub className="social-icon" />
                </a>
            </div>
            <div className="copy">&copy;2022 - Reactjs Markdown Generator</div>
        </footer>
    );
};

export default Footer;
