import React from 'react'
import {Fragment} from 'react'
import Layout from './Layout'
import Header from './Header'
import Footer from './Footer'
import Advert from './content/Advert'
import MessageFolders from './content/MessageFolders'
import MessageSingle from './content/MessageSingle'
import MessageList from './content/MessageList'
import MessageCreateForm from './content/MessageCreateForm'
import MessageCreateButton from './content/MessageCreateButton'

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
    this.handleMessageCreate = this.handleMessageCreate.bind(this)
    this.handleMessageSend = this.handleMessageSend.bind(this)
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
      viewType: "messageView",
      currentCategory: {},
      currentMessage: this.messages.filter((msg) => (msg.id === messageId))[0]
    })
  }

  handleMessageCreate() {
    this.setState({
      viewType: "messageCreate",
      currentCategory: {},
      currentMessage: {}
    })
  }

  // this is here mostly to imitate backend 
  handleMessageSend(msgData) {
    const msgObj = {
      id: Math.max(...this.messages.map((item)=>item.id)) + 1,
      from: {
        name: "React Programmer",
        address: "react.programmer@example.com"
      },
      to: {
        name: "Unknown",
        address: msgData.recepient
      },
      categoryId: "sent",
      date: (new Date()).toISOString(),
      title: msgData.title,
      body: msgData.body
    }

    // imitate writing to DB
    this.messages.push(msgObj)

    this.setState({
      viewType: "category",
      currentCategory: {
        id: "all",
        name: "All Messages"
      },
      currentMessage: {}
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
    else if (this.state.viewType === "messageView") {
      content = (
        <MessageSingle {...this.state.currentMessage } />
      )
    }
    else if (this.state.viewType === "messageCreate") {
      content = (
        <MessageCreateForm 
          onMessageSend={this.handleMessageSend} 
        />
      )
    }

    // TODO: better separate component styling from layout styling!
    // remove inline style below 
    return (
      <Layout
        header={ <Header /> }
        footer={ <Footer /> }
        leftPane={
          <Fragment>
            <div style={{width: "100%", margin: "10px 0", textAlign: "center"}}>
              <MessageCreateButton 
                handleClick={this.handleMessageCreate}
              />
            </div>
            <div style={{width: "100%", margin: "10px 0"}}>
              <MessageFolders 
                categories={this.categories} 
                onCategorySelect={this.handleCategorySelect}
              />
            </div>
            <div>
              <Advert />
            </div>
          </Fragment> 
        }
        rightPane={content}
      />
    )
  }
}

export default App