// import React, { useEffect, useState } from "react";
import "../App.css";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    },
    {
      id: 2,
      title: "Boost your conversion rate",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    },
    {
      id: 3,
      title: "Boost your conversion rate",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    },
    // More posts...
  ];
  // const [msperson, setMsperson] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/missing-person/")
  //     .then((res) => res.json())
  //     .then((data) => setMsperson(data), setLoading(false));
  // }, []);
  return (
    <div className="main">
      <div className="hero flex justify-center w-full  h-max py-14">
        <div className="w-3/5 ml-24 mt-11 max-[1200px]:w-full max-[1200px]:ml-0 max-[1200px]:p-3 ">
          {" "}
          <h1 className="lg:text-6xl  max-[1200px]:text-3xl font-semibold tracking-tight text-white mb-6 ">
            Free . Secure . Nationawide{" "}
          </h1>
          <p className="text-xl text-white font-semibold pb-4 ">
            "With AI by our side, we strive to bring families back together,
            light up communities, and celebrate the journey to healing.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 align-middle text-center">
            <p className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mt-8">
              Get started
            </p>
            <p className="text-lg font-semibold leading-6 text-white px-8 py-3 inline-block mt-8 ">
              Learn more <span aria-hidden="true">→</span>
            </p>
          </div>
        </div>
      </div>
      <div className="about w-full mt-4 flex justify-center ">
        <div className="w-3/5 ml-24 mt-11 max-[1200px]:w-full max-[1200px]:ml-0 max-[1200px]:p-3 ">
          {" "}
          <h1 className="lg:text-3xl text-center  text-3xl font-semibold tracking-tight text-gray-900 mb-6">
            What is FindMe
          </h1>
          <p className="text-lg text-gray-600 font-semibold pb-4">
            FindMe is an AI based recognition system that aims to resolve
            missing persons cases across the nation using AI. <br /> FindMe
            helps investigators match long-term missing persons with identified
            persons who have been reported seen by other individuals to resolve
            cases and bring resolution to families
          </p>
          <p className="text-lg text-gray-600 font-semibold pb-4">
            At any given time, up to 100,000 persons may be reported missing in
            Kenya with as many as 600,000 reported annually.[1] While many of
            these individuals are found alive and well, some become long-term
            missing persons. At the same time, federal, state and local
            medicolegal death investigators are constantly working to provide
            names to thousands of deceased persons nationwide. Over 11,000 sets
            of unidentified human remains were held in medical examiner and
            coroner offices throughout the U.S. according to the 2018 Census of
            Medical Examiners and Coroners.[2]
          </p>
        </div>{" "}
      </div>
      <div className="success w-full mt-4 flex justify-center ">
        <div className="w-3/5 ml-24 mt-11 max-[1200px]:w-full max-[1200px]:ml-0 max-[1200px]:p-3  ">
          {" "}
          <h1 className="lg:text-3xl text-center  text-3xl font-semibold tracking-tight text-gray-900 ">
            Trusted by creators worldwide
          </h1>
          <div class=" p-14   w-full ">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-24">
              <div className="found text-center rounded-md bg-gray-200 lg:p-8 px-4 py-2  ">
                <p className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  8,000+
                </p>{" "}
                <p className="text-base leading-7 text-gray-600">
                  {" "}
                  Reported Cases
                </p>
              </div>
              <div className="found text-center rounded-md bg-gray-200 lg:p-8  px-4 py-2 ">
                <p className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  3,000+
                </p>{" "}
                <p className="text-base leading-7 text-gray-600">
                  {" "}
                  Resolved Cases
                </p>
              </div>
              <div className="found text-center bg-gray-200 lg:p-8  px-4 py-2  rounded-md">
                <p className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  5,000
                </p>{" "}
                <p className="text-base leading-7 text-gray-600">
                  {" "}
                  Pending Cases
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="usecases w-full mt-4 flex justify-center ">
        <div className="w-3/5 ml-24 mt-11 max-[1200px]:w-full max-[1200px]:ml-0 max-[1200px]:p-3  ">
          {" "}
          <div className=" ">
            <div className="mx-auto max-w-7xl ">
              <div className="">
                <h2 className="lg:text-3xl text-center  text-3xl font-semibold tracking-tight text-gray-900 mb-12">
                  Who Uses FindMe
                </h2>
                <p className="mt-2 mb-4 text-lg leading-8 text-gray-600 text-center">
                  Learn how top governmental organizations use FindMe to solve
                  Missing person cases
                </p>
              </div>
              <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8   sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="flex max-w-xl flex-col items-start justify-between"
                  >
                    <div className="group relative">
                      <h3 className=" text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="footer w-full mt-4 flex justify-center bg-gray-700 rounded-md text-white py-16">
        <div className="w-3/5 ml-24 mt-11 max-[1200px]:w-full max-[1200px]:ml-0 max-[1200px]:p-3 ">
          {" "}
          <div class=" w-full ">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-11 lg:gap-y-24">
              <div className="subscribe text-center ">
                <div className="subscribe">
                  <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="socials"></div>
              </div>
              <div className="partners text-center">
                <h1>Global Partners </h1>
                <ul>
                  <li>
                    <div className="nam">
                      <p>Ministry Of Education</p>
                    </div>
                  </li>
                  <li>Nairobi Hospital</li>
                </ul>
              </div>
              <div className="services text-center">
                <h1>Services</h1>
                <p className="mb-8 text-base">Legal</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
