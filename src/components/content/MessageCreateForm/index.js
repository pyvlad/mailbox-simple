import React from 'react'
import styles from './styles.css'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recepient: '',
      title: '',
      body: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    this.props.onMessageSend(this.state)
  }

  render() {
    return (
      <div className={styles['form-container']}>
        <form action='' method='get' className={styles['form']} onSubmit={this.handleSubmit}>
          <header className={styles['form-header']}>
            <h1>New Message</h1>
          </header>
          <div className={styles['form-row']}>
            <label htmlFor='new-msg-destination'>
              Recepient Email
            </label>
            <input 
              type='email' 
              id='new-msg-destination' 
              name='destination' 
              placeholder='bob@example.com' 
              onChange={this.handleInputChange}
            />
          </div>
          <div className={styles['form-row']}>
            <label htmlFor='new-msg-title'>
              Message Title
            </label>
            <input 
              type='text' 
              id='new-msg-title' 
              name='title' 
              onChange={this.handleInputChange}
            />
          </div>
          <div className={styles['form-row']}>
            <label htmlFor='new-msg-body'>
              Message Body
            </label>
            <textarea 
              id='new-msg-body' 
              name='body' 
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-row'>
            <button className={styles["submit-button"]}>Send</button>
          </div>
        </form>
      </div>
    )
  }
}