import React from 'react'

const Footer = () => {

  return (
    <footer className="bg-dark text-light py-3" >
      <p className="text-center">
        My Todos List app using react
      </p>
      <div className='text-center'>
        <p>👨‍💻 Developer Info:</p>
        <dl>
          <dd>Ranjodh Singh</dd>
          <dt><ul className='list-unstyled'>
            <li><a href="https://www.linkedin.com/in/ranjodh-singh-82b900290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>🔗 LinkedIn Profile</a></li>
            <li><a href="https://github.com/ranjodh-s" target='blank'>💻 GitHub Profile</a></li>
          </ul></dt>


        </dl>
      </div>
    </footer>
  )
}

export default Footer
