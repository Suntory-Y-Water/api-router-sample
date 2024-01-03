import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = ['john', 'doe', 'alice', 'bob'];
  return NextResponse.json(data, { status: 200 });
};
