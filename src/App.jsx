import "./App.css";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";
function AboutMe() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 700,
        margin: "0 auto 2.8em auto",
        padding: "1.5em 2em 1.2em 2em",
        background: "var(--container-bg)",
        borderRadius: 14,
        boxShadow: "0 2px 12px var(--card-shadow)",
        fontSize: "1.18em",
        lineHeight: 1.7,
        color: "var(--text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2em",
        flexWrap: "wrap",
      }}
    >
      <img
        src="/steph_phot.PNG"
        alt="Stephanie Rendon portrait"
        style={{
          width: 120,
          height: 120,
          objectFit: "cover",
          borderRadius: "50%",
          boxShadow: "0 2px 12px var(--card-shadow)",
          flexShrink: 0,
        }}
      />
      <div style={{ textAlign: "center" }}>
        <h2>About Me</h2>
        For the past 13 years, I've focused on building bridges through strategic communication. As a bilingual professional fluent in English and Spanish, I specialize in crafting compelling narratives that help organizations enhance their visibility and build meaningful community engagement. I thrive on connecting with diverse audiences and telling stories that resonate.
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Stephanie Rendon's Portfolio</h1>
        <AboutMe />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;