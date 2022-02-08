import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hartuirea-fizica', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:hartuirea-fizica');
    assert.ok(route);
  });
});
