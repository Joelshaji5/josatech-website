import Image from 'next/image'
import "../app/Style/CommingSoon.css"

export default function Home() {
  return (
  <div>
  <div className="card">
        <div className="header">
          <div className="logo">
          <img src='./logoJosaTech.png' className='LogoTest'></img>
          </div>
          <div className="social">
            {/* <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/arkn98/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a> */}
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you&apos;re curious.</p>
          </div>
          <a href="mailto:josatechsolution@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="/" target="_blank" rel="noopener noreferrer">Josatech Solution</a> </span>
        </div>
      </div>

  </div>
  )
}
