// import React from 'react';
//functionality to determine if we visited state or not
function InfoContainer(props) {
  const { selectedRegion } = props;

  // function getPicture(selectedRegion){
  //fetch('/state)
  // }

  const imageLibrary = {
    'Pennsylvania': 'https://my-visited-states-images.s3.us-west-1.amazonaws.com/IMG_2399.webp',
    'California': 'https://my-visited-states-images.s3.us-west-1.amazonaws.com/image.webp',
    "Arizona": 'https://my-visited-states-images.s3.us-west-1.amazonaws.com/eric-arizona.webp',
    "Texas": 'https://my-visited-states-images.s3.us-west-1.amazonaws.com/IMG_5387.webp',
    "New York": 'https://my-visited-states-images.s3.us-west-1.amazonaws.com/IMG_0057.webp',
    "Colorado": 'https://my-visited-states-images.s3.us-west-1.amazonaws.com/IMG_8263_2.webp'

  }


  return (
    <div>
      <h1>My Favorite memory from {selectedRegion}!</h1>
      <img src={imageLibrary[selectedRegion]} />
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
