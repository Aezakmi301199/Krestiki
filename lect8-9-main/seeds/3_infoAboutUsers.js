/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('infoaboutusers').del()
  await knex('infoaboutusers').insert([
    {user_id:1,email:'konstantigov@gmail.com',phoneNumber:89123816131},
    {user_id:2,email:'bahapizza@gmail.com',phoneNumber:89123816132},
    {user_id:3,email:'vadimshpala@gmail.com',phoneNumber:89123816133},
    {user_id:4,email:'Dimashoba@gmail.com',phoneNumber:89123816134},
    {user_id:5,email:'AndreiFootgei@gmail.com',phoneNumber:89123816135},
    {user_id:6,email:'oxy@gmail.com',phoneNumber:89123816136},
    {user_id:7,email:'bonduk@gmail.com',phoneNumber:89123816137},
    {user_id:8,email:'oleg@gmail.com',phoneNumber:89123816138},
    {user_id:9,email:'gerald@gmail.com',phoneNumber:89123816139},
    {user_id:10,email:'sonya@gmail.com',phoneNumber:89123816150},
  ]);
}

