import { useRef, useState } from "react";

import "./styles/App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";

import useScrollAnimation from "./hooks/useScrollAnimation";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const containerRef = useRef(null);

  useScrollAnimation(containerRef);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(
        `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${query}&site=stackoverflow`
      );

      const data = await res.json();

      setResults(data.items || []);
    } catch (error) {
      console.error(
        "API fetch failed:",
        error
      );
    }
  };

  return (
    <>
      <Navbar title="DevSeekr" />

      <Hero />

      <Navbar title="Search" />

      <div
        className="container"
        ref={containerRef}
      >
        <div className="container-inner">
          <SearchBox
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
          />

          <SearchResults
            results={results}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;