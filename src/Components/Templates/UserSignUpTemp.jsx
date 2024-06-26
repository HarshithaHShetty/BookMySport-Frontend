import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { userRegMethod } from '../../redux/slices/UserRegSlice'
import { useState } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

const UserSignUpTemp = () => {

    const dispatch = useDispatch()
    const navigate=useNavigate()

    const [userData, setuserData] = useState({
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setuserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!userData.userName || !userData.email || !userData.phoneNumber || !userData.password) {
            toast.error('Please fill in all required fields.', {
                duration: 3000,
                position: 'top-right'
            });
            return;
        }

        if (userData.password !== userData.confirmPassword) {
            toast.error('Passwords do not match', {
                duration: 3000,
                position: 'top-right'
            });
            return;
        }

        const response = await dispatch(userRegMethod(userData));


        const loadingToastId = toast.loading('Registering...', {
            duration: Infinity,
            position: 'top-right'
        });

        try {
            if (response.payload.success) {
                Cookies.set("token", response.payload.token)
                toast.success('Registration success', {
                    duration: 3000,
                    position: 'top-right'
                });
            }
            else {
                toast.error('User with mail exists', {
                    duration: 3000,
                    position: 'top-right'
                });
            }
        } catch (error) {
            toast.error('Something went wrong. Try again', {
                duration: 3000,
                position: 'top-right'
            });
        } finally {
            toast.dismiss(loadingToastId);
        }



    }

    return (
        <>
            <form>
                <div className="space-y-12">
                    <div className="pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Enter all the details below to start booking slots on BookMySport Platform
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="userName"
                                            id="userName"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Enter your username"
                                            minLength={5}
                                            maxLength={15}
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pb-12" style={{ marginTop: "-10px" }}>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="number"
                                        autoComplete="number"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-right gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={()=>navigate('/')}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
                <Toaster />
            </form>
        </>
    )
}

export default UserSignUpTemp