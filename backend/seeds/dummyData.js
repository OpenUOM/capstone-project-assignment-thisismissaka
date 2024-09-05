exports.seed = function(knex) {
  return knex('dummyData').del()
    .then(function () {
      return knex('dummyData').insert([
        { id: 0o1, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o2, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o3, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o4, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o5, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o6, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
      ]);
    });
};