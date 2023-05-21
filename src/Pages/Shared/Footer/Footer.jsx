import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-950 text-base-content">

            <div>
                <p className='normal-case text-center text-3xl font-extrabold text-white pl-6 mt-4'>Brain
                    <br />
                    Booster
                    <br />
                    Toys</p>
            </div>
            <div className='text-white'>
                <span className="footer-title">About us</span>
                <a className="link link-hover">Who We Are</a>
                <a className="link link-hover">Join Our Team</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Affiliate Program</a>
                <a className="link link-hover">Terms & Conditions</a>
            </div>
            <div className='text-white'>
                <span className="footer-title">Shop</span>
                <a className="link link-hover">New Products</a>
                <a className="link link-hover">Critical Thinking</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Imaginative & Role Play</a>
                <a className="link link-hover">Teacher Resources</a>
            </div>
            <div className='text-white'>
                <span className="footer-title">Need Help?</span>
                <a className="link link-hover">Customer Service</a>
                <a className="link link-hover">Replacement Parts</a>
                <a className="link link-hover">Find a Store</a>
                <p>+880-1700000011</p>
                <a className="link link-hover">Mon-Fri 8:30am - 5.30pm</a>
            </div>
        </footer>
        
    );
};

export default Footer;