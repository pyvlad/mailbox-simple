import React from 'react'

export default () => (
  <article className='content'>
    <header className="email-header">
      <h1>Email</h1>
      <ul className="email-actions">
        <li><button className="email-action">&#128465;</button></li>
        <li><button className="email-action">spam</button></li>
        <li><button className="email-action">send</button></li>
      </ul>
    </header>
    <section className='email-meta'>
      <p>Author (Origin)</p>
      <p>Author (Destination)</p>
      <p><time dateTime='2017-1-3 15:00-0800'>January 3rd</time></p>
      <p>Heading</p>
    </section>
    <section className='email-body'>
      <h1>Hello, world!</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <p>Paragraph 3</p>
    </section>
  </article>
)
