import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"

export default async function Page({ params }) {
    
    const client = await clientPromise;
    const db = client.db("blinkit")
    const collection = db.collection("url")
    
    const short = (await params).short
    
    const exist = await collection.findOne({shorturl:short})
    
    if(exist){
        redirect(exist.url)
    }
    else{
        redirect(process.env.NEXT_PUBLIC_HOST)
    }

    return <div>My shorturl: {short}</div>
  }