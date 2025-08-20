"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <style>{`
        main {
          font-family: sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }
        div.count-display {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }
        div.buttons {
          display: flex;
          gap: 1rem;
        }
        button {
          padding: 0.5rem 1.5rem;
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
        }
        button.decrement {
          background-color: #ef4444;
        }
        button.decrement:hover {
          background-color: #b91c1c;
        }
        button.increment {
          background-color: #22c55e;
        }
        button.increment:hover {
          background-color: #15803d;
        }
      `}</style>
      <main>
        <h1>Counter</h1>
        <div className="count-display">{count}</div>
        <div className="buttons">
          <button
            onClick={() => setCount(count - 1)}
            className="decrement"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="increment"
          >
            +
          </button>
        </div>
      </main>
    </>
  );
}