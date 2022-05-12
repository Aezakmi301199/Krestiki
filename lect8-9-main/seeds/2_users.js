/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {login: 'alex1', password:'1' ,role:'admin'},
    {login: 'baha', password:'1' },
    {login: 'vadim', password:'1' },
    {login: 'dima', password:'2' },
    {login: 'andrei', password:'2' },
    {login: 'oxana', password:'2' },
    {login: 'ilya', password:'2' },
    {login: 'oleg', password:'2' },
    {login: 'gerald', password:'2' },
    {login: 'sonya', password:'2' },
  ]);
}
        