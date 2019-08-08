import React from 'react'
import {Fragment} from 'react'
import Layout from './Layout'
import Header from './Header'
import Footer from './Footer'
import Advert from './content/Advert'
import MessageFolders from './content/MessageFolders'
import MessageSingle from './content/MessageSingle'
import MessageList from './content/MessageList'

import mockData from './data'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.categories = mockData.categories // categories aren't supposed to change
    this.messages = mockData.messages     // imitate DB store
    this.state = {
      viewType: "category",
      currentCategory: {
        id: "all",
        name: "All Messages"
      },
      currentMessage: {}
    }
    this.getMessagesByCategory = this.getMessagesByCategory.bind(this)
    this.handleCategorySelect = this.handleCategorySelect.bind(this)
    this.handleMessageSelect = this.handleMessageSelect.bind(this)
  }

  // This method should extract messages from DB
  getMessagesByCategory(categoryId) {
    if (categoryId === "all") {
      return this.messages
    }
    return this.messages.filter(msg => msg.categoryId === categoryId)
  }

  handleCategorySelect(categoryId) {
    this.setState({
      viewType: "category",
      currentCategory: this.categories.filter((cat) => (cat.id === categoryId))[0],
      currentMessage: {}
    })
  }

  handleMessageSelect(messageId) {
    this.setState({
      viewType: "message",
      currentCategory: {},
      currentMessage: this.messages.filter((msg) => (msg.id === messageId))[0]
    })
  }

  // TODO: use router to dispatch the views
  render() {
    let content

    if (this.state.viewType === "category") {
      let {name, id} = this.state.currentCategory
      let messages = this.getMessagesByCategory(id) // TODO: is this OK in render?
      content = (
        <MessageList 
          categoryName={name}
          messages={messages}
          onMessageSelect={this.handleMessageSelect}
        />
      )
    } 
    else if (this.state.viewType === "message") {
      content = (
        <MessageSingle {...this.state.currentMessage } />
      )
    }

    return (
      <Layout
        header={ <Header /> }
        footer={ <Footer /> }
        leftPane={
          <Fragment>
            <MessageFolders 
              categories={this.categories} 
              onCategorySelect={this.handleCategorySelect}
            />
            <Advert />
          </Fragment> 
        }
        rightPane={content}
      />
    )
  }
}

export default App