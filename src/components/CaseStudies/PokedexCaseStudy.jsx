import React from "react";

export const PokedexCaseStudy = () => {


  return (

    <div class="body">
      <div class="navbar">
        <a href="http://michael-cillo.com">Back to Michael-Cillo.com</a>
        <h1 class="title">Pokedex Case Study</h1>
      </div>
      <div class="container">

        <div class="overviewContainer">
          <div class="overview">
            <h3>Overview</h3>
            <p>The Pokedex Web Application is a web app that was developed using HTML,CSS, and JavaScript.This app will
              provide
              users with information about Pokemon. Users will be able to view a list of all Pokemon as well as search for a
              particular Pokemon using the search function. The user can also select a Pokemon and view more detailed
              information
              about the Pokemon.</p>

            <h3>Purpose &amp; Context</h3>
            <p>Pokedex was the first of many projects that I built as a part of my Carer Foundry Full Stack Web Development
              course. The purpose of this particular project was to learn some of the basics of HTML, CSS, and JavaScript
              while
              developing a fully functioning web app.</p>
            <h3>Objective</h3>
            <p>My objective with this project was to build a simple web apt that I could use in my portfolio to demonstrate
              my
              initial understanding of web app development. The problem I set out to solve was how to build a web
              application
              that
              could acess data from an external API and display that data to a user.</p>
          </div>
        </div>
        <div class="approach">
          <h3>Approach</h3>
          <div class="javaScriptContainer">
            <div class="javaScript">
              <h5>JavaScript</h5>
              <p>To begin this project I needed to learn the fundamentals of JavaScript. I began by learning how to work
                with
                objects, arrays, conditionals and loops. With this new knowledge I began working with functions and learning
                the
                principals of Functional Programming and its comparison with Object Oriented Programming. I finished with
                learning
                how to work with external APIs to retreive information and how to display that information to the user.</p>
            </div>
          </div>
          <div class="htmlContainer">
            <div class="html">
              <h5>HTML</h5>
              <p>While I was working with the JavaScript portion of this project I was also working with the HTML aspect.
                Getting
                information from the API is one thing, displaying it to the user in a useful manner was just as important. I
                learned
                how to work with the Document Object Model within JavaScript in order to render the information from the API
                into
                the HTML of the webpage for the user to view and interact with. </p>
            </div>
          </div>

          <div class="cssContainer">
            <div class="css">
              <h5>Cascading Style Sheets</h5>
              <p>Once I had the web app functioning properly I needed to make it look pleasing to the user. For this I
                learned
                how
                to use the Bootstrap frame work to create a clean User Interface. With this knowledge I also added the Modal
                that
                would be used to display the information for the selected Pokemon to the user. To further add to the users
                experience I utilized CSS to add styling to the app as well as making the app responsive to different sized
                screens.
              </p>
            </div>
          </div>
        </div>
        <div class="challengesContainer">

          <div class="challenges">
            <h3>Challenges</h3>
            <p>This was the first web application that I created and with that came several challenges. The biggest
              challenge I faced was balancing a full time job and a family while also trying to learn the basics of the
              languages I used
              to create this app.</p>
            <h3>Duration</h3>
            <p>The development of this app took me a little over two months from start to finish. The length of this project
              stemmed from finding the balance between work and learning and understanding the new languages I was using for
              the app.</p>
            <h3>Credits</h3>
            <p>Although I used many online sources to understand the material and to help me create this APP these were some
              of the ones I used more often.</p>
            <ul>
              <li><a href="https:/careerfoundry.com">Career Foundry</a></li>
              <li><a href="https:/developer.mozilla.org/en-US/">MDN Web Docs</a></li>
              <li><a href="https:/www.w3schools.com/cs/">W3 Schools</a></li>
              <li><a href="https:/www.javascript.com">JavaScript</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>

  )
};