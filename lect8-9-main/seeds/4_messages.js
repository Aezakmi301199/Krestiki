/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    { user_id:1, message:'Привет друзья'},
    { user_id:7, message:'All time ALL night'},
    { user_id:4, message:'ЗА ВАРЕНЬЕ'},
    { user_id:6, message:'Счастье на Za горами'},
    { user_id:1, message:'Пошёл нахуй'},
    { user_id:7, message:'Вагабунд'},
    { user_id:4, message:'ЗА печенье'},
    { user_id:6, message:'Я помню чудной мгновенье'},
    { user_id:1, message:'Синус,я УРАЛ ПРИЕМ'},
    { user_id:7, message:'МЫ ПАДАЕМ'},
    { user_id:4, message:'По секрут мы ГЕИ'},
    { user_id:8, message:'Продам гараж'},
    { user_id:9, message:'Не ВЕРЮ'},
    { user_id:8, message:'Печален ты; признайся, что с тобой.— Люблю, мой друг! — «Но кто ж тебя пленила?»— Она.— «Да кто ж? Глидера ль, Хло.'},
    { user_id:2, message:'Эльвина, милый друг, приди, подай мне руку,Я вянрыты дни мои?Ужели никогда нас утро не застанетВ объятиях любви?'},
    { user_id:10, message:'Вышел утром я в лес '},
    { user_id:7, message:'Иди своей дорогой,сталкер'},
    { user_id:9, message:'Тут кто-то есть?'},
    { user_id:3, message:'Симулятор камня'},
    { user_id:8, message:'Давно уже как бы'},
  ]);
};
