/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */    
 export function up(knex) {
    return knex.schema.createTable( 'players',  function (table) {
        table.integer('game_id').notNullable().references('id').inTable('games');
        table.integer('user_id').notNullable().references('id').inTable('users');
        table.integer('number').nullable().comment('Номер игрока по порядку');
        table.unique(['user_id', 'game_id']).unique(['game_id', 'number']).comment('Игроки');
        table.timestamp('create_game').defaultTo(knex.fn.now());
        table.timestamp('updated_at').nullable()
      })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
 return knex.schema.dropTable('players')
}
//.references('id').inTable('users')
// .references('id').inTable('users')