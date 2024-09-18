import { useState } from 'react';

// form for no data
const AddingRegionInfo = (region: string | null) => {
  const [imgInput, setImgInput] = useState<File | string | null>('');
  const [caption, setCaption] = useState('');

  //image/file handler
  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    setImgInput(e.target.files?.[0] || null);
  }

  const visitedData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData();
    formData.append('region', region + '');
    if (imgInput instanceof File || typeof imgInput === 'string') {
      formData.append('image', imgInput);
    }
    formData.append('caption', caption);
    console.log('Form submitted with region:', formData);

    try {
      const response = await fetch('/db', {
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
    console.log('HI');
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
