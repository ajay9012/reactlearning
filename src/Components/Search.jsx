import React, { useState, useEffect } from "react";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [arr1,setArr1] =(["red", "green", "blue", "black", "redblue"]);

  return (
    <div style={{ width: "600px", height: "900px", backgroundColor: "green" }}>
      <div>Search</div>
      <input
        placeholder="search here"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
      onClick={()=>{
        
      }}
      >Search</button>
      <div style={{ width: "50%", height: "60%", border: "1px solid red" }}>
        {arr1.map((item, index) => {
            const filterItem = item.filter(()=>{

            })
          return (
            <div key={index} style={{ width: "150px", height: "50px", border:"1px solid yellow" }}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
