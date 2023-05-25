/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Horizon(Technical Fest Website)",
    description:
      "It is a website made by me and my colleague for the technical fest of the college. Participant can register and participate in events. It is responsive for mobile, tablet and pc.",
    url: "https://horizon-iiitvicd.in/",
  },
  {
    title: "Github Users Search",
    description:
      "It is a website that allows the search of Github users using Github API. It fetches data from API and shows relevant graphs for that data. It also authenticates a person using Auth0.",
    url: "https://master--github-users100.netlify.app/",
  },
  {
    title: "Blog Website",
    description:
      "It is a personal blog website that shows all the blogs written. Blogs can be written in the form of text. Technologies used Html, CSS, JavaScript, Node.js, MongoDB, EJS, etc.",
    url: "https://blogkeeper.azurewebsites.net/",
  },
  {
    title: "DBMS based Car Rental System",
    description:
      "It is majorly focused on organizing information, where customers can take cars on rent, and agencies or individuals can rent their cars on the portal. It is a console-based project using MySQL and Java.",
    url: "https://github.com/Perin-Mangukiya/Car_Rental_System",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
        <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
