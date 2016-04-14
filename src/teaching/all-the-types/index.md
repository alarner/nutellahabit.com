---
title: "All the types!"
description: Knowing your types is one of the most useful tools you have available to you as a programmer. In JavaScript, types can be super confusing. Here are some examples of each of the types.
date: 2016-04-16
layout: post.html
collection: teaching
---

Knowing your types is one of the most useful tools you have available to you as a programmer. In JavaScript, types can be super confusing. Here are some examples of each of the types.

## Boolean

```js
true
false
7 === 5
7 !== 5
```

## Number

```js
1
3
18
-17.6
12-7.2
```

## String

```js
'hello'
'hello'+'world'
'hello'+' '+'world'
```

## Array

```js
[1,2,3,4]
['one fish', 'two fish', 'red fish', 'blue fish']
[[1,2], [3,4], [5,6]]
'this is a test'.split(' ')
```

## Object

### Date

_Dates are a type of Object_

```js
var now = new Date();
```

### RegExp

_Regular Expressions are a type of Object_

```js
var checkName = new RegExp('[a-zA-Z]+ [a-zA-Z]+');
var checkName = /[a-zA-Z]+ [a-zA-Z]+/;
```

### Vanilla JavaScript Element

_Vanilla JavaScript Elements are a type of Object_

```js
document.querySelector('#foo')
document.querySelector('main')
document.getElementById('foo')
e.target
```

### jQuery Element

_jQuery Elements are a type of Object_

```js
$('main')
$('#foo')
$('.bar')
$(e.target)
```
### React Element

_React Elements are a type of Object_

```js
<UniForm />
React.createElement(UniForm)
```

### Backbone View

_Backbone Views are a type of Object_

```js
var unicornDisplay = new UnicornView();
```

### Backbone Model

_Backbone Models are a type of Object_

```js
var unicorn = new UnicornModel();
```

### Backbone Collection

_Backbone Collections are a type of Object_

```js
var unicorns = new UnicornCollection();
```

## Function

```js
parseFloat(...)
isNaN(...)
```

### Constructor

_Constructors are a type of Function_

```js
Date
RegExp
var UnicornView = Backbone.View.extend({...})
var UnicornModel = Backbone.Model.extend({...})
var UnicornCollection = Backbone.Collection.extend({...})
var UniForm = React.createClass({...})
```

### Method

_Methods are a type of Function_

```js
console.log(...)
document.write(...)
Math.abs(...)
Math.ceil(...)
Math.floor(...)
```