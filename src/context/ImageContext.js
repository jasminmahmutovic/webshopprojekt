import { createContext, useState } from "react";

export const ImageContext = createContext();

export default function CartProvider({ children }) {

  const [images, setImages] = useState([]);

  const [headline, setHeadline] = useState({
    headline1:"",
    headline2:"",
    headline3:"",
    headline4:"",
    headline5:"",
  });


  return (
    <>
      <ImageContext.Provider
        value={{ headline, setHeadline }}
      >
        {children}
      </ImageContext.Provider>
    </>
  );
}
