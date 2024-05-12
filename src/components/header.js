import React from "react";
import logo from "../images/meinhardt2-logo.png";
import "../styles/style-menu.css";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { menuToggle } from '../actions/menuActions'

class Header extends React.Component {
  constructor(){
    super();  
  }

  toggleClasses = (event) => {
    var menuAction='';
    if(this.props.menuicon==='menuicon icon-down')
      menuAction='off'  
    else if(this.props.menuicon==='menuicon') 
      menuAction='on'  
    console.log(menuAction);
    this.props.menuToggle(menuAction);
  }


  render() {
    return (
      <React.Fragment>
      <header>
        <div className={this.props.menuicon} id="menu-click" onClick={(event) => this.toggleClasses(event)}>
        {/* <div className="menuicon icon-down" id="menu-click"> */}
          <div className="menu-icon1"></div>
          <div className="menu-icon2"></div>
          <div className="menu-icon3"></div>
        </div>
        <div className="menuwrapp">
          <div className="logo">
            <a href="https://meinhardtgroup.com/">
              <img src={logo} className="img-fluid" />
            </a>
          </div>
        </div>
      </header>
    </React.Fragment>
    );
  }
}

Header.propTypes ={
  menuToggle : PropTypes.func.isRequired,
  menuicon: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  menuicon: state.menustate.menuicon
})

export default connect(mapStateToProps, {menuToggle})(Header);