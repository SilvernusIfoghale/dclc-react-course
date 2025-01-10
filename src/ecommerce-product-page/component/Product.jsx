import React from "react";

const Product = () => {
  return (
    <>
      <>
        <div className="">
          <section className="relative max-w-[350px]">
            <div
              className="flex justify-center items-center w-[30px] h-[30px] bg-white rounded-full absolute bottom-[300px];
    left-[30px]"
              id="previous-btn"
            >
              <img src="images/icon-previous.svg" alt="" className="w-[10px]" />
            </div>
            <div className="w-[350px] rounded-lg overflow-hidden">
              <img
                src="images/image-product-1.jpg"
                alt=""
                className="img img-Big"
              />
            </div>
            <div
              className="flex justify-center items-center w-[30px] h-[30px] bg-white rounded-full absolute top-[290%];
    right-[40px]"
              id="next-btn"
            >
              <img src="images/icon-next.svg" alt="" className="nav-btn-next" />
            </div>
            <div className="w-[350px] flex justify-center gap-5 my-5">
              <div className="relative w-[70px] h-[70px] rounded-md border-2 border-transparent hover:border-[#ff7d1a] hover:filter hover:brightness-100 hover:opacity-40 overflow-hidden">
                <img
                  src="images/image-product-1.jpg"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="relative w-[70px] h-[70px] rounded-md border-2 border-transparent hover:border-[#ff7d1a] hover:filter hover:brightness-100 hover:opacity-40 overflow-hidden">
                <img
                  src="images/image-product-2.jpg"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="relative w-[70px] h-[70px] rounded-md border-2 border-transparent hover:border-[#ff7d1a] hover:filter hover:brightness-100 hover:opacity-40 overflow-hidden">
                <img
                  src="images/image-product-3.jpg"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="relative w-[70px] h-[70px] rounded-md border-2 border-transparent hover:border-[#ff7d1a] hover:filter hover:brightness-100 hover:opacity-40 overflow-hidden">
                <img
                  src="images/image-product-4.jpg"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  );
};

export default Product;
