import Circle from "./shapes/Circle";
import Rectangle from "./shapes/Rectangle";
import Triangle from "./shapes/Triangle";

function App() {
  return (
    <section
      style={{
        marginTop: "2rem",
        marginLeft: "2rem",
      }}
    >
      <header>
        <h1 style={{ fontSize: "2rem", marginBottom: "0" }}>
          Check out these cool shapes!
        </h1>
        <p
          style={{
            marginTop: ".2rem",
            fontSize: "1rem",
            color: "grey",
            fontStyle: "italic",
          }}
        >
          The color on hover is decided based on the input, if not provided on
          the perimeter.
        </p>
      </header>
      <main
        style={{
          background: "white",
          display: "flex",
          gap: "5rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        <Rectangle width={200} height={100} />
        <Triangle sideLength={100} />
        <Circle radius={50} />
      </main>
    </section>
  );
}

export default App;
