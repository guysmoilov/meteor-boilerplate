describe("Main page client integration test", function() {

  beforeEach(function(done) {
    Router.go('/');
    Tracker.afterFlush(done);
  });

  beforeEach(waitForRouter);

  it('should be green', function() {
    expect(true).toBe(true);
  });
});
