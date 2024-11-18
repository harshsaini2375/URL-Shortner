"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, setUrl] = useState('')
    const [shorturl, setShorturl] = useState('')
    const [mylink, setMylink] = useState('')

    const generate = () => {

        // here we are creating headers object that ensures data sent is json formst
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // this is the data we want to send to request body
        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        
        // here we are fetching the data
        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setMylink(shorturl)              
                setUrl("")
                setShorturl("")
                alert(result.message)
                console.log(result)
            })
            .catch((error) => console.error(error));
    }

    return (
        
            <div className="form w-[80vw] md:w-[30vw] h-[40vh] border-2 border-gray-400 bg-purple-200 my-20 rounded-lg px-5 py-5 m-auto flex flex-col relative items-center">
                <h1 className='font-extrabold text-2xl text-purple-800 mb-4'>Generate Your Short URLs</h1>
                <input className='border-2 border-gray-400 rounded-md px-2 w-full md:w-[26vw] my-1 py-1 hover:w-full hover:py-2 hover:border-[3px]  hover:border-purple-900 transition-all ease-in-out duration-100 ' type="text" placeholder='Enter URL' value={url} onChange={e => { setUrl(e.target.value) }} />

                <input className='border-2 border-gray-400 rounded-md px-2 w-full md:w-[26vw] my-1 py-1 hover:w-full hover:border-[3px]  hover:border-purple-900 transition-all ease-in-out duration-100 hover:py-2' type="text" placeholder='Enter your preferred short URL' value={shorturl} onChange={e => { setShorturl(e.target.value) }} />

                <button onClick={generate} disabled={!url || !shorturl} className='bg-purple-600 disabled:bg-purple-400  py-3 cursor-pointer rounded-lg text-white w-full md:w-[26vw] font-bold mt-5 hover:w-full  hover:border-purple-900 hover:border-[2px] hover:py-4 transition-all ease-in-out duration-100  '>Generate</button>

             {mylink && <div className='flex absolute bottom-3' >
                    <h1 className='font-bold pr-3'>Your link</h1>
                    <Link className='text-blue-700 ' target='_blank' href={`/${mylink}`}>{`${process.env.NEXT_PUBLIC_HOST}${mylink}`}</Link>
                </div>}
            </div>
        
    )
}

export default Shorten
