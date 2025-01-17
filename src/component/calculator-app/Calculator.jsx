import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [theme, setTheme] = useState(1);
  const [valueInput, setValueInput] = useState("");

  //set theme
  const handleChange = (e) => {
    const { value } = e.target;
    setTheme(e.target.value);
  };

  //btn click
  const handleValue = (keyValue) => {
    setValueInput(valueInput + keyValue);
  };

  useEffect(() => {
    handleChange;
  });

  //prevent double arithmetic operator
  function ValidateInput(opt) {
    let last_input;
    let operators;
    if (!valueInput) {
      return;
    } else {
      last_input = String(valueInput).slice(-1);
      operators = ["+", "-", "*", "/"];
    }

    if (opt == "." && last_input !== ".") {
      setValueInput((prevValue) => prevValue + ".");
    } else if (opt == "." && last_input == ".") {
      return false;
    }

    if (operators.includes(opt)) {
      if (operators.includes(last_input)) {
        return false;
      } else {
        setValueInput(valueInput + opt);
      }
    }
    return true;
  }
  const ComputeResult = () => {
    if (valueInput) {
      try {
        let result = eval(valueInput);
        setValueInput(result);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div
        className={` ${
          theme == 1
            ? "bg-theme_1-main_background text-theme_1-dark_text_color "
            : theme == 2
            ? "bg-theme_2-main_background text-theme_2-dark_text_color "
            : theme == 3 &&
              "bg-theme_3-main_background text-theme_3-dark_text_color "
        }  flex justify-center items-center h-[100vh] w-full`}
      >
        <div className="w-full max-w-[375px] flex flex-col">
          {/* <!-- nav section  --> */}
          <nav className="flex justify-between px-1">
            <h3 className="text-2xl font-bold">calc</h3>
            <div className="flex items-end gap-4">
              <p className="font-bold text-xs  pb-2">THEME</p>
              <div className="theme-wrapper">
                <div className="flex justify-between px-1">
                  <p className="text-xs font-bold">1</p>
                  <p className="text-xs font-bold">2</p>
                  <p className="text-xs font-bold">3</p>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    name="range"
                    className={`w-[50px] appearance-none [-webkit-]:appearance-none  rounded-lg h-[19px] py-[5px] px-[2px]
                    ${
                      theme == 1
                        ? "bg-theme_1-toggle_keys_background  [&::-webkit-slider-thumb]:bg-theme_1-equal_toggle_background [&::-moz-range-thumb]:bg-theme_1-equal_toggle_background "
                        : theme == 2
                        ? "bg-theme_2-toggle_keys_background  [&::-webkit-slider-thumb]:bg-theme_2-equal_toggle_background [&::-moz-range-thumb]:bg-theme_2-equal_toggle_background "
                        : theme == 3 &&
                          "bg-theme_3-toggle_keys_background  [&::-webkit-slider-thumb]:bg-theme_3-equal_toggle_background [&::-moz-range-thumb]:bg-theme_3-equal_toggle_background "
                    }   [&::-webkit-slider-thumb]:appearance-none 
                   [&::-webkit-slider-thumb]:w-[13px] [&::-webkit-slider-thumb]:h-[13px] [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:appearance-none  [&::-moz-range-thumb]:w-[12px] [&::-moz-range-thumb]:h-[12px] [&::-moz-range-thumb]:rounded-full hover:cursor-pointer`}
                    min="1"
                    max="3"
                    step="1"
                    value={theme}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </nav>
          {/* <!-- screen  section --> */}
          <div className="w-full h-[100px] rounded-[10px] mt-[20px] mb-[17px] overflow-hidden">
            <input
              type="text"
              value={valueInput}
              disabled
              className={`${
                theme == 1
                  ? "bg-theme_1-screen_background text-theme_1-dark_text_color "
                  : theme == 2
                  ? "bg-theme_2-screen_background text-theme_2-dark_text_color "
                  : theme == 3 &&
                    "bg-theme_3-screen_background text-theme_3-dark_text_color "
              }  w-full h-full border-none outline-none text-right px-[5px] text-[3rem] font-bold [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none `}
            />
          </div>
          {/* <!-- button section  --> */}
          <main
            className={` ${
              theme == 1
                ? "bg-theme_1-toggle_keys_background "
                : theme == 2
                ? "bg-theme_2-toggle_keys_background "
                : theme == 3 && "bg-theme_3-toggle_keys_background "
            }}  p-[1.5rem]  grid justify-items-center grid-cols-4 gap-4 shadow-inner font-bold text-2xl rounded-md`}
          >
            <div
              onClick={() => handleValue("7")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>7</span>
            </div>
            <div
              onClick={() => handleValue("8")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>8</span>
            </div>
            <div
              onClick={() => handleValue("9")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>9</span>
            </div>
            <div
              onClick={() => setValueInput(String(valueInput).slice(0, -1))}
              className={` ${
                theme == 1
                  ? " text-theme_1-light_text_color bg-theme_1-del_reset_background border-b-theme_1-del_reset_shadow "
                  : theme == 2
                  ? " text-theme_2-light_text_color bg-theme_2-del_reset_background border-b-theme_2-del_reset_shadow "
                  : theme == 3 &&
                    " text-theme_3-light_text_color bg-theme_3-del_reset_background border-b-theme_3-del_reset_shadow "
              } w-full h-[45px] rounded-lg relative action   hover:opacity-90  cursor-pointer

              text-center  border-b-[3px]  py-1 action `}
            >
              <span className="">DEL</span>
            </div>
            <div
              onClick={() => handleValue("4")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>4</span>
            </div>
            <div
              onClick={() => handleValue("5")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>5</span>
            </div>
            <div
              onClick={() => handleValue("6")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>6</span>
            </div>
            <div
              onClick={() => ValidateInput("+")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>+</span>
            </div>
            <div
              onClick={() => handleValue("1")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>1</span>
            </div>
            <div
              onClick={() => handleValue("2")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>2</span>
            </div>
            <div
              onClick={() => handleValue("3")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>3</span>
            </div>
            <div
              onClick={() => ValidateInput("-")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>-</span>
            </div>
            <div
              onClick={() => ValidateInput(".")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>.</span>
            </div>
            <div
              onClick={() => handleValue("0")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>0</span>
            </div>
            <div
              onClick={() => ValidateInput("/")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>÷</span>
            </div>
            <div
              onClick={() => ValidateInput("*")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-key_background hover:text-theme_1-dark_text_color hover:bg-theme_1-light_text_color cursor-pointer "
                  : theme == 2
                  ? "bg-theme_2-key_background hover:text-theme_2-dark_text_color hover:bg-theme_2-light_text_color cursor-pointer "
                  : theme == 3 &&
                    "bg-theme_3-key_background hover:text-theme_3-dark_text_color hover:bg-theme_3-light_text_color cursor-pointer "
              }  border-b-[3px] w-full h-[45px] rounded-lg relative action text-center py-1 hover:opacity-90 `}
            >
              <span>x</span>
            </div>
            <div
              onClick={() => setValueInput("")}
              className={` ${
                theme == 1
                  ? "bg-theme_1-del_reset_background text-theme_1-light_text_color "
                  : theme == 2
                  ? "bg-theme_2-del_reset_background text-theme_2-light_text_color "
                  : theme == 3 &&
                    "bg-theme_3-del_reset_background text-theme_3-light_text_color "
              } w-full h-[45px] rounded-lg relative action   hover:opacity-90  cursor-pointer  text-center  border-b-[3px]  py-1 col-span-2 `}
            >
              <span>RESET</span>
            </div>
            <div
              onClick={ComputeResult}
              className={` ${
                theme == 1
                  ? " text-theme_1-light_text_color border-b-theme_1-equal_toggle_shadow bg-theme_1-equal_toggle_background "
                  : theme == 2
                  ? " text-theme_2-light_text_color border-b-theme_2-equal_toggle_shadow bg-theme_2-equal_toggle_background "
                  : theme == 3 &&
                    " text-theme_3-light_text_color border-b-theme_3-equal_toggle_shadow bg-theme_3-equal_toggle_background "
              } w-full h-[45px] rounded-lg relative action   hover:opacity-90  cursor-pointer  text-center py-1 col-span-2  border-b-[3px] `}
            >
              <span>=</span>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Calculator;
