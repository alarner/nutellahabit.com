---
title: "Loop reps"
description: One of my students loves Arnold Schwarzenegger. He's come up with a great analogy inspired by The Governator himself for getting good at programming. You've got to get your reps in!
date: 2016-03-31
layout: post.html
collection: teaching
---

One of my students loves Arnold Schwarzenegger. He's come up with a great analogy inspired by [The Governator](https://www.google.com/search?q=The+Governator) himself for getting good at programming. You've got to get your reps in!

<iframe src="//giphy.com/embed/W7dBXzbnEpOBG" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

One of the toughest thing to wrap your head around when you're first learning to program is loops, so if you're just getting started coding, do yourself a favor and get these 25 JavaScript loop reps in today.

### 1. What will be console.logged?

```js
for(var i=0; i<3; i++) {
	console.log('One fish');
}
```


### 2. What will be console.logged?

```js
for(var i=0; i<1; i++) {
	console.log('Two fish');
}
```



### 3. What will be console.logged?

```js
for(var i=1; i<4; i++) {
	console.log('Red fish');
}
```

### 4. What will be console.logged?

```js
for(var i=-1; i<4; i=i+2) {
	console.log('Blue fish');
}
```

### 5. What will be console.logged?

```js
var foo = 7;
for(var i=0; foo<4; i++) {
	console.log('Blue fish');
}
```

### 6. What will be console.logged?

```js
var foo = 7;
for(var num=0; num<4; num++) {
	console.log(i+' fish');
}
```

### 7. What will be console.logged?

```js
var fishLabels = ['One', 'Two', 'Red', 'Blue']
for(var index=0; index<2; index++) {
	console.log(index);
}
```

### 8. What will be console.logged?

```js
var fishLabels = ['One', 'Two', 'Red', 'Blue']
for(var index=0; index<2; index++) {
	console.log(fishLabels);
}
```

### 9. What will be console.logged?

```js
var fishLabels = ['One', 'Two', 'Red', 'Blue']
for(var index=0; index<3; index++) {
	console.log(fishLabels[0]);
}
```

### 10. What will be console.logged?

```js
var fishLabels = ['One', 'Two', 'Red', 'Blue']
for(var index=0; index<3; index++) {
	console.log(fishLabels[0]);
}
```

### 11. What will be console.logged?

```js
var fishLabels = ['One', 'Two', 'Red', 'Blue']
for(var index=0; index<4; index++) {
	console.log(fishLabels[index]);
}
```

### 12. What will be console.logged?

```js
var fishLabels = ['One', 'Two', 'Red', 'Blue']
for(var index=0; index < fishLabels.length; index++) {
	console.log(fishLabels[index]);
}
```

### 13. What will be console.logged?

```js
var fishLabels = ['One', 'Two', 'Red', 'Blue']
for(var index=0; index < fishLabels.length; index++) {
	console.log(fishLabels[index]+' fish');
}
```

### 14. What will be console.logged?

```js
var sum = 0;
for(var index=0; index<10; index++) {
	sum = sum + index;
}
console.log(sum);
```

### 15. What will be console.logged?

```js
var sum = 0;
for(var index=1; index<=10; index++) {
	sum = sum + index;
}
console.log(sum);
```

### 16. What will be console.logged?

```js
var sum = 7;
for(var index=3; index<=15; index+=2) {
	sum = sum + index;
}
console.log(sum);
```

### 17. What will be console.logged?

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for(var index=0; index < colors.length; index++) {
	console.log('index');
}
```

### 18. What will be console.logged?

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for(var index=0; index < colors.length; index++) {
	console.log(index);
}
```

### 19. What will be console.logged?

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for(var index=0; index < colors.length; index++) {
	console.log(index, colors[0]);
	console.log(index, colors[1]);
}
```

### 20. What will be console.logged?

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for(var index=0; index < colors.length; index++) {
	console.log(index, colors[index]);
}
```

### 21. What will be console.logged?

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for(var index=0; index < colors.length; index++) {
	if(colors[index] === 'green') {
		console.log(colors[index]);
	}
}
```

### 22. What will be console.logged?

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for(var index=0; index < colors.length; index++) {
	if(colors[index].indexOf('a') !== -1) {
		console.log(colors[index]);
	}
}
```

### 23. What will be console.logged?

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for(var index=0; index < colors.length; index++) {
	if(colors[index].indexOf('e') !== -1) {
		console.log(colors[index]);
	}
}
```

### 24. What will be console.logged?

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for(var index=0; index < colors.length; index++) {
	if(colors[index].indexOf('g') !== -1) {
		console.log(colors[index]);
	}
}
```

### 25. What will be console.logged?

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for(var index=0; index < colors.length; index++) {
	if(colors[index].length > 5) {
		console.log(colors[index]);
	}
}
```