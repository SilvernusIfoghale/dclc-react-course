import React, { useState } from "react";
import * as Yup from "yup";

const FormYup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phoneNumber: Yup.string().matches(
      /^\d{13}$/,
      "Phone Number must be 13 digits"
    ),
    password: Yup.string()
      .required("Password is required")
      .min(18, "You must be at least 18 years old")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "password must contain at least one number")
      .matches(/[A-Z]/, "password must contain at least one uppercase letter")
      .matches(
        /[a-z]/,
        "password must contain at least one   lowercase letter"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .min(18, "You must be at least 18 years old")
      .max(100, "You cannot be older than 100years")
      .required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array()
      .min(1, "Select at least one interest")
      .required("Select at least one interest"),
    birthDate: Yup.date().required("Date of birth is required"),
  });

  const handleSubmit = async (e) => {
    //parsing data from string to number

    // const parsedUser = validationSchema.cast(nonParsed);
    // console.log(nonParsed, parsedUser);

    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChecked = (e) => {
    const { name, checked } = e.target;

    let updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter(
        (interest) => interest !== name
      );
    }
    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };
  return (
    <div className="flex items-center flex-col">
      <h1>Form Validation</h1>
      <form
        onSubmit={handleSubmit}
        className=" mt-10 border-2 w-[600px] min-w-[350px] px-10 mb-5"
      >
        <div className="flex flex-col  py-2 pt-5">
          <label htmlFor="firstName" className="block">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            placeholder="James"
            className="border-gray-400 border-2 rounded-md py-2 px-2"
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName}*</span>
          )}
        </div>
        <div className="flex flex-col  py-2">
          <label htmlFor="lastName" className="block">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Smith"
            value={formData.lastName}
            className="border-gray-400 border-2 rounded-md py-2 px-2"
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName}*</span>
          )}
        </div>
        <div className="flex flex-col  py-3">
          <label htmlFor="Email" className="block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="jamessmith@gmail.com"
            className="border-gray-400 border-2 rounded-md py-2 px-2"
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email}*</span>
          )}
        </div>
        <div className="flex flex-col  py-3">
          <label htmlFor="phoneNumber" className="block">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            placeholder="+234 815 122 8316"
            className="border-gray-400 border-2 rounded-md py-2 px-2"
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber}*</span>
          )}
        </div>
        <div className="flex flex-col  py-3">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            placeholder="************"
            className="border-gray-400 border-2 rounded-md py-2 px-2"
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}*</span>
          )}
        </div>
        <div className="flex flex-col  py-3">
          <label htmlFor="confirmPassword" className="block">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            placeholder="************"
            className="border-gray-400 border-2 rounded-md py-2 px-2"
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword}*</span>
          )}
        </div>
        <div className="flex flex-col  py-3">
          <label htmlFor="age" className="block">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            placeholder="25"
            className="border-gray-400 border-2 rounded-md py-2 px-2"
            onChange={handleChange}
          />
          {errors.age && <span className="text-red-500">{errors.age}*</span>}
        </div>
        <div className="flex flex-col  py-3">
          <label htmlFor="gender" className="block">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="border-gray-400 border-2 rounded-md py-2 px-2"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male </option>
            <option value="female">Female </option>
            <option value="others">Others </option>
          </select>
          {errors.gender && (
            <span className="text-red-500">{errors.gender}*</span>
          )}
        </div>
        <div>
          <div className="flex items-center gap-1  py-3">
            <label htmlFor="interests" className="block">
              Interests
            </label>
            <div>
              <input
                type="checkbox"
                className="ml-3 "
                name="coding"
                checked={formData.interests.includes("coding")}
                onChange={handleChecked}
              />
              <label htmlFor="coding"> Coding</label>
              <input
                type="checkbox"
                className="ml-3 "
                checked={formData.interests.includes("sport")}
                name="sport"
                onChange={handleChecked}
              />
              <label htmlFor="sport"> Sport</label>
              <input
                type="checkbox"
                className="ml-3 "
                name="reading"
                checked={formData.interests.includes("reading")}
                onChange={handleChecked}
              />
              <label htmlFor="reading"> Reading</label>
            </div>
          </div>
          {errors.interests && (
            <div className="text-red-500 mt-[-13px] mb-1">
              {errors.interests}*
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center gap-1  py-3">
            <label htmlFor="dob" className="block">
              Date of Birth
            </label>
            <div>
              <input
                type="date"
                name="birthDate"
                className="border-gray-400 border-2 rounded-md  px-2"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
          </div>
          {errors.birthDate && (
            <div className="text-red-500 mt-[-13px] mb-1">
              {errors.birthDate}*
            </div>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-1/2 py-2 my-3 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormYup;
