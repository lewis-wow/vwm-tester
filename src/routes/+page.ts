import type { Question } from '../types.js';

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  const questions: Question[] = await fetch('/questions.json').then((r) => r.json());

  return {
    questions,
  };
};
