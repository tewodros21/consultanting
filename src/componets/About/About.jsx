import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { userInfo } from "../data/data";

function About(props) {
  const [data, setData] = useState(userInfo);
  return (
    <div className="flex justify-center items-center flex-col space-y-10">
      {data.map((datas) => (
        <div
          className="bg-green-500 w-2/4 justify-center rounded-md"
          key={datas.id}
        >
          <div className="flex justify-around items-center">
            <div>
              <img
                className="w-36 h-36 rounded"
                src={datas.imgUrl}
                alt={datas.name}
              />
            </div>
            <div>
              <h1>{datas.name}</h1>
              <h2>{datas.title}</h2>
            </div>
            <div className="text-white font-bold cursor-pointer">
              <Link to={`/detail/${datas.id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
