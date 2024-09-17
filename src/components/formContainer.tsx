// import React from 'react'

  // form for no data
  const addingRegionInfo = (region) => {
    const visitedData = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      console.log('Form submitted with region:', region);
      // fetch('/visited', {
      //   method: "POST",
        
      // })
      console.log('HI')
    }
    return(
      <form className="dataForm" onSubmit={visitedData}>
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
      <input type='text' placeholder='Caption'></input>
      <input type='submit'></input>
      </form>
    )
  }

export default addingRegionInfo
