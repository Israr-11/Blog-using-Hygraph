import React from 'react'

const Footer = () => {
    return (
        //For connecting this subscribe to email.js simply put onsubmit in footer and then use the function
        //to send data as done in portfolio form
        <div>
            <footer ClassName="flex justify-center px-4 text-gray-100 bg-gray-800">
                <div ClassName="container py-5">
                    <h1 ClassName="text-center text-lg font-bold lg:text-2xl">
                        Recieve new post's alerts <br /> right in your inbox
                    </h1>

                    <div ClassName="flex justify-center mt-6">
                        <div ClassName="bg-white rounded-lg">
                            <div ClassName="flex flex-wrap justify-between md:flex-row">
                                <input type="email" ClassName="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email" />
                                <button type="submit" ClassName="w-full m-1 p-2 text-sm bg-red-800 rounded-lg font-semibold uppercase lg:w-auto">subscribe</button>
                            </div>
                        </div>
                    </div>
                    {/* <p ClassNameName='mt-3 text-center text-lg'>Disclaimer!</p> */}

                    <hr ClassName="h-px mt-6 bg-gray-700 border-none" />

                    <p ClassNameName='mt-3 text-center text-lg text-black font-bold bg-white'>&copy; 2022 All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;