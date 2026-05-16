function SearchResults({ results }) {
  return (
    <>
      {results.map((item, index) => (
        <div
          key={index}
          className="contentcontainer"
        >
          <p
            dangerouslySetInnerHTML={{
              __html: item.title,
            }}
          ></p>

          <div className="contentbutton">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                View On Stack Overflow
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default SearchResults;