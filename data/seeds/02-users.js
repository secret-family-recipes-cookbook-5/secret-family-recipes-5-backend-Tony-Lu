exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'John',
          last_name: 'Doe',
          username: 'jd789',
          password: '1234'
        },
        {
          first_name: 'Jane',
          last_name: 'Smith',
          username: 'im!z1',
          password: '1234'
        },
        {
          first_name: 'Mister',
          last_name: 'Grinch',
          username: 'whohater88',
          password: '1234'  
        }
      ]);
    });
};
