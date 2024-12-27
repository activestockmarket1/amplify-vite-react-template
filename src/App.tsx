import './App.css'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useState } from 'react'

function App() {
  const [showAuth, setShowAuth] = useState(false)

  const handleGetStarted = () => {
    setShowAuth(true)
  }

  const formFields = {
    signIn: {
      username: {
        label: 'Email',
        placeholder: 'Enter your email',
      },
    },
    signUp: {
      email: {
        label: 'Email',
        placeholder: 'Enter your email',
        order: 1,
      },
      password: {
        label: 'Password',
        placeholder: 'Enter your password',
        order: 2,
      },
      confirm_password: {
        label: 'Confirm Password',
        order: 3,
      },
    },
  }

  return (
    <div className="app">
      {showAuth ? (
        <Authenticator.Provider>
          <Authenticator formFields={formFields}>
            {({ signOut, user }) => (
              <div className="authenticated-content">
                <header className="header">
                  <nav>
                    <div className="logo">
                      <h1>StockHistory.Ai</h1>
                    </div>
                    <div className="nav-links">
                      <a href="#home">Home</a>
                      <a href="#features">Features</a>
                      <a href="#about">About</a>
                      <a href="#contact">Contact</a>
                      <button 
                        onClick={() => {
                          if (signOut) {
                            signOut();
                            setShowAuth(false);
                          }
                        }} 
                        className="sign-out-button"
                      >
                        Sign Out
                      </button>
                    </div>
                  </nav>
                </header>
                <main className="authenticated-main">
                  <h2>Welcome, {user?.username}!</h2>
                </main>
              </div>
            )}
          </Authenticator>
        </Authenticator.Provider>
      ) : (
        <>
          <header className="header">
            <nav>
              <div className="logo">
                <h1>StockHistory.Ai</h1>
              </div>
              <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </nav>
          </header>

          <main className="main">
            <section className="hero">
              <h1>Welcome to StockHistory.Ai</h1>
              <p>Build something amazing with AWS Amplify</p>
              <button className="primary-button" onClick={handleGetStarted}>
                Get Started
              </button>
            </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18"/>
                <path d="M18.5 8.5l-3.5 3.5-4-4L7 12"/>
              </svg>
            </div>
            <h3>Historical Analysis</h3>
            <p>Access comprehensive historical stock data with advanced analytics and trend visualization to make informed investment decisions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
                <path d="M12 2a10 10 0 0 1 10 10h-10V2z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3>AI-Powered Insights</h3>
            <p>Leverage machine learning algorithms to identify patterns, predict trends, and receive personalized stock recommendations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4"/>
                <path d="M12 18v4"/>
                <path d="M4.93 4.93l2.83 2.83"/>
                <path d="M16.24 16.24l2.83 2.83"/>
                <path d="M2 12h4"/>
                <path d="M18 12h4"/>
                <path d="M4.93 19.07l2.83-2.83"/>
                <path d="M16.24 7.76l2.83-2.83"/>
              </svg>
            </div>
            <h3>Real-Time Monitoring</h3>
            <p>Stay updated with real-time stock prices, market trends, and automated alerts for your watchlist.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
            <div className="footer-content">
              <p>&copy; 2024 StockHistory.Ai. All rights reserved.</p>
              <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#contact">Contact Us</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

export default App