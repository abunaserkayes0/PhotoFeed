import { getByPhotos } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
    const photos = getByPhotos();
    return NextResponse.json(photos);
}