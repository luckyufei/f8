Mobile UI React Components
==========================

[![Build Status](https://travis-ci.org/junewinds/jmui.svg?branch=master)](https://travis-ci.org/junewinds/jmui?branch=master)
[![dependencies](https://david-dm.org/junewinds/jmui.svg)](https://david-dm.org/junewinds/jmui)
[![devDependency Status](https://david-dm.org/junewinds/jmui/dev-status.svg)](https://david-dm.org/junewinds/jmui#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Live Demo
---------

https://junewinds.github.io/jmui

Features
--------

* Designed for mobile usage
* An Enterprise-class design language and high quality UI style
* Include IOS and Material Themes base on Framework7(https://github.com/nolimits4web/Framework7)
* Rich library of mobile UI components
  * View
  * Pages
  * TransitionPages
  * Page
  * Grid
  * Accordion
  * Navbar
  * Toolbar
  * Tabbar
  * Form
    * StaticField
    * TextField
    * CheckField
    * RadioField
  * Button
  * NumberInput
  * Card
  * List
  * InfiniteScroll
  * Notification
  * Modal
  * Block
  * Preloader
  * Picker
  * Icon
  * Image
  * ...

Requirements
------------

* node `^4.3.0`
* npm `^3.0.0`
* react `^0.14.0`

Install
-------

```bash
npm install jmui
```

Usage
-----

```jsx
import { Button } from 'jmui'
ReactDOM.render(<Button />, mountNode);
```

Import style:

- IOS theme

```jsx
import 'jmui/styles/jmui.ios.core.css'
```

Import color schema:

- Blue

```jsx
import 'jmui/styles/jmui.ios.theme.blue.css'
```

- All colors: ['black', 'gray', 'blue', 'white', 'green', 'lightblue', 'orange', 'pink', 'red', 'yellow']

TODO
----

* guide
* kitchen sink
* ci test case
* other docs

Contributing
------------

We welcome all contributions, please submit any ideas as [pull requests](https://github.com/junewinds/jmui/pulls) or as a [GitHub issue](https://github.com/junewinds/jmui/issues).
