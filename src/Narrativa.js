import React from 'react';
import './Narrativa.css';

const Narrativa = () => {
    return (
        <div className="app-container">
            <div className="background">
                <header className="header">
                    <img src="/images/logo.png" alt="Narrativa Logo" className="logo" />
                    <h1 className="title">NARRATIVA</h1>
                </header>
                
                <div className="content">
                    <div className="category">
                        <img src="/images/mystery.png" alt="추리" className="category-image" />
                        <p className="category-text">#추리 #미스터리</p>
                    </div>
                    <div className="category">
                        <img src="/images/horror.png" alt="공포" className="category-image" />
                        <p className="category-text">#공포 #살인</p>
                    </div>
                    <div className="category">
                        <img src="/images/romance.png" alt="연애" className="category-image" />
                        <p className="category-text">#연애 #미연시</p>
                    </div>
                    <div className="category">
                        <img src="/images/growth.png" alt="성장" className="category-image" />
                        <p className="category-text">#성장 #키우기</p>
                    </div>
                </div>
                
                <footer className="footer">
                    <img src="/images/home-icon.png" alt="Home" className="footer-icon" />
                    <img src="/images/settings-icon.png" alt="Settings" className="footer-icon" />
                    <img src="/images/bookmark-icon.png" alt="Bookmark" className="footer-icon" />
                    <img src="/images/profile-icon.png" alt="Profile" className="footer-icon" />
                </footer>
            </div>
        </div>
    );
};

export default Narrativa;
