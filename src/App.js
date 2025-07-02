import React, { useState } from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const containerRef = useRef(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(
        `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${query}&site=stackoverflow`
      );
      const data = await res.json();
      setResults(data.items || []);
    } catch (error) {
      console.error('API fetch failed:', error);
    }
  };
    useEffect(() => {
  const container = containerRef.current;

  const handleScroll = () => {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      container.classList.add('rotate-animate');
    } else {
      container.classList.remove('rotate-animate');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // optional, in case it's already in view

  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <>
      <div className="navbar">
        <h1>DevSeekr</h1>
      </div>

      {/* first page */}
      <div className="firstpage">
        <div className="textsection">
          <h1>
            The fastest way to search Stack Overflow{' '}
            <span className="ocean-text">right where you are.</span>
          </h1>
          <p>
            Powered by the Stack Overflow API, DevSeekr gives you real-time
            results right inside your workspace. Faster queries, smarter coding,
            zero context-switching.
          </p>
        </div>
      </div>

      {/* demo section in future */}

      {/* search section */}
      <div className="navbar">
        <h1>Search</h1>
      </div>
      <div className="container" ref={containerRef}>
        <div className="container-inner">
        <div className="search">
          <div className="type">
            <input
              type="text"
              placeholder="Search Questions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="button">
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        {/* Results Section */}
        {results.map((item, index) => (
          <div key={index} className="contentcontainer">
            <p dangerouslySetInnerHTML={{ __html: item.title }}></p>
            <div className="contentbutton">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View On Stack Flow</button>
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
      <footer className= "footer">
        <p>© 2025 DevSeekr. All rights reserved.</p>
        <hr />
        <p>Built for developers by Tarigopula Sai Shashanth.</p>
      </footer>
    </>
  );
}

export default App;
