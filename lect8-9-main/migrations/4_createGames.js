/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */    
 export function up(knex) {
    return knex.schema.createTable( 'games',  function (table) {
        table.increments('id');
        table.integer('winner_id').nullable();
        table.timestamp('create_game').defaultTo(knex.fn.now());
        table.timestamp('updated_at').nullable()
      })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
 return knex.schema.dropTable('games')
}
//.references('id').inTable('users')
// .references('id').inTable('users')