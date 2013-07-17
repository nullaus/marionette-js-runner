suite('a test', function() {
  console.log('before running test log');
  test('yey', function() {
  });

  test('pending');
  suite('another suite fail', function() {
    test('throw', function() {
      throw new Error('xxx');
    });
  });

  test('multiple console logs', function(done) {
    console.log('yey');
    setTimeout(function() {
      console.log('another!');
      done();
    });
  });
});
