import { useState, useEffect } from "react";
import "./App.css";
import cardsData from "./data.json";

function App() {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <h1>Hello World</h1>
        <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4">
          {cardsData.cards.map((card, index) => (
            <div className="col d-flex justify-content-center" key={index}>
              <div
                className="card"
                style={{ maxWidth: "18rem", width: "100%" }}
              >
                <img src={card.img} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
