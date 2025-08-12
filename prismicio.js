// prismicio.js
import * as prismic from '@prismicio/client';

export const repositoryName = 'your-repo-name'; // replace with your repo name

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN, // optional if private repo
});
