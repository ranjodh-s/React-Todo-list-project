import React from 'react'

const About = () => {
  return (
    <div className='p-3'>
      <h3>About This Todo App</h3>
      <p>
        This is a simple yet effective React-based Todo App. The app allows users to add, view, and delete tasks in a clean, responsive UI. All todo items are stored in the browser's local storage, ensuring that your tasks persist even after refreshing the page.
        The project showcases core React concepts like components, state management, side effects, and routing, making it a great example of how to build small-scale yet real-world React applications.</p>
      <h4>⚙️ Tech Stack </h4>
      <ul>
        <li>Frontend: React.js</li>
        <li>Routing: React Router DOM</li>
        <li>State Management: React Hooks (useState, useEffect)</li>
        <li>Storage: Browser localStorage</li>
      </ul>
      <h4>🚀 Features</h4>
      <ul>
        <li>Add and delete todo items</li>
        <li>Data persistence using localStorage</li>
        <li>Responsive design using Bootstrap</li>
        <li>Dynamic list rendering</li>
        <li>Routing via React Router</li>
      </ul>
      <h4>👨‍💻 Developer Info</h4>
      <dl>
        <dd>Ranjodh Singh</dd>
        <dt><ul>
          <li><a href="https://www.linkedin.com/in/ranjodh-singh-82b900290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>🔗 LinkedIn Profile</a></li>
          <li><a href="https://github.com/ranjodh-s" target='blank'>💻 GitHub Profile</a></li>
        </ul></dt>


      </dl>

    </div>
  )
}

export default About
