import PropTypes from "prop-types";

const App = () => {
  const items = [
    { name: "T-shirt", size: "M" },
    { name: "Cap", size: "Free" },
    { name: "NoImage", size: "Free" }
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

Item.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string.isRequired
};

export default App;
