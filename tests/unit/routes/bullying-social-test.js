import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bullying-social', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bullying-social');
    assert.ok(route);
  });
});
