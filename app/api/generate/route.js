import clientPromise from "@/lib/mongodb";


export async function POST(request) {
    
    // establishing connections
    const client = await clientPromise;
    const db = client.db("blinkit")
    const collection = db.collection("url")
    
    const body = await request.json()  
    
    // checking if shorturl aiready exists
    const exist = await collection.findOne({shorturl:body.shorturl})
    
    if(exist){
        return Response.json({ message: 'shortURL already exists', success:false, Error:true })
    }

    collection.insertOne({
        url:body.url,
        shorturl:body.shorturl
    })

    return Response.json({ message: 'shortURL generated', success:true, Error:false })
}