import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cyberbullying', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:cyberbullying');
    assert.ok(route);
  });
});
