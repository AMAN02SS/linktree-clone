export const runtime = "nodejs"

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
      const body = await request.json();
      const client = await clientPromise;
      const db = client.db("linktree")
      const collection = db.collection("links")

    const doc = await collection.findOne({ handle: body.handle })
    console.log(doc)
    if (doc) {
      return NextResponse.json({ success: false, error: true, message: 'Bad News! Linktree handle already exist, try different handle' })
    }

    const result = await collection.insertOne(body)
    return NextResponse.json({ success: true, error: false, message: 'Yep! Your Linktree is created successfully', result: result })
  } catch (error){
    return NextResponse.json({success: false, error: error.message}, {status: 500})
  }
}
