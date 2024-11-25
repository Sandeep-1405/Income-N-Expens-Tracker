import React from 'react';

const Signup = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">Signup</h1>
                
                <div className="mb-4">
                    <label 
                        htmlFor="firstname" 
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        First Name
                    </label>
                    <input 
                        type="text" 
                        id="firstname" 
                        placeholder="Your First Name" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                
                <div className="mb-4">
                    <label 
                        htmlFor="lastname" 
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Last Name
                    </label>
                    <input 
                        type="text" 
                        id="lastname" 
                        placeholder="Your Last Name" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                
                <div className="mb-4">
                    <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Your Email" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                
                <div className="mb-4">
                    <label 
                        htmlFor="phonenumber" 
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Phone Number
                    </label>
                    <input 
                        type="number" 
                        id="phonenumber" 
                        placeholder="Your Phone Number" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                
                <div className="mb-6">
                    <label 
                        htmlFor="password" 
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="*******" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                
                <div className="flex justify-center">
                    <button 
                        type="button" 
                        className="w-full py-2 text-white bg-blue-700 hover:bg-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                    >
                        Signup
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
