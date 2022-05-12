/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return knex.schema.createTable( 'messages',  function (table) {
        table.increments('id');
        table.integer('user_id');
        table.string('message').notNullable();
        table.foreign('user_id').references('id').inTable('users');
        
      })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
 return knex.schema.dropTable('messages')
}

