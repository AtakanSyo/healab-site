import { getCollection } from 'astro:content';

export async function getVisibleResearch() {
  return (await getCollection('research')).sort((a, b) => a.data.order - b.data.order);
}
