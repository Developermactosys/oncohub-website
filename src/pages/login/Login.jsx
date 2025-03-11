
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100  ">
      <div className="bg-white border border-[#B1B1B1] p-6 rounded-lg w-full max-w-md px-9 py-16 shadow-lg">
        <h2 className="text-2xl font-semibold text-center">Welcome back,</h2>

        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg    font-bold">Email or Name</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-2 border border-[#B1B1B1] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="abc123@gmail.com"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-lg    font-bold">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-2 border border-[#B1B1B1] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Password"
            />
          </div>
          
          <div className="flex items-center mb-4">
            <input type="checkbox" id="" className="mr-2" />
            <label htmlFor="keepLogin" className="text-gray-700 text-base font-medium">Keep me login</label>
          </div>
          
          <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-600 transition">Login</button>
        </form>
        
        <div className="my-4 text-center  text-[#0000004D]">OR</div>
        
        <div className="flex gap-4">
          <button className="flex items-center justify-center w-full bg-white border border-[#B1B1B1] py-2 rounded-lg shadow-sm hover:shadow-md transition">
            <img src='' alt="Google" className="w-5 h-5 mr-2" />
            Login with Google
          </button>
          
          <button className="flex items-center text-base border-[#B1B1B1] justify-center w-full bg-primary text-white py-2 rounded-lg shadow-sm hover:bg-primary transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.svg" alt="Facebook" className="w-5 h-5 mr-2" />
            Login with Facebook
          </button>
        </div>
        
        <p className="text-end   text-gray-700 text-lg font-semibold mt-4">
          Don't have an account? <a href="#" className="text-primary">Create new account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
