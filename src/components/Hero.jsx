function Hero() {
    return (
        <div className="firstpage">
            <div className="textsection">
                <h1>
                    The fastest way to search stack overflow{" "}
                    <span className="ocean-text">right where you are</span>
                    {/* we use span when we need an inline wrapper (small part of text)*/}
                </h1>
                
                <p>
                    Powered by the stack Overflow API, DevSeekr gives you real-time
                    results right inside your workspace.
                </p>
            </div>
        </div>
    );
}

export default Hero;