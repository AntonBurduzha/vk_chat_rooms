import React, {Component} from 'react'

export default class SearchView extends Component {
  render(){
    let self = this;
    let searchedChatData;
    if(this.props.searchedChatData.length > 0){
      searchedChatData = this.props.searchedChatData.map(chatRoom => {
        return (
          <div key={chatRoom.id} className="article-chatroom-list">
            <img className="img-chatroom-list" src={chatRoom.logo} alt="marvel"/>
            <h3
              className="text-chatroom-list"
              onClick={self.props.getCurrentChat}>{chatRoom.name}</h3>
          </div>
        );
      })
    } else {
      if(this.props.searchedChatListLoaded) {
        searchedChatData = <p className="text-search text-center">Пока нет результатов</p>
      } else {
        searchedChatData = <p className="text-search text-center">Вы пока ничего не ввели</p>
      }
    }
    return (
      <div className="col-md-6 container-user-action">
        <div className="article-search">
          <h3 className="title-chatrooms-list title-search-chatrooms-list">Введите название чата:</h3>
          <input
            className="input-search"
            type="text"
            placeholder="Название чата"
            onChange={this.props.getInputedChatNames}
            onKeyPress={this.props.handleEnterKeyPress}/>
          <button className="btn-search" onClick={this.props.getSearchedChatList}>Найти</button>
        </div>
        {searchedChatData}
      </div>
    )
  }
}