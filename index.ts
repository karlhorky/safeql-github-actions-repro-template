import postgres from 'postgres';

const sql = postgres();

export async function getProducts() {
  const products = await sql<{ col: number }[]>`SELECT 1 AS col`;
  return products;
}
