/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import avatar from "../assets/user.jpeg";
import logo from "../assets/logo.svg";
import background from "../assets/bg.jpg";
import "../App.css";

function Task1() {
  const menus = [
    {
      url: "/task1",
      title: "Reports",
    },
    {
      url: "/task2",
      title: "Users",
    },
    {
      url: "/",
      title: "Teams",
    },
    {
      url: "/",
      title: "Roles",
    },
  ];

  const cards = [
    {
      icon: faCircleQuestion,
      color: "text-comparative-pink",
      title: "Technology Stack",
      content:
        "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights",
    },
    {
      icon: faCircleQuestion,
      color: "text-comparative-blue",
      title: "Reports",
      content:
        "The report consists sections (metrics) showing the comparisons between two periods",
    },
    {
      icon: faCircleQuestion,
      color: "text-comparative-green",
      title: "Account",
      content:
        "Here's everything you need to know: how to invite new team members, accept invite, set up notifications and more",
    },
    {
      icon: faCircleQuestion,
      color: "text-comparative-orange",
      title: "Features and use cases",
      content:
        "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights",
    },
    {
      icon: faCircleQuestion,
      color: "text-comparative-yellow",
      title: "FAQs",
      content:
        "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights",
    },
  ];

  const mostViewed = [
    {
      title: "Metrics definition",
      content:
        "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights",
    },
    {
      title: "Overview",
      content:
        "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights",
    },
    {
      title: "Visualization section",
      content:
        "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights",
    },
    {
      title: "Metrics definition",
      content:
        "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights",
    },
    {
      title: "Overview",
      content:
        "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights",
    },
    {
      title: "Visualization section",
      content:
        "In Comparative, we are building a product that allows the effortless turn the raw data into meaningful insights",
    },
  ];

  const techSupports = [
    {
      icon: faCircleQuestion,
      color: "text-comparative-pink",
      title: "Technology Support",
      content: "Contact our support team.",
    },
    {
      icon: faCircleQuestion,
      color: "text-comparative-green",
      title: "Analytical Support",
      content: "Contact our support team.",
    },
    {
      icon: faCircleQuestion,
      color: "text-comparative-orange",
      title: "Admin Support",
      content: "Contact our support team.",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const onClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="rounded-[60px] overflow-hidden bg-comparative-grey">
      <nav className=" border-gray-200 px-6 sm:px-4 py-2.5  bg-comparative-primary">
        <div className="container flex flex-wrap justify-between items-center mx-auto ">
          <div className="flex">
            <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            </a>
          </div>

          <div className="flex md:order-3">
            <div className="flex items-center bg-black/50 border border-comparative-secondary rounded-full px-2 py-1 text-white">
              Nazariy Pankiv
              <img
                src={avatar}
                alt=""
                className="rounded-full w-8 h-8 border ml-2 border-comparative-secondary"
              />
            </div>
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
            } w-full md:flex-1 md:flex md:w-auto md:order-1 justify-between`}
          >
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
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
            </ul>
            <ul className="hidden md:flex flex-col mx-3 items-center p-1 rounded-lg border border-gray-100 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 bg-comparative-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="text-comparative-secondary">
                Press{" "}
                <span className="border p-1 rounded border-comparative-secondary">
                  Cmd+K
                </span>{" "}
                for commands
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="text-white"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section
        className={`relative flex flex-col justify-center text-center text-white py-8 overflow-hidden`}
      >
        <div className="absolute inset-0 h-[450px] overflow-hidden">
          <img
            src={background}
            alt="bg"
            className="object-cover absolute right-0 top-0 bottom-0 w-6/12 h-full "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-comparative-primary via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-comparative-primary via-comparative-primary  to-transparent" />
          <div className="absolute left-1/2 top-[400px] bg-comparative-grey  rounded-full w-[1200vw] h-[1200vw] -translate-x-1/2 border" />
        </div>
        <h1 className="text-4xl z-10">
          Hi! How can we help <br /> you today?
        </h1>
        <label className="relative block w-[350px] md:w-[500px] mx-auto text-comparative-secondary mt-6 mb-24 max-w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            className="bg-white w-full placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-10 pr-4 focus:outline-none"
            placeholder="Search Comparative Knowledge Base"
            type="text"
          />
        </label>
        <ul className="container mx-auto flex flex-wrap gap-8 justify-center p-8 md:p-0">
          {cards.map((card, index) => (
            <li
              key={`card2_${index}`}
              className="flex flex-col rounded-2xl max-w-full bg-white border basis-[400px] items-center p-6 drop-shadow-md min-h-[250px]"
            >
              <FontAwesomeIcon
                icon={card.icon}
                className={`${card.color} w-16 h-16 mb-2`}
              />
              <h2 className="text-black font-bold">{card.title}</h2>
              <span className="text-comparative-secondary">{card.content}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center py-12">
        <h1 className="text-3xl font-bold mb-2">Most viewed</h1>
        <span className="text-comparative-secondary">
          In Comparative, we are building a product that allows the effortless{" "}
          <br />
          turn the raw data into meaningful insights
        </span>
        <ul className="flex flex-wrap gap-4 my-6 justify-center">
          {cards.map((card, index) => (
            <li
              key={`card_${index}`}
              className={`${
                !index ? "bg-comparative-purple text-white rounded-full" : ""
              } py-1 px-4`}
            >
              {card.title}
            </li>
          ))}
        </ul>
        <ul className="container mx-auto flex flex-wrap gap-8 justify-center p-8 md:p-0">
          {mostViewed.map((card, index) => (
            <li
              key={`card_${index}`}
              className="flex flex-col rounded-2xl max-w-full text-center bg-white border basis-[400px] items-center p-6 drop-shadow-md min-h-[150px]"
            >
              <h2 className="text-black font-bold">{card.title}</h2>
              <span className="text-comparative-secondary">{card.content}</span>
            </li>
          ))}
        </ul>
      </section>
      <footer className="flex flex-col text-center items-center p-12 bg-comparative-primary">
        <div className="container mx-auto ">
          <h1 className="text-white text-3xl font-bold mb-2">Get in touch</h1>
          <span className="text-comparative-secondary">
            In Comparative, we are building a product that allows the effortless{" "}
            <br />
            turn the raw data into meaningful insights
          </span>
          <ul className="flex flex-wrap gap-8 justify-center p-8">
            {techSupports.map((card, index) => (
              <li className="flex  gap-3" key={`tech_${index}`}>
                <FontAwesomeIcon
                  icon={card.icon}
                  className={`${card.color} w-16 h-16`}
                />
                <div className="flex flex-col text-left justify-center">
                  <h2 className="text-white text-lg">{card.title}</h2>
                  <span className="text-comparative-secondary">
                    <a href="#" className="underline text-comparative-blue">
                      {card.content}
                    </a>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Task1;
