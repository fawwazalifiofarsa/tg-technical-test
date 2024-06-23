import React from 'react';

const FormInput = ({
  label,
  type,
  value,
  placeholder,
  validationMessage,
  onClick,
  onBlur,
  onChange
}) => (
  <div className="sm:w-1/2 sm:mt-0 mt-3">
    <div className="lg:px-3 md:px-2 px-1 w-full">
      <div className="flex">
        <label className="text-md font-medium">{label}</label>
        <p className="block sm:hidden ml-1 text-red-500 text-sm mt-1">
          {validationMessage}
        </p>
      </div>
      <input
        type={type}
        className={`w-full border-2 rounded-xl px-4 py-3 mt-1 outline-none ${
          validationMessage ? 'border-red-500' : ''
        }`}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        onBlur={onBlur}
        onChange={onChange}
      />
      <p className="hidden sm:block text-red-500 text-sm mt-1">
        {validationMessage}
      </p>
    </div>
  </div>
);

export default FormInput;
