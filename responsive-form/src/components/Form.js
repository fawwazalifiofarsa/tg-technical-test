import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../middleware/UserSlice";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [clickedFields, setClickedFields] = useState({
    name: false,
    phone: false,
    email: false,
    dob: false,
    password: false,
    confirmPassword: false,
  });
  const [blurredFields, setBlurredFields] = useState({
    name: false,
    phone: false,
    email: false,
    dob: false,
    password: false,
    confirmPassword: false,
  });
  const dispatch = useDispatch();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleInputClick = (field) => {
    setClickedFields((prevClickedFields) => ({
      ...prevClickedFields,
      [field]: true,
    }));
  };

  const handleInputBlur = (field) => {
    setBlurredFields((prevClickedFields) => ({
      ...prevClickedFields,
      [field]: true,
    }));
  };

  const getValidationMessage = (field, value) => {
    const result = ["border-gray-100", ""];
    switch (field) {
      case "name":
        if (blurredFields.name && value === "") {
          result[0] = "border-red-500";
          result[1] = "*Name is required";
          return result;
        } else if (
          clickedFields.name &&
          (/[0-9]/.test(value) || /[^a-zA-Z\s]/.test(value))
        ) {
          result[0] = "border-red-500";
          result[1] = "*Name must contain alphabet";
          return result;
        } else if (value !== "") {
          result[0] = "border-green-500";
        }
        return result;

      case "phone":
        if (blurredFields.phone && value === "") {
          result[0] = "border-red-500";
          result[1] = "*Phone is required";
          return result;
        } else if (value !== "") {
          result[0] = "border-green-500";
        }
        return result;

      case "email":
        if (blurredFields.email && value === "") {
          result[0] = "border-red-500";
          result[1] = "*Email is required";
          return result;
        } else if (
          clickedFields.email &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {
          result[0] = "border-red-500";
          result[1] = "*Must contain a valid email";
          return result;
        } else if (value !== "") {
          result[0] = "border-green-500";
        }
        return result;

      case "dob":
        if (blurredFields.dob && value === "") {
          result[0] = "border-red-500";
          result[1] = "*Date is required";
          return result;
        } else if (clickedFields.dob && getAge(value) < 17) {
          result[0] = "border-red-500";
          result[1] = "*Must be atleast 17 years old";
          return result;
        } else if (value !== "") {
          result[0] = "border-green-500";
        }
        return result;

      case "password":
        if (blurredFields.password && value === "") {
          result[0] = "border-red-500";
          result[1] = "*Password is required";
        } else if (
          clickedFields.password &&
          (value.length < 8 || value.length > 16)
        ) {
          result[0] = "border-red-500";
          result[1] = "*Password must be 8-16 characters";
        } else if (value !== "") {
          result[0] = "border-green-500";
        }
        return result;

      case "confirmPassword":
        if (blurredFields.confirmPassword && value === "") {
          result[0] = "border-red-500";
          result[1] = "*Password confirm is required";
        } else if (clickedFields.confirmPassword && !passwordMatch) {
          result[0] = "border-red-500";
          result[1] = "*Passwords does not match";
        } else if (value !== "") {
          result[0] = "border-green-500";
        }
        return result;
      default:
        break;
    }
  };

  const getAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  const isValid = () => {
    const validationFields = [
      { field: "name", value: name },
      { field: "phone", value: phone },
      { field: "email", value: email },
      { field: "dob", value: dob },
      { field: "password", value: password },
      { field: "confirmPassword", value: confirmPassword },
    ];

    for (let { field, value } of validationFields) {
      const validation = getValidationMessage(field, value);
      if (
        validation[0] === "border-red-500" ||
        validation[0] === "border-gray-100"
      ) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      dispatch(
        register({
          name: name,
          phone: phone,
          email: email,
          dob: dob,
          password: password,
        })
      );
    } else {
      return;
    }
  };

  return (
    <div className="bg-white w-full md:mx-8 lg:mx-24 xl:mx-40 sm:px-10 sm:py-12 py-4 rounded-3xl sm:border-2 border-gray-200 scale-[.93] sm:scale-100">
      <h1 className=" text-4xl font-bold">Register</h1>
      <p className="font-medium text-lg text-gray-500 mt-3">
        Please enter your details.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mt-5 sm:flex w-full">
          <div className="sm:w-1/2 sm:mt-0 mt-3">
            <div className="lg:px-3 md:px-2 px-1 w-full">
              <div className="flex">
                <label className="text-md font-medium">Full Name</label>
                <p className="block sm:hidden ml-1 text-red-500 text-sm mt-1">
                  {getValidationMessage("name", name)[1]}
                </p>
              </div>
              <input
                type="text"
                className={`w-full border-2 rounded-xl px-4 py-3 mt-1 outline-none ${
                  getValidationMessage("name", name)[0]
                }`}
                placeholder="Enter your full name"
                value={name}
                onClick={() => handleInputClick("name")}
                onBlur={() => handleInputBlur("name")}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="hidden sm:block text-red-500 text-sm mt-1">
                {getValidationMessage("name", name)[1]}
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-3">
            <div className="lg:px-3 md:px-2 px-1 w-full">
              <div className="flex">
                <label className="text-md font-medium">Phone</label>
                <p className="block sm:hidden ml-1 text-red-500 text-sm mt-1">
                  {getValidationMessage("phone", phone)[1]}
                </p>
              </div>
              <input
                type="number"
                className={`w-full border-2 rounded-xl px-4 py-3 mt-1 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                  getValidationMessage("phone", phone)[0]
                }`}
                placeholder="Enter your phone"
                value={phone}
                onClick={() => handleInputClick("phone")}
                onBlur={() => handleInputBlur("phone")}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className="hidden sm:block text-red-500 text-sm mt-1">
                {getValidationMessage("phone", phone)[1]}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 sm:flex w-full">
          <div className="sm:w-1/2 sm:mt-0 mt-3">
            <div className="lg:px-3 md:px-2 px-1 w-full">
              <div className="flex">
                <label className="text-md font-medium">Email</label>
                <p className="block sm:hidden ml-1 text-red-500 text-sm mt-1">
                  {getValidationMessage("email", email)[1]}
                </p>
              </div>
              <input
                type="email"
                className={`w-full border-2 rounded-xl px-4 py-3 mt-1 outline-none ${
                  getValidationMessage("email", email)[0]
                }`}
                placeholder="Enter your email"
                value={email}
                onClick={() => handleInputClick("email")}
                onBlur={() => handleInputBlur("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="hidden sm:block text-red-500 text-sm mt-1">
                {getValidationMessage("email", email)[1]}
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-3">
            <div className="lg:px-3 md:px-2 px-1 w-full">
              <div className="flex">
                <label className="text-md font-medium">Date of Birth</label>
                <p className="block sm:hidden ml-1 text-red-500 text-sm mt-1">
                  {getValidationMessage("dob", dob)[1]}
                </p>
              </div>
              <input
                type="date"
                className={`w-full border-2 rounded-xl px-4 py-3 mt-1 outline-none ${
                  getValidationMessage("dob", dob)[0]
                }`}
                value={dob}
                onClick={() => handleInputClick("dob")}
                onBlur={() => handleInputBlur("dob")}
                onChange={(e) => setDob(e.target.value)}
              />
              <p className="hidden sm:block text-red-500 text-sm mt-1">
                {getValidationMessage("dob", dob)[1]}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:flex w-full">
          <div className="sm:w-1/2 sm:mt-0 mt-3">
            <div className="lg:px-3 md:px-2 px-1 w-full">
              <div className="flex">
                <label className="text-md font-medium">Password</label>
                <p className="block sm:hidden ml-1 text-red-500 text-sm mt-1">
                  {getValidationMessage("password", password)[1]}
                </p>
              </div>
              <input
                type="password"
                className={`w-full border-2 rounded-xl px-4 py-3 mt-1 outline-none ${
                  getValidationMessage("password", password)[0]
                }`}
                placeholder="Enter your password"
                value={password}
                onClick={() => handleInputClick("password")}
                onBlur={() => handleInputBlur("password")}
                onChange={handlePasswordChange}
              />
              <p className="hidden sm:block text-red-500 text-sm mt-1">
                {getValidationMessage("password", password)[1]}
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-3">
            <div className="lg:px-3 md:px-2 px-1 w-full">
              <div className="flex">
                <label className="text-md font-medium">Confirm Password</label>
                <p className="block sm:hidden ml-1 text-red-500 text-sm mt-1">
                  {getValidationMessage("confirmPassword", confirmPassword)[1]}
                </p>
              </div>
              <input
                type="password"
                className={`w-full border-2 rounded-xl px-4 py-3 mt-1 outline-none ${
                  getValidationMessage("confirmPassword", confirmPassword)[0]
                }`}
                placeholder="Confirm your password"
                value={confirmPassword}
                onClick={() => handleInputClick("confirmPassword")}
                onBlur={() => handleInputBlur("confirmPassword")}
                onChange={handleConfirmPasswordChange}
              />
              <p className="hidden sm:block text-red-500 text-sm mt-1">
                {getValidationMessage("confirmPassword", confirmPassword)[1]}
              </p>
            </div>
          </div>
        </div>
        <div className="xl:px-48 md:px-36 sm:px-24 px-12 mt-8 flex flex-col gap-y-4">
          <button
            type="submit"
            className="transition-all active:duration-75 hover:scale-[1.01] ease-in-out active:scale-[.99] py-4 rounded-xl bg-gradient-to-tr from-violet-500 to-pink-500 text-white text-lg font-bold"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
