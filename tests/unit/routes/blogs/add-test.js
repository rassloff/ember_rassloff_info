import { module, test } from 'qunit';
import { setupTest } from 'ember-rassloff-info/tests/helpers';

module('Unit | Route | blogs/add', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:blogs/add');
    assert.ok(route);
  });
});
