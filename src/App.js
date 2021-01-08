const App = () => {
  const items = [
    { name: "T-shirt", size: "M" },
    { name: "Cap", size: "Free" },
    { name: "NoImage" }
  ];
  return (
    <div>
      {items.map((item, index) => {
        return <Item name={item.name} size={item.size} key={index}></Item>;
      })}
    </div>
  );
};

const Item = props => {
  return (
    <div>
      This is a {props.name}! This size is {props.size}.
    </div>
  );
};

Item.defaultProps = {
  size: "FREE"
};

export default App;
