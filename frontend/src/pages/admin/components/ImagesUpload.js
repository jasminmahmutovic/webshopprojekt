import React from 'react'
import ImageUploading from 'react-images-uploading';

export const ImagesUpload = () => {
  
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  
  
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              className="skapaBtn"
              id='skapaBtn'
              style={isDragging ? { color: 'black', backgroundColor:"#A3FF77" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Klicka eller dra in bildfil
            </button>
            &nbsp;
            {/* <button 
            className="skapaBtn"
            onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
      
                <div className="image-item__btn-wrapper" >
                <img src={image['data_url']} alt="" width="100" />
                  <button className="removeUpdateBtn" onClick={() => onImageUpdate(index)}>Byt bild</button>
                  <button className="removeUpdateBtn"  onClick={() => onImageRemove(index)}>Radera</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
