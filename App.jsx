import React from "react";
import "./App.css";

function App() {

  const name = "Prince Vats";
  const profession = "MCA Student";
  const hobby = "Badminton";

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const showMessage = true;
  const greeting = showMessage ? "Hello, World!" : "Welcome Back!";

  const list = [
    {
      title: "cricket news",
      url: "https://espncricinfo.com",
      author: "Ankit Mishra",
      num_comments: 2,
      points: 10,
      objectID: 1
    },
    {
      title: "Movies updates",
      url: "https://imdb.com",
      author: "Suraj Kumar",
      num_comments: 4,
      points: 20,
      objectID: 2
    },
    {
      title: "Spotify Music",
      url: "https://spotify.com",
      author: "Kartik Verma",
      num_comments: 1,
      points: 30,
      objectID: 3
    }
  ];

  const products = [
    { name: "Bicycle", price: 5000 },
    { name: "Scooter", price: 500000 },
    { name: "Car", price: 1000000 },
  ];

  return (
    <div className="container">

      <div className="card">
        <h2 className="heading">Task 1</h2>
        <p>Name: {name}</p>
        <p>Profession: {profession}</p>
        <p>Hobby: {hobby}</p>
      </div>

      <div className="card">
        <h2 className="heading">Task 2</h2>
        <p>Date: {currentDate}</p>
        <p>Time: {currentTime}</p>
      </div>

      <div className="card">
        <h2 className="heading">Task 3</h2>
        <h3 className="greeting">{greeting}</h3>
      </div>

      <div className="card">
        <h2 className="heading">Task 4()</h2>
        <table border="1" cellPadding="8" className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Author</th>
              <th>Comments</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.objectID}>
                <td>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </td>
                <td>{item.url}</td>
                <td>{item.author}</td>
                <td>{item.num_comments}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2 className="heading">Task 5(Props)</h2>
        <UserCard name="Prince Vats" age={22} email="prince.vats@gmail.com" />
        <UserCard name="Amit Gupta" age={21} email="amitgupta456@gmail.com" />
        <UserCard name="Rohit Sharma" age={20} email="rohitsharma7899@gmail.com" />
      </div>

      <div className="card">
        <h2 className="heading">Task 6</h2>
        <ProductList items={products} />
      </div>

    </div>
  );
}

function UserCard(props) {
  return (
    <div className="user-card">
      <p><b>Name:</b> {props.name}</p>
      <p><b>Age:</b> {props.age}</p>
      <p><b>Email:</b> {props.email}</p>
    </div>
  );
}

function ProductList({ items }) {
  return (
    <ul className="product-list">
      {items.map((product, index) => (
        <li key={index}>
          {product.name} - ₹{product.price}
        </li>
      ))}
    </ul>
  );
}

export default App;