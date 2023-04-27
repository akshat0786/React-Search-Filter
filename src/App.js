import React, { useState } from "react";
import Data from "./components/Data";

const style = {
  bg: `h-screen w-screen p-20 bg-gradient-to-r from-[#f2709c] to-[#ff9472]`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2 font-sans`,
  container: `bg-slate-100 max-w-[400px] max-h-[600px] m-auto rounded-lg shadow-xl p-4 `,
  li: `p-4 h-[400px] overflow-y-scroll `,
  box: `placeholder:italic placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`,
};

function App() {
  //usestate hook
  const [text, setText] = useState("");

  const handleChange = (e) => {
    // e.preventDefault();
    setText(e.target.value);
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>React Search Filter</h3>
          <input
            placeholder="search for anything..."
            type="text"
            className={style.box}
            value={text}
            onChange={handleChange}
            />
        <div className={style.li}>
          {Data.filter((val) => {
            if (text == "") {
              return val;
            } else if (val.name.toLowerCase().startsWith(text.toLowerCase())) {
              return val;
            }
          }).map((value) => {
            // return <h6>{value.name}</h6>;
            return (
              <ul>
                <li className={style.list}>{value.name}</li>
              </ul>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
