import React, {useState} from 'react'
import ImageUploading from "react-images-uploading";


const Uploadimg = () => {

  const [images, setImages] = useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

  return (
    <div>
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
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Byt bild</button>
                  <button onClick={() => onImageRemove(index)}>Ta bort bild</button>
                </div>
                <img src={image["data_url"]} alt="" width="230" />
              </div>
            ))}
          
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Klicka eller dra in en bild
            </button>
            &nbsp;
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default Uploadimg