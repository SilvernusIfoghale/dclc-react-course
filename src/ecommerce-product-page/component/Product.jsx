import React, { useState } from "react";
import { pageImg } from "../imageDb/db";
import { thumbnails } from "../imageDb/db";

const Product = () => {
  const [imgToggle, setImgToggle] = useState(thumbnails[0].id);
  const [imgToggleFloat, setImgToggleFloat] = useState(thumbnails[0].id);
  const [close, setClose] = useState(false);

  //thumbnails function
  const handleChange = (product) => {
    setImgToggle(product);
  };
  //thumbnailsFloat function
  const handleChangeFloat = (product) => {
    setImgToggleFloat(product);
  };

  //next function
  const handleNext = (index) => {
    let charIndex = 57;
    let char = index[charIndex] - 1;
    if (char + 1 == 4) {
      setImgToggle(thumbnails[0].id);
    } else {
      setImgToggle(thumbnails[char + 1].id);
    }
  };
  //nextFloat function
  const handleNextFloat = (index) => {
    let charIndex = 57;
    let char = index[charIndex] - 1;
    // console.log(index.charAt(id));
    if (char + 1 == 4) {
      setImgToggleFloat(thumbnails[0].id);
    } else {
      setImgToggleFloat(thumbnails[char + 1].id);
    }
  };

  //previous function
  const handlePrevious = (index) => {
    let charIndex = 57;
    let char = index[charIndex] - 1;
    if (char == 0) {
      setImgToggle(thumbnails[3].id);
    } else {
      setImgToggle(thumbnails[char - 1].id);
    }
  };
  //previousFloat function
  const handlePreviousFloat = (index) => {
    let charIndex = 57;
    let char = index[charIndex] - 1;
    if (char == 0) {
      setImgToggleFloat(thumbnails[3].id);
    } else {
      setImgToggleFloat(thumbnails[char - 1].id);
    }
  };

  //thumbnails
  const variance = thumbnails.map((thumbnail, index) => {
    return (
      <div
        className=" relative w-[70px] h-[70px] rounded-md border-2 border-transparent hover:border-[#ff7d1a] hover:filter hover:brightness-100  overflow-hidden cursor-pointer hidden sm:block"
        key={index}
        onClick={() => handleChange(thumbnail.id)}
      >
        <img
          src={thumbnail.id}
          alt=""
          className="w-full object-cover hover:opacity-40"
        />
      </div>
    );
  });
  //thumbnails float
  const varianceFloat = thumbnails.map((thumbnail, index) => {
    return (
      <div
        className=" relative w-[70px] h-[70px] rounded-md border-2 border-transparent hover:border-[#ff7d1a] hover:filter hover:brightness-100 hover:bg-white overflow-hidden cursor-pointer hidden sm:block"
        key={index}
        onClick={() => handleChangeFloat(thumbnail.id)}
      >
        <img
          src={thumbnail.id}
          alt=""
          className="w-full object-cover hover:opacity-50"
        />
      </div>
    );
  });
  return (
    <>
      <>
        <div className="sm:w-full  md:w-[80%] ">
          <section className="relative max-w-[430px] sm:max-w-[350px]">
            <div
              className="sm:hidden absolute flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full  top-[40%] left-[30px] cursor-pointer"
              onClick={() => handlePrevious(imgToggle)}
            >
              <img src={pageImg.iconPrevious} alt="" className="w-[10px]" />
            </div>
            <div
              className="w-full sm:w-[330px] sm:rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setClose(true)}
            >
              <img src={imgToggle} alt="" className="img img-Big" />
            </div>
            <div
              className="sm:hidden absolute flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full  top-[38%] right-[40px] cursor-pointer"
              onClick={() => handleNext(imgToggle)}
            >
              <img src={pageImg.iconNext} alt="" className="w-[10px]" />
            </div>
            <div className="w-[330px] flex justify-center gap-4 my-5">
              {variance}
            </div>
          </section>
        </div>

        {/* float thumbnail  */}
        {close && (
          <div className="hidden absolute sm:flex justify-center items-center top-0 bottom-0 h-full w-full bg-black bg-opacity-80 z-40">
            <div className="">
              <img
                src={pageImg.closeImg}
                alt=""
                className="flex justify-self-end mb-3 w-5 cursor-pointer"
                onClick={() => setClose(false)}
              />
              <div className="sm:w-full  md:w-[80%] z-50 ">
                <section className="relative max-w-[430px] sm:max-w-[350px]">
                  <div
                    className=" absolute flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full  top-[36%] left-[-20px] cursor-pointer"
                    onClick={() => handlePreviousFloat(imgToggleFloat)}
                  >
                    <img
                      src={pageImg.iconPrevious}
                      alt=""
                      className="w-[10px]"
                    />
                  </div>
                  <div className="w-full sm:w-[330px] sm:rounded-lg overflow-hidden cursor-pointer">
                    <img src={imgToggleFloat} alt="" className="img img-Big" />
                  </div>
                  <div
                    className=" absolute flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full  top-[35%] md:right-[-85px] sm:right-[-20px] cursor-pointer"
                    onClick={() => handleNextFloat(imgToggleFloat)}
                  >
                    <img src={pageImg.iconNext} alt="" className="w-[10px]" />
                  </div>
                  <div className="w-[330px] flex justify-center gap-4 my-5">
                    {varianceFloat}
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Product;
