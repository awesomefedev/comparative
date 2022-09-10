/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/user.jpeg";
import background from "../assets/bg.jpg";
import blogImage from "../assets/blog.png";
import wombo from "../assets/wombo.png";
import mino from "../assets/mino.png";
import productHunt from "../assets/product-hunt.png";
import "../App.css";
import { faSquareFacebook, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task2() {
  const menus = [
    {
      url: "/task1",
      title: "Blog",
    },
    {
      url: "/task3",
      title: "Case Studies",
    },
  ];

  const blogs = Array(6).fill({
    image: blogImage,
    title:
      "Inclusion is at the Heart of Comparative, from Product Development to Company Culture",
    content:
      "Comparative's mission is to democratize data. We believe data should be inclusive, and so should our company. Comparative's automated analytics platform delivers daily and weekly reports so you can analyze your entire dataset in just a few clicks.",
    user: {
      icon: avatar,
      name: "Brielle Perry",
    },
    createdAt: "Apr 11, 2022 • 3 min read",
  });

  const companies = [
    {
      name: "mino",
      icon: mino,
    },
    {
      name: "wombo",
      icon: wombo,
    },
    {
      name: "productHunt",
      icon: productHunt,
    },
    {
      name: "productHunt",
      icon: productHunt,
    },
  ];

  const links = [
    {
      url: "#",
      title: "Product",
    },
    {
      url: "#",
      title: "About",
    },
    {
      url: "#",
      title: "Blog",
    },
    {
      url: "#",
      title: "Case Studies",
    },
    {
      url: "#",
      title: "Careers",
    },
  ];

  const socials = [
    {
      url: "/",
      icon: faLinkedinIn,
    },{
      url: "/",
      icon: faSquareFacebook,
    },{
      url: "/",
      icon: faTwitter,
    },{
      url: "/",
      icon: faInstagram,
    },
  ];
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="rounded-[60px] overflow-hidden bg-comparative-grey">
      <nav className=" border-gray-200 px-6 sm:px-4 py-2.5  bg-comparative-violet">
        <div className="container flex flex-wrap justify-between items-center mx-auto ">
          <div className="flex">
            <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
              <span className="text-white text-3xl">comparative</span>
            </a>
          </div>

          <div className="flex md:order-3">
            <button className="hidden md:block rounded-lg text-sm border-white border text-white hover:opacity-50 py-2 px-4">
              Sign In
            </button>
            <button className="hidden md:block rounded-lg text-sm bg-white border text-black py-2 hover:opacity-50 px-4 ml-2">
              Schedule a Demo
            </button>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              onClick={onClick}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              !isNavOpen ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1 justify-between`}
          >
            <ul className="flex flex-col p-4 mt-4 items-center rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              {menus.map((menu, index) => (
                <li key={`key_${index}`}>
                  <a
                    href={menu.url}
                    className="block py-2 pr-4 pl-3 text-comparative-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <li className={`${!isNavOpen ? "hidden" : ""}`}>
                <button className="rounded-lg text-sm border-white border hover:opacity-50 text-white py-2 px-4 my-2">
                  Sign In
                </button>
              </li>
              <li className={`${!isNavOpen ? "hidden" : ""}`}>
                <button className="rounded-lg text-sm bg-white border hover:opacity-50 text-black py-2 px-4 my-2">
                  Schedule a Demo
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section
        className={`relative flex flex-col h-[300px] justify-center text-center text-white pb-4 overflow-hidden`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={background}
            alt="bg"
            className="object-cover absolute right-0 top-0 bottom-0 w-6/12 h-full "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-comparative-violet via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-comparative-violet via-comparative-violet  to-transparent" />
          <div className="absolute left-1/2 top-[250px] bg-comparative-grey  rounded-full w-[800vw] h-[800vw] -translate-x-1/2 border" />
        </div>
        <div className="z-10 flex flex-col items-center pb-8">
          <h1 className="text-3xl md:text-6xl p-1 text-transparent bg-clip-text bg-gradient-to-r from-comparative-pink to-comparative-blue">
            Comparative Blog
          </h1>
          <span className="text-white mt-1 mb-4 text-lg">
            The Power of a Data
          </span>
          <button className="rounded-lg text-sm text-white border hover:opacity-50 border-white py-2 px-4 ml-2 w-fit ">
            Subscribe
          </button>
        </div>
      </section>
      <section className="py-12 pb-32">
        <ul className="container mx-auto flex flex-wrap gap-8 justify-center">
          {blogs.map((blog, index) => (
            <li
              key={`card2_${index}`}
              className="flex flex-col max-w-full basis-[350px] min-h-[250px] "
            >
              <img src={blog.image} alt="blog" className="rounded-md " />
              <span className="text-comparative-blue text-sm my-2 font-bold">
                Blog
              </span>
              <h2 className="text-black text-2xl font-bold">{blog.title}</h2>
              <span className="text-comparative-secondary my-2 line-clamp-3">
                {blog.content}
              </span>
              <div className="flex gap-2 items-center">
                <img
                  src={blog.user.icon}
                  alt=""
                  className="rounded-full w-10 h-10 border border-comparative-secondary"
                />
                <div className="flex flex-col">
                  <span className="text-comparative-blue">
                    {blog.user.name}
                  </span>
                  <span className="text-sm text-comparative-secondary">
                    {blog.createdAt}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="flex relative flex-col pt-16 pb-12 md:pt-36 md:pb-24 bg-comparative-violet px-4 md:px-0">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={background}
            alt="bg"
            className="object-cover absolute right-0 top-0 bottom-0 w-6/12 h-full "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-comparative-violet via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-comparative-violet via-comparative-violet  to-transparent" />
        </div>
        <div className="container mx-auto z-10">
          <h1 className="text-white text-3xl md:text-6xl md:leading-[72px] text-transparent bg-clip-text bg-gradient-to-r from-comparative-pink to-comparative-blue">
            Join other leading companies automating their data analysis with
            Comparative
          </h1>
          <div className="flex flex-wrap justify-between my-16 gap-4">
            <button className="bg-white text-black py-4 px-8 rounded-2xl hover:opacity-50">
              Schedule a Demo
            </button>
            <div className="flex">
              <ul className="flex flex-wrap gap-10 items-center">
                {companies.map((company, index) => (
                  <li key={`company_${index}`}>
                    <img src={company.icon} alt="company" className="w-36" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a href="/" className="flex items-center w-fit">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="text-white text-3xl">comparative</span>
          </a>
          <div className="flex flex-wrap justify-between">
            <ul className="flex flex-wrap gap-8 my-12">
              {links.map((link, index) => (
                <li className="flex  gap-3" key={`tech_${index}`}>
                  <a
                    href={link.url}
                    className="text-comparative-secondary hover:text-white"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-6 my-12">
              {socials.map((link, index) => (
                <li className="flex  gap-3" key={`social_${index}`}>
                  <a
                    href={link.url}
                    className="text-comparative-secondary hover:text-white"
                  >
                    <FontAwesomeIcon icon={link.icon} className="text-2xl"/>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <span className="text-comparative-secondary">@ 2022 Comparative</span>
        </div>
      </footer>
    </div>
  );
}

export default Task2;
