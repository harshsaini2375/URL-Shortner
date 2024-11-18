import React from 'react'

const page = () => {
    return (
        <div className='border-2 border-gray-500 rounded-xl w-[80vw] m-auto h-[70vh] md:h-[80vh] px-5 py-10 mt-5 overflow-y-scroll overflow-x-hidden'>
            <h1 className='text-3xl font-extrabold text-center'>About</h1>
            <h2 className='text-2xl font-bold mt-5 mb-1'>About Our URL Shortener</h2>
            <p className='text-xl'>Welcome to our URL shortener service. We are passionate about making long, unwieldy links more manageable. Whether you are sharing a link on social media, in an email, or just want to tidy up your URLs, we got you covered.</p>
            <h2 className='text-2xl font-bold mt-5 mb-1'>What We Do</h2>
            <p className='text-xl'>Input Your Long URL &#58; Paste your original link into our input field. <br />
                Click on Generate &#58; Hit the magic button You will get a compact, easy to share link. <br />
                Share Everywhere &#58; Use the shortened link in your tweets, blog posts, or anywhere else you need it.</p>



        </div>
    )
}

export default page
