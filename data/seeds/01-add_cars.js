exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          make: 'Ford',
          model: 'Mustang',
          year: '1974'
        },
        {
          id: 2,
          make: 'Volkswagon',
          model: 'Beatle',
          year: '1988'
        },
        {
          id: 3,
          make: 'Ford',
          model: 'Taurus',
          year: '1992'
        }
      ]);
    });
};
