/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return knex.schema.createTable( 'users',  function (table) {
        table.increments('id');
        table.string('login').notNullable().unique();
        table.string('password').notNullable();
        table.string('status').notNullable().defaultTo('active')
        table.string('role').defaultTo('user');
        table.foreign('role').references('role').inTable('roles');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').nullable();
      })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
 return knex.schema.dropTable('users')
}

