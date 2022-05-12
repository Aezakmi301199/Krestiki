/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('games').del()
  await knex('games').insert([
    {winner_id:1},
    {winner_id:3},
    {winner_id:6},
    {winner_id:7},
    {},
  ]);
}


