// src/App.tsx
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav>
          <div className="logo">
            <h1>Your Brand</h1>
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
          <h1>Welcome to Your Application</h1>
          <p>Build something amazing with AWS Amplify</p>
          <button className="primary-button">Get Started</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Description of your first amazing feature</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Description of your second amazing feature</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>Description of your third amazing feature</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
