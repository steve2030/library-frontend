import React from "react";

// Import images from the local 'images' folder
import book1 from "./images/book1.jpeg";
import book2 from "./images/book2.png";
import book3 from "./images/book3.jpeg";

const App = () => {
  const books = [
    { 
      id: 1, 
      title: "Farm Fresh Initiative", 
      author: "Joel Munyao", 
      image: book1 
    },
    { 
      id: 2, 
      title: "Cloud Native Technologies", 
      author: "Stephen Wambua", 
      image: book2 
    },
    { 
      id: 3, 
      title: "The Kubernetses Simplfoed", 
      author: "Joseph Njuguna", 
      image: book3 
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Book List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {books.map((book) => (
          <li 
            key={book.id} 
            style={{
              display: "flex", 
              alignItems: "center", 
              marginBottom: "15px", 
              background: "#fff", 
              padding: "10px", 
              borderRadius: "8px", 
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }}
          >
            <img 
              src={book.image} 
              alt={`${book.title} cover`} 
              style={{ width: "50px", height: "50px", borderRadius: "4px", marginRight: "15px" }} 
            />
            <div>
              <strong>{book.title}</strong> <br />
              <small>by {book.author}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
