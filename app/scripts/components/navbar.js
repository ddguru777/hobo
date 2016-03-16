import React from 'react'
import NavLink from './navlink'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  render() {
    let toggleStyle = (this.state.showMenu) ? {display:'block'}:{display:'none'};
    return (
      <nav className="navbar navbar-default bg-faded">
        <div className="container-fluid">
          <div className="row">
            <button className="navbar-toggler hidden-sm-up pull-xs-right" type="button" data-toggle="collapse" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})} data-target="#exCollapsingNavbar2">
              &#9776;
            </button>
            <a className="navbar-brand" href="/"><img className="logo" src="http://hoon.io/logo-transparent"/></a>
            <div className="navbar-toggleable-xs pull-sm-right" style={toggleStyle} id="exCollapsingNavbar2">
              <ul role="nav" className="nav navbar-nav">
                <NavLink to="/" id="nav-home" onlyActiveOnIndex>Home</NavLink>
                <NavLink to="/portfolio" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})}>Portfolio</NavLink>
                <NavLink to="/profile" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})}>Profile</NavLink>
                <NavLink to="/canvas" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})}>Canvas</NavLink>
                <li className="nav-item"><a className="nav-link" href="http://blog.hoonio.com">Blog</a></li>
                <li className="nav-item"><a className="nav-link" href='/#contact'>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
