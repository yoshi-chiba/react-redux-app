// function App() {
//   const greeting = "Hello World";
//   const dom = <h1>{greeting}</h1>;
//   return dom;
// }

// function App() {
//   return (
//     <input
//       type="text"
//       onClick={() => {
//         console.log("I am Changed!");
//       }}
//     />
//   );

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
