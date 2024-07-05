import type { PageLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageLoad;

// Rendering strategies
export const prerender = true;
export const ssr = false;