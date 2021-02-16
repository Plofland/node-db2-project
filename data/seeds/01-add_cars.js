exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          make: 'Ford',
          model: 'Mustang',
          year: 1974,
          VIN: 2345678910111211,
          statusOfTitle: 'Good',
          transmissionType: 'manual',
          mileage: 52345
        },
        {
          id: 2,
          make: 'Volkswagon',
          model: 'Beatle',
          year: 1988,
          VIN: 2345678910111219,
          statusOfTitle: 'Good',
          transmissionType: 'automatic',
          mileage: 42345
        },
        {
          id: 3,
          make: 'Ford',
          model: 'Taurus',
          year: 1992,
          // eslint-disable-next-line
          VIN: 2345678910111213,
          statusOfTitle: 'Good',
          transmissionType: 'automatic',
          mileage: 92345
        }
      ]);
    });
};
