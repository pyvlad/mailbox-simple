import React from 'react'

export default () => (
  <div className="page-content">
    <div className="left-pane">
      <nav className="mail-nav">
        <header>Folders</header>
        <ul>
          <li><a href='#'>Inbox</a></li>
          <li><a href='#'>Sent</a></li>
          <li><a href='#'>Spam</a></li>
        </ul>
      </nav>
      <aside className='advert'>
        <h1>Fake Ad</h1>
      </aside>
    </div>

    <div className="right-pane">
      <div className="mail-list">
        <header>
          <h1>Inbox</h1>
          <p>Your incoming email messages are shown here.</p>
        </header>
        <ul>
          <li><div>Incoming Message 1</div></li>
          <li><div>Incoming Message 2</div></li>
          <li><div>Incoming Message 3</div></li>
        </ul>
      </div>
    </div>
  </div>
)