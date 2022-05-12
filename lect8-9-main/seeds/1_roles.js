/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    {id: 1, role: 'user'},
    {id: 2, role: 'admin'},
  ]);
}