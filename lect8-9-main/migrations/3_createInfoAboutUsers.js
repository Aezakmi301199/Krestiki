/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return knex.schema.createTable( 'infoaboutusers',  function (table) {
        table.integer('user_id');
        table.string('email').nullable().unique();
        table.string('phoneNumber');
        table.boolean('isActivated').defaultTo(0);
        table.string('activationLink');
        table.timestamp('create_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at')
        table.foreign('user_id').references('id').inTable('users');
      })
}

/**cl
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
 return knex.schema.dropTable('infoaboutusers')
}


