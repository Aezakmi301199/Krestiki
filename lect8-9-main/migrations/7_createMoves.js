/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return knex.schema.createTable( 'moves',  function (table) {
        table.increments('id');
        table.integer('game_id').references('id').inTable('games');
        table.integer('step_number').notNullable().comment('Номер хода');
        table.integer('position').notNullable().comment('Позиция на которую сделан ход');
        table.string('message').notNullable();
        table.unique(['game_id', 'step_number']).unique(['game_id', 'position']).comment('Ходы');
      })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
 return knex.schema.dropTable('moves')
}

