import './App.css'
import Logo from './assets/logo.svg'
import Devices from './assets/illustration-devices.svg'


function App() {

  return (
    <>
      <header>
        <nav>
          <img src={Logo} alt="" />

          <div className="nav-list">
            <ul>
              <li>Product</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Login</li>
            </ul>
          </div>
        </nav>
      </header>
      
      <div className="box"></div>
      <main>
        <div className="left">
            <div className="left-text">
               <p> <span>NEW</span> MONOGRAPH DASHBOARD</p>
               <h1>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
                <h3>Project planning and time tracking for agile teams.</h3>
            </div>

            <div className="left-buttons">
              <button id="demo">
                SCHEDULE A DEMO
              </button>

              <button id="preview">
                  TO SEE A PREVIEW
              </button>
            </div>
        </div>

        <div className="right">
            <div className="container">
              <img src={Devices} alt="devices" />
            </div>
        </div>

      </main>
    </>
  )
}

export default App
