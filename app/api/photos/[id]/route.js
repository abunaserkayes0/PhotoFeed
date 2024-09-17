import { getByPhotoId } from '@/lib/data';
import { NextResponse } from 'next/server';


export async function GET(_req, { params }) {

    const { id } = params;
    const photo = getByPhotoId(id);
    return NextResponse.json(photo);

}