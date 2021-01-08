// function App() {
//   const greeting = "Hello World";
//   const dom = <h1>{greeting}</h1>;
//   return dom;
// }

function App() {
  return (
    <input
      type="text"
      onClick={() => {
        console.log("I am Changed!");
      }}
    />
  );
}

export default App;
