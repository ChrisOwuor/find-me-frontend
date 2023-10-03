import React, { useState } from "react";
import axios from "axios";
export default function Find() {
  const [code, setCode] = useState("");
  const [psn, setPsn] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const HandleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .get(`http://localhost:8080/api/find-person/${code}`)
      .then((response) => {
        console.log(response.data);
        setPsn(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h1 className="text-center"> Search for a lost person person</h1>{" "}
      <div className="full flex justify-start p-12">
        <form className="w-3/5 max-[1200px]:w-full ">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Ensure that you use the exact code that was provided when you
                registerd a missing person <br />
                sometimes the person might not have bee found .
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Code
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        id="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="KXGD1432W4"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-start gap-x-6">
            <button
              onClick={(e) => HandleClick(e)}
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className=" p-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {!loaded ? (
          <p>Your result will be displayed here</p>
        ) : (
          <div>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={`http://127.0.0.1:8080${psn[0].image}`}
                alt="img"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Name : {psn[0].name}
            </h3>
            
          </div>
        )}
      </div>{" "}
    </div>
  );
}
