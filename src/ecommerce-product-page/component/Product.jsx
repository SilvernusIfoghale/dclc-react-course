import React, { useState } from "react";
import { pageImg } from "../imageDb/db";
import { thumbnails } from "../imageDb/db";

const Product = () => {
  const [imgToggle, setImgToggle] = useState(thumbnails[0].id);

  //thumbnails function
  const handleChange = (product) => {
    setImgToggle(product);
  };

  //next function
  const handleNext = (index) => {
    let id = 57;
    let char = index[id] - 1;
    // console.log(index.charAt(id));
    if (char + 1 == 4) {
      setImgToggle(thumbnails[0].id);
    } else {
      setImgToggle(thumbnails[char + 1].id);
    }
  };

  //previous function
  const handlePrevious = (index) => {
    let id = 57;
    let char = index[id] - 1;
    if (char == 0) {
      setImgToggle(thumbnails[3].id);
    } else {
      setImgToggle(thumbnails[char - 1].id);
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
            <div className="w-full sm:w-[330px] sm:rounded-lg overflow-hidden cursor-pointer">
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
      </>
    </>
  );
};

export default Product;

// index.includes(1)
//   ? setImgToggle(thumbnails[1].id)
//   : index.includes(2)
//   ? setImgToggle(thumbnails[2].id)
//   : index.includes(3)
//   ? setImgToggle(thumbnails[3].id)
//   : index.includes(4) && setImgToggle(thumbnails[0].id);

// index.includes(1)
//   ? setImgToggle(thumbnails[3].id)
//   : index.includes(2)
//   ? setImgToggle(thumbnails[0].id)
//   : index.includes(3)
//   ? setImgToggle(thumbnails[1].id)
//   : index.includes(4) && setImgToggle(thumbnails[2].id);
