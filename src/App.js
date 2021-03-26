import './App.css';

function App() {
  const products = [
    { name: 'photoshop', price: '$99.99' },
    { name: 'illustrator', price: '$89.99' },
    { name: 'premire pro', price: '$199.99' },
    { name: 'lighthouse', price: '$59.99' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    margin: '5px',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '225px',
    width: '225px',
    float: 'left',
    color: 'black',
    display: 'block'
  }
  const { name, price } = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h5>{name}</h5>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}

export default App;
