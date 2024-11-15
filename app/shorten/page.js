"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState('')
    const [mylink, setmylink] = useState('')

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
                seturl("")
                setshorturl("")
                setmylink(shorturl)
                alert(result.message)
                console.log(result)
            })
            .catch((error) => console.error(error));

    }

    return (
        <>
            <div className="form w-[30vw] h-[40vh] border-2 border-gray-400 bg-purple-200 my-20 rounded-lg px-5 py-5 m-auto">
                <h1 className='font-bold text-xl mb-4'>Generate your short URLs</h1>
                <input className='border-2 border-gray-400 rounded-md px-2 w-full my-1 py-1' type="text" placeholder='Enter URL' value={url} onChange={e => { seturl(e.target.value) }} />

                <input className='border-2 border-gray-400 rounded-md px-2 w-full my-1 py-1' type="text" placeholder='Enter your preferred short URL' value={shorturl} onChange={e => { setshorturl(e.target.value) }} />

                <button onClick={generate} disabled={!url || !shorturl} className='bg-purple-600 disabled:bg-purple-400  py-3  rounded-lg text-white w-full font-bold mt-5 '>Generate</button>


                {mylink && <div >
                    <h1 className='font-bold mt-5'>Your link</h1>
                    <Link className='text-blue-700' target='_blank' href={`/${mylink}`}>{`${process.env.NEXT_PUBLIC_HOST}${mylink}`}</Link>
                </div>}
            </div>
        </>
    )
}

export default Shorten
