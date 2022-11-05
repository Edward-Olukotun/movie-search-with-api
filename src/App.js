import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [endPoint, setEndPoint] = useState("");
  const [container, setContainer] = useState([]);
  const [finalEndPoint, setFinalEndPoint] = useState("");

  const clickHandler = (e) => {
    setEndPoint(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalEndPoint(finalEndPoint);
  };

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "5e3e581014msh29e76e0e097ada5p1e9877jsn7f31553e9ffc",
    //     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    //   },
    // };

    // fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setContainer(data.d);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5e3e581014msh29e76e0e097ada5p1e9877jsn7f31553e9ffc",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data.d);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [endPoint]);

  console.log({ container });

  return (
    <>
      <div className=" max-w-full bg-purple-400">
        <form onSubmit={submitHandler}>
          <div className="flex justify-center ">
            <input
              className="border-solid border-2 border-purple-500 focus:outline-none font-bold text-xl w-40 rounded-lg mx-4 my-4  text-center"
              type="text"
              value={endPoint}
              onChange={clickHandler}
            />

            <button
              className="border-solid border-2 border-purple-500 bg-purple-500 text-white w-40 font-bold text-xl rounded-lg  mx-4 my-4"
              type="submit"
            >
              submit
            </button>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-5">
            {container?.map((items, index) => (
              <div className="boder rounded-md  flex flex-col  " key={index}>
                <div className=" w-30 h-30 md:w-60 md:h-60 ">
                  <img
                    className="object-cover w-30 h-30 md:w-60 md:h-60 px-2 md:px-8 "
                    src={items.i.imageUrl}
                    alt="/"
                  />
                </div>
                <div className="my-3 flex flex-col px-2 md:px-8 font-extrabold text-xl w-30  md:w-60 ">
                  <p className="w-auto h-auto mx-1 my-1">{items.l}</p>
                  <p className="w-auto h-auto mx-1 my-1">Year:{items.y}</p>
                  <p className="w-auto h-auto mx-1 my-1">Staring:{items.s}</p>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
