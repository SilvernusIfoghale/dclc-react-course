import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import errorMap from "zod/locales/en.js";

const FormReactHookForm = () => {
  //zod schema
  const schema = z.object({
    firstName: z.string().trim().min(2, "First name is required"),
    lastName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
    jobRole: z.string().min(1, "Job role is required"),
    gender: z.enum(["male", "female", "other"], {
      errorMap: () => ({ message: "Gender is required" }),
    }),
    getMessage: z.string().optional(),
    skills: z.array(z.string()).min(1, "At least one skill is required"),
  });
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    // try {
    //     await new Promise((resolve)=>setTimeout(resolve, 1000));
    //     throw new Error();
    // } catch (error) {
    //     setError('email', {
    //         message: "This email is already taken"
    //     })
    // }
  };
  return (
    <div className="flex justify-center  my-10">
      <div className="border-2 p-10">
        <h1 className="pb-5 text-center">FormReactHookForm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" py-2">
            <label htmlFor="firstName" className="block">
              First Name
            </label>
            <input
              {...register("firstName")}
              type="text"
              placeholder="James"
              className="border-2 w-[350px] p-2 rounded-md"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className=" py-2">
            <label htmlFor="lastName" className="block">
              Last Name
            </label>
            <input
              {...register("lastName")}
              type="text"
              placeholder="Smith"
              className="border-2 w-[350px] p-2 rounded-md"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
          <div className=" py-2">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="johndoe@gmail.com"
              className="border-2 w-[350px] p-2 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className=" py-2">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="******"
              className="border-2 w-[350px] p-2 rounded-md"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className=" py-2">
            <label htmlFor="confirmPassword" className="block">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="******"
              className="border-2 w-[350px] p-2 rounded-md"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className=" py-2">
            <label htmlFor="jobRole" className="block">
              Job Role
            </label>
            <select
              name="jobRole"
              id="jobRole"
              {...register("jobRole")}
              className="border-2 w-[350px] p-2 rounded-md"
            >
              <option value="" disabled>
                Job Role
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="quality-analyst">Quality Analyst</option>
            </select>

            {errors.jobRole && (
              <p className="text-red-500">{errors.jobRole.message}</p>
            )}
          </div>
          <div className=" py-2" {...register("gender")}>
            <label htmlFor="gender" className="block">
              Gender
            </label>
            <div className="py-1">
              <input type="radio" name="gender" id="male" className="mx-1" />
              <label htmlFor="male">Male</label>

              <input type="radio" name="gender" id="female" className="mx-1" />
              <label htmlFor="female">Female</label>
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}
          </div>
          <div className=" py-2">
            <label htmlFor="getMessage" className="block">
              Message
            </label>
            <textarea
              {...register("getMessage")}
              name="getMessage"
              id="getMessage"
              className="border-2 w-[350px] p-2 rounded-md resize-none"
            ></textarea>

            {errors.getMessage && (
              <p className="text-red-500">{errors.getMessage.message}</p>
            )}
          </div>
          <div className=" py-2">
            <label htmlFor="skills" className="block">
              Skills
            </label>
            <div className="flex gap-3" {...register("skills")}>
              <div>
                <input
                  type="checkbox"
                  className="border-2  p-2 rounded-md mr-1"
                />
                <label htmlFor="nodeJs">NodeJs</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="border-2 p-2 rounded-md mr-1"
                />
                <label htmlFor="ractJs">ReactJs</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="border-2 p-2 rounded-md mx-1"
                />
                <label htmlFor="angular">Angular</label>
              </div>
            </div>
            {errors.skills && (
              <p className="text-red-500">{errors.skills.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white font-bold w-full rounded-sm mt-5 py-1"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormReactHookForm;
