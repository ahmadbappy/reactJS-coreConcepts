import { useEffect, useState } from "react";
import "./App.css";


// render function
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Users></Users>

      </header>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>- Dynamic Users -</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  // Basic way ...
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // const handleDecrease = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }

  // Intermediate way ...
  // const handleIncrease = () => setCount(count + 1)
  // const handleDecrease = () => setCount(count - 1)


  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button> {/*advanced way*/}
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button> {/*advanced way*/}
    </div>
  )
}

export default App;




// ------------------------------***********------------------------------------
//  render function ....
// function App() {
//   const girls = [
//     { name: 'Shochtika', age: 29, status: 'Marraied' },
//     { name: 'Poroma', age: 35, status: 'Widowed' },
//     { name: 'Oishorjo', age: 21, status: 'single' },
//     { name: 'Dipa', age: 24, status: 'Open-minded' },
//     { name: 'Nipa', age: 42, status: 'Aunte' },
//     { name: 'Dhvani', age: 22, status: 'Crush' },
//   ];
//   return (
//     <div className="App">
//       <header className="App-header">

//         {/* {
//           girls.map(option => <DateGirls girl={option}></DateGirls>)
//         } */}
// {/* 
// //         <Counter></Counter>
// //       </header>

// //     </div> */}
// //   )
// // }

// {/* // component ....
// // function DateGirls(props) { */}
//   const girlsProfile = {
//     margin: '5px',
//     border: '1px solid orange',
//     borderRadius: '5px',
//     backgroundColor: 'pink',
//     height: '300px',
//     width: '250px',
//     float: 'left',
//     color: 'black',
//     display: 'block'
//   }
//   const buttonDesign = {
//     borderRadius: '20px',
//     backgroundColor: 'lemon'
//   }
//   const { name, age, status } = props.girl;
//   return (
//     <div style={girlsProfile}>
//       <h2>{name}</h2>
//       <h5>{age}</h5>
//       <p>{status}</p>
//       <button style={buttonDesign}>Ask for a date</button>
//     </div>
//   )
// }
// ----------------------------------------******-------------------------------




// import './App.css';

// function App() {
//   const products = [
//     { name: 'photoshop ', price: '$99.99' },
//     { name: 'illustrator ', price: '$89.99' },
//     { name: 'premire pro ', price: '$199.99' },
//     { name: 'lighthouse ', price: '$59.99' },
//     { name: 'Acrobat ', price: '$49.99' },
//   ];

//   // const heros = ['Alom', 'balam', 'kalam', 'salam', 'aslam'];

//   // const productNames = products.map(product => product.name);
//   // console.log(productNames);
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <Product name={products[0].name} price={products[0].price}></Product> */}
//         {/* <ul>
//           {
//             heros.map(hero => <li>{hero}</li>)
//           }
//           {
//             products.map(product => <li>{productNames}</li>)
//           } 
//         </ul>*/}
//         {
//           products.map(pd => <Product product={pd}></Product>)
//         }
//         {/* <Product product={products[0]}></Product>
//         <Product product={products[1]}></Product>
//         <Product product={products[2]}></Product>
//         <Product product={products[3]}></Product> */}
//       </header>
//     </div>
//   );
// }

// function Product(props) {
//   const productStyle = {
//     margin: '5px',
//     border: '1px solid gray',
//     borderRadius: '5px',
//     backgroundColor: 'lightgray',
//     height: '225px',
//     width: '225px',
//     float: 'left',
//     color: 'black',
//     display: 'block'
//   }
//   const { name, price } = props.product;
//   // console.log(name, price);
//   return (
//     <div style={productStyle}>
//       <h5>{name}</h5>
//       <h3>{price}</h3>
//       <button>Buy now</button>
//     </div>
//   )
// }

// export default App;
