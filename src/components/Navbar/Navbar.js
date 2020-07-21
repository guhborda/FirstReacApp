import React from 'react';
import logo from '../../logo2.png';
const Navbar = () =>(
<nav id="navbar-main" className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
    <div className="container">
        <a className="navbar-brand" href="price">
            <img src={logo} alt="logo" className="avatar" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
            <div className="navbar-collapse-header">
                <div className="row">
                    <div className="col-6 collapse-brand">
                        <a href="price">
                            <img src={logo} />
                        </a>
                    </div>
                    <div className="col-6 collapse-close">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
                    </div>
                </div>
            </div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="home" className="nav-link">
                        <span className="nav-link-inner--text">Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="pricing" className="nav-link">
                        <span className="nav-link-inner--text">Pricing</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="lock" className="nav-link">
                        <span className="nav-link-inner--text">lock</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="loja" className="nav-link">
                        <span className="nav-link-inner--text">Loja</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="donate" className="nav-link">
                        <span className="nav-link-inner--text">Doar</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="register" className="nav-link">
                        <span className="nav-link-inner--text">Registrar</span>
                    </a>
                </li>

            </ul>
            <hr className="d-lg-none" />
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                <li className="nav-item">
                    <a className="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" data-toggle="tooltip" data-original-title="Like us on Facebook">
                        <i className="fab fa-facebook-square"></i>
                        <span className="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Instagram">
                        <i className="fab fa-instagram"></i>
                        <span className="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Twitter">
                        <i className="fab fa-twitter-square"></i>
                        <span className="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link-icon" href="https://github.com/creativetimofficial" target="_blank" data-toggle="tooltip" data-original-title="Star us on Github">
                        <i className="fab fa-github"></i>
                        <span className="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li className="nav-item" id="authUser">
                    <a href="egypt/login" className="btn btn-outline-white btn-icon" id="navbar-login-btn">
                        <span className="nav-link-inner--text">Login</span>
                    </a>
                    
                </li>
                
            </ul>
        </div>
    </div>
</nav>
);
export default Navbar;