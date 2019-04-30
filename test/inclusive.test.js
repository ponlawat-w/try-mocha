import assert from 'assert';

describe('Inclusive', function () {
  it('shoud be test', () => {
    assert.equal(true, true);
  });

  it.skip('shoud not be test', () => {
    assert.equal(true, false);
  });

  it('should be skipped', function() {
    this.skip();
    assert.equal(true, false);
  });
});
