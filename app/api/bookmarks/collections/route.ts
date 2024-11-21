import { getCollections } from '@/lib/raindrop';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const collections = await getCollections();
    return NextResponse.json(collections);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch collections' }, 
      { status: 500 }
    );
  }
}