import React from "react";
import transOverImg from "../images/trans-over.png";
import personalOverImg from "../images/personal-over.png";
import "../styles/style-menu.css";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { menuToggle } from '../actions/menuActions'

class LeftMenu extends React.Component {
  render() {
    return (
      <aside className={this.props.menucloseoropen}>
        <div className="nsl-sidemenu nsl-anim">
          <div className="nsl-sidemenu-links">
            <ul className="list-unstyled " id="accordion">
              <li>
                <div className="link-wrap">
                  <div className="link-75">
                    <a href="">
                      <img src={transOverImg} alt="" className="img-33" />
                      Resources
                    </a>
                  </div>
                  <div
                    className="link-25  collapsed icon-click"
                    data-toggle="collapse"
                    href="#collapseOne1"
                  >
                    <i
                      id="2"
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div
                  id="collapseOne1"
                  className="collapse"
                  data-parent="#accordion"
                  aria-labelledby="heading-1"
                >
                  <div className="card-body">
                    <div id="accordion-1">
                      <div className="sipl" id="heading-1-2">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="https://drive.google.com/drive/folders/1OUlggdO4qku7tfBPrK2xzUqgt8_epz9r?usp=sharing"
                          aria-expanded="false"
                          aria-controls="collapse-1-2"
                        >
                          Data Sources{" "}
                          <i
                            id="22"
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                      
                    </div>
        
                  </div>
                </div>
              </li>

              
              <li>
                <div className="link-wrap">
                  <div className="link-75">
                    <a href="">
                      <img src={personalOverImg} alt="" className="img-33" />Contact Us
                    </a>
                  </div>
                </div>
                <div
                  id="collapseOne2"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <ul className="subdrop">
                    <li>
                      <a href="https://meinhardtgroup.com/contactus/">smartcity@meinhardt.com</a>
                    </li>
                  </ul>
                </div>
              </li>
              
            </ul>
           
            <div className="socialicons">
              <a href="" className="fa fa-facebook"></a>
              <a href="" className="fa fa-twitter"></a>
              <a href="" className="fa fa-linkedin"></a>
              <a href="" className="fa fa-youtube"></a>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

LeftMenu.propTypes ={
  menuToggle : PropTypes.func.isRequired,
  menucloseoropen: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  menucloseoropen: state.menustate.menucloseoropen
})

export default connect(mapStateToProps, { menuToggle })(LeftMenu);