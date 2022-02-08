import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | comportament-agresiv', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:comportament-agresiv');
    assert.ok(route);
  });
});
