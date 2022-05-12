
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
  return knex.schema.createTable( 'roles',  function (table) {
      table.increments('id');
      table.string('role').notNullable().unique();
    })
}

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
export function down(knex) {
return knex.schema.dropTable('roles')
}
