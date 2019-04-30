import assert from 'assert';

describe('Duration', function() {
  describe('SlowOrQuick', function() {
    this.slow(1000);
  
    it('is quick', function(done) {
      setTimeout(() => { done(); }, 100);
    });
  
    it('is quite slow', function(done) {
      setTimeout(() => { done(); }, 600);
    });
  
    it('is slow', function(done) {
      setTimeout(() => { done(); }, 1100);
    });
  });
  describe('TimeOut', function() {
    this.timeout(500);

    it('should be in time', function(done) {
      setTimeout(() => { done(); }, 100);
    });
  });
});
