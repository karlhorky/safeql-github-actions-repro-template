import postgres from 'postgres';
import { Animal } from './migrations/001-animals.js';

const sql = postgres();

export async function getAnimals() {
  const animals = await sql<Animal[]>`
    SELECT * FROM animalssss
  `;
  return animals;
}
