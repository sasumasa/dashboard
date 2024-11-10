'use server';

import { revalidateTag } from 'next/cache';

export async function justRevalidate() {
  console.log('=================JUST REVALIDATE health==================');
  revalidateTag('health');
  console.log('=================JUST REVALIDATE END==================');
}
