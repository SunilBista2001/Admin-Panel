import React from "react";

const User = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile Picture"
        className="rounded-full w-32 h-32 my-4"
      />
      <h1 className="text-2xl font-bold">John Doe</h1>
      <p className="text-gray-500">Software Developer</p>
      <div className="my-4 w-full max-w-xl bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-2">Bio</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          tellus vel sem aliquam, nec elementum massa tincidunt. Vestibulum a
          vestibulum libero, eu laoreet velit. Donec id ante nec nulla molestie
          pharetra. Sed aliquet risus nec justo accumsan efficitur.
        </p>
      </div>
    </div>
  );
};

export default User;
