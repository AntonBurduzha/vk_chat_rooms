import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import { getUserData } from '../../api/login.api'
import { setVkUserData } from '../../actions/login.actions'
import UserServiceView from '../views/user.service.view'

class UserServiceContainer extends Component {
  constructor() {
    super();
    this.selectMenuItem = this.selectMenuItem.bind(this);
  }

  componentDidMount() {
    let userId = localStorage.getItem('user');

    getUserData(userId).then(userdata => {
      store.dispatch(setVkUserData(userdata.userInfo));
    });
  }

  selectMenuItem(event){
    let menuItems = document.querySelectorAll('.link-user-service');
    for(let i = 0; i < menuItems.length; i++){
      menuItems[i].classList.remove('item-selected');
    }
    event.target.classList.add('item-selected');
  }

  render() {
    return (
      <UserServiceView first_name={this.props.userData.first_name}
                       last_name={this.props.userData.last_name}
                       photo_200={this.props.userData.photo_200}
                       domain={this.props.userData.domain}
                       selectMenuItem={this.selectMenuItem}/>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    userData: state.loginState
  };
};

export default connect(mapStateToProps)(UserServiceContainer);
