# Kanimations

Kanimations is a lightweight JavaScript library for creating various animations on your web elements. It provides simple methods for animations like fade, slide, bounce, rotate, scale, and more. Enhance your web application with dynamic and engaging visual effects using Kanimations!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Fade In/Out](#fade-inout)
  - [Slide Animations](#slide-animations)
  - [Bounce](#bounce)
  - [Rotate](#rotate)
  - [Scale](#scale)
  - [Flip](#flip)
  - [Shake](#shake)
  - [Pulse](#pulse)
  - [Zoom In/Out](#zoom-inout)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use Kanimations, include the `Kanimations.js` script in your HTML file:

```html
<script src="https://aman5062.github.io/Kaminations/Kanimations.js"></script>
```





Certainly! Here's a revised version of the README for `Kanimations`, with clear and concise language:

---

# Kanimations

Kanimations is a lightweight JavaScript library for adding animations to your web projects. It provides a range of effects including fades, slides, bounces, and more, making it easy to bring your web elements to life.

## Usage

### Fade In/Out

**Fade In**

```javascript
Kanimations.fadeIn(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the animation in milliseconds (default: 400ms).

**Fade Out**

```javascript
Kanimations.fadeOut(element, duration, callback);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the animation in milliseconds (default: 400ms).
- `callback`: Optional function to call after the animation completes.

### Slide Animations

**Slide In from Top**

```javascript
Kanimations.slideInTop(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the animation in milliseconds (default: 400ms).

**Slide Out to Top**

```javascript
Kanimations.slideOutTop(element, duration, callback);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the animation in milliseconds (default: 400ms).
- `callback`: Optional function to call after the animation completes.

**Slide In from Right**

```javascript
Kanimations.slideInRight(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the animation in milliseconds (default: 400ms).

**Slide Out to Right**

```javascript
Kanimations.slideOutRight(element, duration, callback);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the animation in milliseconds (default: 400ms).
- `callback`: Optional function to call after the animation completes.

**Slide In from Bottom**

```javascript
Kanimations.slideInBottom(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the animation in milliseconds (default: 400ms).

**Slide Out to Bottom**

```javascript
Kanimations.slideOutBottom(element, duration, callback);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the animation in milliseconds (default: 400ms).
- `callback`: Optional function to call after the animation completes.

### Bounce

```javascript
Kanimations.bounce(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the bounce animation in milliseconds (default: 1000ms).

### Rotate

```javascript
Kanimations.rotate(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the rotation animation in milliseconds (default: 1000ms).

### Scale

```javascript
Kanimations.scale(element, scale, duration);
```
- `element`: The DOM element to animate.
- `scale`: Scaling factor (default: 1.5).
- `duration`: Duration of the scale animation in milliseconds (default: 1000ms).

### Flip

```javascript
Kanimations.flip(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the flip animation in milliseconds (default: 1000ms).

### Shake

```javascript
Kanimations.shake(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the shake animation in milliseconds (default: 1000ms).

### Pulse

```javascript
Kanimations.pulse(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the pulse animation in milliseconds (default: 1000ms).

### Zoom In/Out

**Zoom In**

```javascript
Kanimations.zoomIn(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the zoom-in animation in milliseconds (default: 1000ms).

**Zoom Out**

```javascript
Kanimations.zoomOut(element, duration);
```
- `element`: The DOM element to animate.
- `duration`: Duration of the zoom-out animation in milliseconds (default: 1000ms).

## Examples

Here is an example of using Kanimations in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kanimations Example</title>
  <script src="https://aman5062.github.io/Kaminations/Kanimations.js"></script>
  <style>
    #box {
      width: 100px;
      height: 100px;
      background-color: #3498db;
      margin: 20px;
      display: none; /* Hidden initially */
    }
  </style>
</head>
<body>
  <button onclick="Kanimations.fadeIn(document.getElementById('box'))">Fade In</button>
  <button onclick="Kanimations.fadeOut(document.getElementById('box'))">Fade Out</button>
  <button onclick="Kanimations.slideInTop(document.getElementById('box'))">Slide In Top</button>
  <button onclick="Kanimations.slideOutTop(document.getElementById('box'))">Slide Out Top</button>
  <button onclick="Kanimations.slideInRight(document.getElementById('box'))">Slide In Right</button>
  <button onclick="Kanimations.slideOutRight(document.getElementById('box'))">Slide Out Right</button>
  <button onclick="Kanimations.slideInBottom(document.getElementById('box'))">Slide In Bottom</button>
  <button onclick="Kanimations.slideOutBottom(document.getElementById('box'))">Slide Out Bottom</button>
  <button onclick="Kanimations.bounce(document.getElementById('box'))">Bounce</button>
  <button onclick="Kanimations.rotate(document.getElementById('box'))">Rotate</button>
  <button onclick="Kanimations.scale(document.getElementById('box'), 2)">Scale</button>
  <button onclick="Kanimations.flip(document.getElementById('box'))">Flip</button>
  <button onclick="Kanimations.shake(document.getElementById('box'))">Shake</button>
  <button onclick="Kanimations.pulse(document.getElementById('box'))">Pulse</button>
  <button onclick="Kanimations.zoomIn(document.getElementById('box'))">Zoom In</button>
  <button onclick="Kanimations.zoomOut(document.getElementById('box'))">Zoom Out</button>

  <div id="box"></div>
</body>
</html>
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or bug reports.
