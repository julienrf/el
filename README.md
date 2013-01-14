el.js
=====

Reduce the boilerplate for creating DOM fragments using a declarative API.

# Overview

Consider the following example:

    var items = ['foo', 'bar', 'baz'];
    var dom = el('article')(
      el('h1')('This is an example'),
      el('ul', { 'class': 'list' })(
        items.map(function (item) { return el('li')(item) })
      )
    );

The above code is equivalent to:

    var items = ['foo', 'bar', 'baz'];
    var dom = document.createElement('article');
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('This is an example');
    dom.appendChild(h1);
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'list');
    items.forEach(function (item) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(item));
      ul.appendChild(li);
    });
    dom.appendChild(ul);

And it produces a DOM tree equivalent to the following HTML fragment:

    <article>
        <h1>This is an example</h1>
        <ul class=list>
          <li>foo</li>
          <li>bar</li>
          <li>baz</li>
        </ul>
    </article>

For more examples see the specs.

# Installation

As there is no standard way to package JavaScript libraries, I suggest you to configure require.js as follows:

    require.config({
      paths: {
        'el': 'https://github.com/julienrf/el/raw/master/el'
      }
    });

Then you can import it as follows:

    require('el', function (el) {
        document.body.appendChild(el('h1')('Hello World!'));
    });