import React from 'react';
import romeAudio from './projects/romeAudio.png';
// https://harrypatrick94.github.io/RomeAudio-Frontend/#/
import vp from './projects/VP.png';
// https://maiqvu.github.io/visualpedia/#/login
import musikdb from './projects/musiK.png';
// https://ga-project1-musik-db.herokuapp.com/login
import tictactoe from './projects/tic-tac-toe.png';
// https://harrypatrick94.github.io/tic-tac-toe/
import '../App.css'

const Projects = () => {

  return(
    
    <>
      <div className="explaination">
        <h2 className="projectsHeading">Projects</h2>
        <p>
          <h4 className="projectsHeading">RomeAudio</h4>
          <p>
            RomeAudio is a react built in browser drum machine. After enjoying a friend's analog drum machine, I began to think how awesome it would be to have my own. This is when I began to think about the possibilities provided by tone.js.
          </p>
          <p>
            This drum machine is built with combining a javascript, react front end with a node backend utilising the mongoDB, mongoose and Atlas online hosting. Tone.js was also used to import and play sounds within the browser.
          </p>
          <p>
          I’m super excited to build a fun project that can help provide access to musical possibilities I didn’t previously know were possible. Technologies used: React, Node, MongoDB, Mongoose, Tone.js
          </p>
          <p>
          https://github.com/harrypatrick94/RomeAudio-Frontend
          https://github.com/harrypatrick94/RomeAudio-Backend
          </p>
          <p>
            <a href="https://harrypatrick94.github.io/RomeAudio-Frontend/#/" target="_blank"><img src={romeAudio} className="projectImg"/></a>
          </p>
        </p>
        <p>
          <h4 className="projectsHeading">Visualpedia</h4>
          <p>
            Visualpedia was a collaborative projects with 3 other General Assembly students.
          </p>
          <p>
            Visual Representation of the World Bank API indicators. This was a group project built in React with Chart.js. Delivered the complete back-end API made with rails and produced as front-end in React.
          </p>
          <p>
           This was first experience working in a team of developers. It was a great learning experience we collaborate from start to finish to ensure we delivered our desired product.
           Technologies used: React, Ruby on Rails, PostgreSQL, Chart.js
          </p>
          <p>
            https://github.com/maiqvu/visualpedia
            https://maiqvu.github.io/visualpedia/#/
            https://github.com/spicysoup/visualpedia-backend
          </p>
          <p>
            <a href="https://maiqvu.github.io/visualpedia/#/login" target="_blank"><img src={vp} className="projectImg"/></a>
          </p>
        </p>
        <p>
          <h4 className="projectsHeading">MusikDB</h4>
          <p>
            A music database application the facilitates the storage of and updating of favourite songs and musicians
          </p>
          <p>
            This was a week long sprint to implement and complete front and back end application using ruby, rails, javaScript and the Tone.js library.
          </p>
          <p>
           A simple keyboard has been built using Tone.js allowing the user to practice there favourite songs within the browser.
           Technologies used: Ruby on Rails, PostgreSQL, JavaScript, jQuery.
          </p>
          <p>
            https://ga-project1-musik-db.herokuapp.com/login
            https://github.com/harrypatrick94/Project-1-GA

          </p>
          <p>
            <a href="https://maiqvu.github.io/visualpedia/#/login" target="_blank"><img src={musikdb} className="projectImg"/></a>
          </p>
        </p>
        <p>
          <h4 className="projectsHeading">Tic-Tac-Toe</h4>
          <p>
            A replica of game of Tic-Tac-Toe, with the ability to draw your own game board in the browser.
          </p>
          <p>
            In this project we learnt to manipulate the DOM and update it dynamically as objects and arrays are updated. Technologies used: HTML/CSS, JavaScript, jQuery
          </p>
          <p>
            https://harrypatrick94.github.io/tic-tac-toe/
            https://github.com/harrypatrick94/tic-tac-toe
          </p>
          <p>
            <a href="https://maiqvu.github.io/visualpedia/#/login" target="_blank"><img src={tictactoe} className="projectImg"/></a>
          </p>
        </p>
      </div>
    </>
  )
}

export default Projects
