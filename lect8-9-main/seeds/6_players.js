/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('players').del()
  await knex('players').insert([
    {game_id:1,user_id:1},
    {game_id:1,user_id:2},
    {game_id:2,user_id:3},
    {game_id:2,user_id:1},
    {game_id:3,user_id:4},
    {game_id:3,user_id:6},
    {game_id:4,user_id:7},
    {game_id:4,user_id:9},
    {game_id:5,user_id:9},
    {game_id:5,user_id:10}
  ]);
}


