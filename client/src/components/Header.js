import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Header extends Component{

  renderContent (){
    switch (this.props.auth){
      case null :
        return ;
      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li> 
        
        );
      default :
        return (
          <li><a href="/api/logout">Logiout</a></li> 
        );

    }
  }
  
  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to={this.props.auth ?'/surveys':'/'} 
              className="brand-logo">
              Emaily
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProp({auth}){
  return{auth};
}
export default connect(mapStateToProp)(Header);