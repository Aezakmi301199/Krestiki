
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return knex.schema.createTable( 'refreshtokens',  function (table) {
        table.increments('id');
        table.integer('user_id');
        table.string('token').nullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table.foreign('user_id').references('id').inTable('users');
      })
  }
  
  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  export function down(knex) {
  return knex.schema.dropTable('refreshtokens')
  }
  