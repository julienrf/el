define(['el'], function (el) {
  describe("el", function() {

    it ('should create a DOM element', function () {
      var div = el('div')();
      expect(div).toEqual(jasmine.any(HTMLDivElement));
    });

    it ('should set element attributes', function () {
      var div = el('div', { 'class': 'foo', id: 'bar' })();
      expect(div.className).toBe('foo');
      expect(div.getAttribute('id')).toBe('bar');
    });

    it ('should build a tree', function () {
      var div = el('div')(el('span')(), el('div')());
      expect(div.childNodes.length).toBe(2);
    });

    it ('should build text nodes for non-node children', function () {
      var p = el('p')('Foo.');
      expect(p.childNodes.length).toBe(1);
      expect(p.textContent).toBe('Foo.');

      var span = el('span')(42);
      expect(span.textContent).toBe('42');
    });

    it ('should accept element lists as children', function () {
      var items = ['foo', 'bar', 'baz'];
      var ul = el('ul')(
          items.map(function (item) { return el('li')(item) })
      );
    });
  });
});
