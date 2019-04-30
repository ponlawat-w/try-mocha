import assert from 'assert';
import { errorCallback } from './../src/error-callback';

describe('IndexOfArray', () => {
  it('should return -1 when the value is not present', () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});

describe('General', () => {
  describe('Immediate', () => {
    it('double done', done => {
      setImmediate(done);
    });
  });
  describe('Async', () => {
    it('should be done without error', done => {
      errorCallback(true, error => {
        if (error) {
          done(error);
        } else {
          done();
        }
      });
    });
  });
});
