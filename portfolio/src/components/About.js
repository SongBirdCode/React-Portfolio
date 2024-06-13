// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Welcome to SongBirdCode: An eclectic portfolio created by Full Stack Software Engineer, Gina Bauza.</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Gina Bauza Profile"/>
      <p className="content is-italic mt-4">
        
      </p>
      <p className="content">
        Hello there! Welcome to my portfolio. From Air Force Veteran, Opera crossover professional singer, and software engineer there is no design too scary or application too rocky to handle. Gina has lived a life full of many travels and languages, so of course computer languages hold importance. Thanks for stopping by! (Tweet Tweet!)
      </p>
    </div>
  );
}

export default About;