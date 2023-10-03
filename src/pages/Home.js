import React, { useEffect, useState } from "react";

export default function Home() {
    const [msperson, setMsperson] = useState([]);
    const [loading,setLoading] = useState(true)
  useEffect(() => {
    fetch("http://localhost:8080/api/missing-person/")
      .then((res) => res.json())
        .then((data) => setMsperson(data),
        setLoading(false));
  },[]);
  return (
    <div className="main">
      <div className="flex justify-start w-full  h-max">
        <div className="w-2/5 ml-24 mt-11 max-[1200px]:w-full max-[1200px]:ml-0 max-[1200px]:p-3">
          {" "}
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            Find Me app is Finally Here
          </h1>
          <p className="text-xl text-gray-500 font-semibold pb-4 border-b-2">
            "With AI by our side, we strive to bring families back together,
            light up communities, and celebrate the journey to healing. Every
            life is a story worth finding, and through the fusion of human
            determination and artificial intelligence, we're dedicated to
            ensuring no one remains lost or forgotten. <br />
            Together, We Can Make a Difference"{" "}
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-6 align-middle">
            <p className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mt-8">
              Get started
            </p>
            <p className="text-lg font-semibold leading-6 text-gray-900 px-8 py-3 inline-block mt-8 ">
              Learn more <span aria-hidden="true">→</span>
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="missing-persons w-full mt-4 ">
        <div className="missing ml-20 max-[1200px]:ml-0">
          <div className="header flex justify-between sticky top-0 bg-white h-[50px] ">
            <h1 className="text-3xl underline font-semibold tracking-tight  text-gray-900 max-[1200px]:ml-4">
              Missing Persons
            </h1>
            <div className="actions"></div>
          </div>

          <div className="people">
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  { loading ? <p>Loading ....</p> : msperson.map((psn, index) => (
                    <div key={index}>
                      <div className="h-[248px]  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-4 xl:aspect-w-7">
                        <img
                          loading="lazy"
                          src={`http://127.0.0.1:8080/${psn.image}`}
                          alt="img"
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">
                        Name : {psn.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-gray-700">
                        Age : {psn.age} years old
                      </p>
                      <p className="mt-1 text-sm  text-gray-700">
                        {" "}
                        <span className="font-medium"> Description</span> : {psn.description.slice(0,30)}
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-700">
                        {" "}
                        Location : {psn.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer bg-slate-500 h-[250px] w-full">


          </div>
        </div>
      </div>
    </div>
  );
}
