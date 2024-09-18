import { useState } from 'react';

// form for no data
const AddingRegionInfo = (props: { selectedRegion: string }) => {
  const { selectedRegion } = props;
  const [imgInput, setImgInput] = useState<File | string | null>('');
  const [caption, setCaption] = useState('');

  //image/file handler
  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    setImgInput(e.target.files?.[0] || null);
  }

  const visitedData: React.FormEventHandler = async (
    event: React.ChangeEvent
  ) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData();
    formData.append('selectedRegion', selectedRegion);
    if (imgInput instanceof File || typeof imgInput === 'string') {
      formData.append('image', imgInput);
    }
    formData.append('caption', caption);
    console.log('Form submitted with region:', formData);
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    console.log('caption submitted with region:', caption);

    try {
      const response: Response = await fetch('http://localhost:8080/db', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        setImgInput('');
        setCaption('');
        console.log('Successful POST', data);
      } else {
        console.log('Error', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <form className="dataForm" onSubmit={visitedData}>
      <input
        type="file"
        name="picture"
        accept="image/png, image/jpeg"
        onChange={handleImage}
      />
      <input
        type="text"
        placeholder="Caption"
        onChange={(event) => setCaption(event.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default AddingRegionInfo;
