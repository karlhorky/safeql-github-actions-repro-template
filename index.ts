import postgres from 'postgres';

const sql = postgres();

export async function getProducts() {
  const products = await sql`SELECT * FROM products`;
  return products;
}
