exports.up = function (knex) {
  return knex.schema.table('cars', (table) => {
    table.decimal('VIN', 17).unique().notNullable();
    table.decimal('mileage').notNullable();
    table.text('transmissionType', 128);
    table.text('statusOfTitle', 128);
  });
};

exports.down = function (knex) {
  return knex.schema.table('cars', (table) => {
    table.dropColumn('VIN');
    table.dropColumn('mileage');
    table.dropColumn('transmissionType');
    table.dropColumn('statusOfTitle');
  });
};
