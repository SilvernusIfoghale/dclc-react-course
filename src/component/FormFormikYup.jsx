import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const FormFormikYup = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="mt-10">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            jobRole: "",
            message: "",
            gender: "",
            skills: [],
          }}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .required("Email is required")
              .email("Invalid email format"),
            password: Yup.string().required("Password is required"),
            confirmPassword: Yup.string()
              .required("Confirm your password")
              .oneOf([Yup.ref("password"), null], "Passwords must match"),
            jobRole: Yup.string()
              .required("Please select a job role")
              .oneOf(
                ["developer", "designer", "quality-analyst"],
                "Invalid Job Role"
              ),
            message: Yup.string()
              .required("Please enter a message")
              .max(200, "Must be less than 200 characters or less"),
            gender: Yup.string().required("Select your gender!"),
            skills: Yup.array().min(1, "Please pick a skill"),
          })}
        >
          <Form className="border-2 p-10">
            <h2 className="text-2xl mb-10">Signup using Formik & Yup</h2>
            <div className="h-[90px]">
              <label htmlFor="firstName" className="block py-1">
                First Name
              </label>
              <Field
                className="border-2 w-[350px] rounded-md p-1"
                name="firstName"
                placeholder="John"
                type="text"
              />
              <ErrorMessage
                component="label"
                name="firstName"
                className="text-red-500 block"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block py-1">
                Last Name
              </label>
              <Field
                className="border-2 w-[350px] rounded-md p-1"
                name="lastName"
                placeholder="Doe"
                type="text"
              />
              <ErrorMessage
                component="label"
                name="lastName"
                className="text-red-500 block"
              />
            </div>
            <div>
              <label htmlFor="email" className="block py-1">
                Email
              </label>
              <Field
                className="border-2 w-[350px] rounded-md p-1"
                name="email"
                placeholder="johndoe@gmail.com"
                type="email"
              />
              <ErrorMessage
                component="label"
                name="email"
                className="text-red-500 block"
              />
            </div>
            <div>
              <label htmlFor="password" className="block py-1">
                Password
              </label>
              <Field
                className="border-2 w-[350px] rounded-md p-1"
                name="password"
                placeholder="*******"
                type="password"
              />
              <ErrorMessage
                component="label"
                name="password"
                className="text-red-500 block"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block py-1">
                Confirm Password
              </label>
              <Field
                className="border-2 w-[350px] rounded-md p-1"
                name="confirmPassword"
                placeholder="*******"
                type="password"
              />
              <ErrorMessage
                component="label"
                name="confirmPassword"
                className="text-red-500 block"
              />
            </div>
            <div>
              <label htmlFor="jobRole" className="block py-1">
                Job Role
              </label>
              <Field
                as="select"
                className="border-2 w-[350px] rounded-md p-1"
                name="jobRole"
              >
                <option value="" disabled>
                  Job Role
                </option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="quality-analyst">Quality Analyst</option>
              </Field>
              <ErrorMessage
                component="label"
                name="jobRole"
                className="text-red-500 block"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block py-1">
                Gender
              </label>
              <div>
                <Field
                  className="mr-2"
                  name="gender"
                  type="radio"
                  value="male"
                />
                <label htmlFor="male">Male</label>
                <Field
                  className=" mx-2"
                  name="gender"
                  type="radio"
                  value="female"
                />
                <label htmlFor="female">Female</label>
                <ErrorMessage
                  component="label"
                  name="gender"
                  className="text-red-500 block"
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block py-1">
                Message
              </label>
              <Field
                as="textarea"
                className="border-2 w-[350px] rounded-md p-1 resize-none"
                name="message"
                placeholder="write us something,..."
              />
              <ErrorMessage
                component="label"
                name="message"
                className="text-red-500 block"
              />
            </div>
            <div>
              <label htmlFor="skills" className="block py-1">
                Skills
              </label>
              <Field
                className="mr-1"
                name="skills"
                type="checkbox"
                value="nodeJs"
              />
              <label htmlFor="nodeJs" className="mr-1">
                NodeJS
              </label>
              <Field
                className="mx-1"
                name="skills"
                type="checkbox"
                value="reactJs"
              />
              <label htmlFor="reactJs" className="mr-1">
                ReactJs
              </label>
              <Field
                className="mx-1"
                name="skills"
                type="checkbox"
                value="angular"
              />
              <label htmlFor="angular">Angular</label>
              <ErrorMessage
                component="label"
                name="skills"
                className="text-red-500 block"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full mt-4 p-2 font-semibold"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormFormikYup;
