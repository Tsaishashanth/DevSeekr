import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <>
    <div class="navbar">
      <h1>DevSeekr</h1>
    </div>

    {/* first page */}
    <div class="firstpage">
      <div class="textsection">
        <h1>The fastest way to search Stack Overflow <span class="ocean-text">right where you are.</span></h1>
        <p>Powered by the Stack Overflow API, DevSeekr gives you real-time results right inside your workspace. Faster queries, smarter coding, zero context-switching.</p>
      </div>
    </div>

    {/* second section */}

    {/* main section */}
    <div class="navbar">
      <h1>Search</h1>
    </div>
    <div class ="container">
      <div class="search">
        <div class="type">
          <p>Search Questions...</p>
        </div>
        <div class="button">
          <button>Search</button>
        </div>
      </div>

      <div class="contentcontainer">
        <div class = "contentbutton">
          <button>View On Stack Flow</button>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
