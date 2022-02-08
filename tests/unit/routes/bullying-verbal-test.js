import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bullying-verbal', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bullying-verbal');
    assert.ok(route);
  });
});
