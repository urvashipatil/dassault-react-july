import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log("async-await data", data);
  }

  useEffect(() => {
    console.log("useEffect gets called on every render");
    return () => {
      console.log("cleanup 3 is done");
    };
  });

  //It will get called only once- mount
  useEffect(() => {
    console.log("useEffect gets called only once");
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("data", data);
    //   });

    // getData();
    function handleResize(e) {
      const { width, height } = document.body.getBoundingClientRect();
      console.log("height-width", height, width);
    }

    window.addEventListener("resize", handleResize);

    let interv = setInterval(() => {
      console.log("Call api");
    }, 1000);

    return () => {
      console.log("cleanup 2 is done");
      clearInterval(interv);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("useEffect gets called when counter changes");
    getData();
    return () => {
      console.log("cleanup2 is done");
    };
  }, [counter]);

  const increment = function () {
    setCounter(counter + 1);
    // console.log(counter);
  };
  const decrement = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <>
      <div>
        <h1>Counter</h1>
      </div>
      <h2>{counter}</h2>
      <span>
        <input type="button" value="+" onClick={increment} />
      </span>
      <span>
        <input type="button" value="-" onClick={decrement} />
      </span>
    </>
  );
}
