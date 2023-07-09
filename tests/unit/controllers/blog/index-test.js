import { module, test } from 'qunit';
import { setupTest } from 'ember-rassloff-info/tests/helpers';

module('Unit | Controller | blog/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:blog/index');
    assert.ok(controller);
  });
});
