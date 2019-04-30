import assert from 'assert';
import { greet } from './../src/greet';

describe('Greet', () => {
  it('should say "Hello World!"', () => {
    assert.equal('Hello World!', greet('World'));
  });
});
