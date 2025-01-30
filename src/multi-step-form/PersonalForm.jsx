import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";

const PersonalForm = ({ step }) => {
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  return (
    <>
      <div className="w-[90%] sm:w-[60%] md:w-[60%] pl-5 pt-5 pr-10 pb-5 sm:pb-1 bg-multiForm-Alabaster sm:bg-white rounded-lg mt-[-50px] sm:mt-0 flex flex-col place-self-center sm:place-self-auto sm:block">
        <h1 className="text-[1.7rem] font-bold text-multiForm-Marineblue">
          {step === 1
            ? " Personal info"
            : step === 2
            ? "Select your plan"
            : step === 3
            ? "Pick add-ons"
            : step === 4
            ? "Finishing up"
            : step > 5 && ""}
        </h1>
        <p className="text-multiForm-Coolgray pt-1 text-sm mb-2">
          {step == 1
            ? " Please provide your name, email address, and phone number."
            : step === 2
            ? "You have the option of monthly or yearly billing."
            : step === 3
            ? "Add-ons help enhance your gaming experience."
            : step === 4
            ? "Double-check everything looks OK, before confirming."
            : step > 4 && ""}
        </p>
        <div className="mt-2">
          {/* form */}
          {step === 1 ? (
            <Formik
              initialValues={{
                name: "",
                email: "",
                phoneNumber: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                  .required("Email is required")
                  .email("Invalid email format"),
                phoneNumber: Yup.string()
                  .required("Phone number is required")
                  .matches(phoneRegExp, "Phone number is not valid"),
              })}
            >
              <Form className="text-sm">
                <div className="h-[80px]">
                  <label htmlFor="name" className="block py-1">
                    Name
                  </label>
                  <Field
                    className="border-[1px] w-full rounded-md p-2 pl-3 bg-transparent sm:bg-white border-multiForm-Coolgray"
                    name="name"
                    placeholder="e.g. Stephen King"
                    type="text"
                  />
                  <ErrorMessage
                    component="label"
                    name="name"
                    className="text-red-500 block text-xs"
                  />
                </div>

                <div className="h-[80px]">
                  <label htmlFor="email" className="block py-1">
                    Email Address
                  </label>
                  <Field
                    className="border-[1px] w-full  rounded-md p-2 pl-3 bg-transparent sm:bg-white border-multiForm-Coolgray"
                    name="email"
                    placeholder="e.g. stephenking@lorem.com"
                    type="email"
                  />
                  <ErrorMessage
                    component="label"
                    name="email"
                    className="text-red-500 block text-xs"
                  />
                </div>
                <div className="h-[80px]">
                  <label htmlFor="phoneNumber" className="block py-1">
                    Phone Number
                  </label>
                  <Field
                    className="border-[1px] w-full  rounded-md p-2 pl-3 bg-transparent sm:bg-white border-multiForm-Coolgray"
                    name="phoneNumber"
                    placeholder="e.g. +1 234 567 890"
                    type="text"
                  />
                  <ErrorMessage
                    component="label"
                    name="phoneNumber"
                    className="text-red-500 block text-xs"
                  />
                </div>
                <div className="bg-white left-0 right-0 h-24 absolute bottom-0 sm:static sm:bg-transparent ">
                  <button
                    type="submit"
                    className="bg-multiForm-Marineblue absolute  bottom-5 right-10 sm:right-16 mt-4 px-4 py-3 rounded-md flex place-self-end hover:bg-multiForm-Purplishblue"
                  >
                    <p className="text-xs text-multiForm-Lightblue">
                      Next Step
                    </p>
                  </button>
                </div>
              </Form>
            </Formik>
          ) : step === 2 ? (
            // plan
            <SelectPlan step={step} />
          ) : step === 3 ? (
            <Addons />
          ) : (
            step == 4
          )}
        </div>
      </div>
    </>
  );
};

export default PersonalForm;
