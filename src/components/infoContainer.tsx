// import React from 'react';
//functionality to determine if we visited state or not
function InfoContainer(props) {
  const { selectedRegion } = props;

  // function getPicture(selectedRegion){
  //fetch('/state)
  // }

  return (
    <div>
      <h1>Info about {selectedRegion} will go here!</h1>
      <img src='https://i0.wp.com/www.projectwhim.com/wp-content/uploads/2021/06/FA2A7F05-FABD-4035-A2EC-8E9995EDB30Eedit.jpg?fit=800%2C800&ssl=1' />
      <div>
        <p>
          {' '}
          {selectedRegion} was so fun because blah blah blah. I can't wait to go
          back blah blah blah.
        </p>
      </div>
    </div>
  );
}

export default InfoContainer;
