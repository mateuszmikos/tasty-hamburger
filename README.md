# Tasty Hamburger

IN PROGRESS

Check this big and yummy hamburger from Tasty Hamburger. It's delicious!

## What is Tasty Hamburger?

Tasty Hamburger is a collection of best hamburgers. You can simply put it in your project or site! Without jQuery!

![](tasty-hamburger-preview.gif)


## How it works?

1. First clone or download this repository - [check newest version](https://github.com/mateuszmikos/tasty-hamburger/releases/).
2. Add css/tasty-hamburger.min.css to your <head>.

`<link rel="stylesheet" href="css/tasty-hamburger.min.css">`

3. Add js/tasty-hamburger.min.js before </body>

`<script src="js/tasty-hamburger.min.js"></script>`

4. Create div with `.tasty-hamburger-1` or `.tasty-hamburger-2` or `.tasty-hamburger-...` class.
5. You're ready to go!



### Examples

You can find all examples at [matt.aimweb.pl/tasty-hamburger](https://matt.aimweb.pl/tasty-hamburger) or in `example.html` file.

### Available Speeds

In Tasty Hamburger you can use three types of speed - slow, normal and fast.

#### Normal animation

For normal speed you don't need to add any class:

`<div class="tasty-hamburger-1"></div>`

#### Fast animation

For fast speed add .fast-anim class

`<div class="tasty-hamburger-1 fast-anim"></div>`

#### Slow animation

For slow animation add .slow-anim class

`<div class="tasty-hamburger-1 slow-anim"></div>`

### Available Colors

Tasty Hamburger has two colors - dark and light, when you use standard class you have white spans.

`<div class="tasty-hamburger-1"></div>`

When you need dark spans you can add .dark-toggler class:

`<div class="tasty-hamburger-1 dark-toggler"></div>`


### Control other elements

Tasty hamburger can "control" other elements. You can provide data-* attributes, like:

`<div class="tasty-hamburger-1 dark-toggler" data-toggle-id="main-menu" data-toggle-add-class="show">`

If you click hamburger for first time (enable), when element with id main-menu will get new class - show. If you untoggle hamburger, element class show will be removed from #main-menu element.

You can perform something like reverse toggling. You can remove class on enable, and add on disable with it:

`<div class="tasty-hamburger-1 dark-toggler" data-reverse-toggle-id="main-menu" data-reverse-toggle-add-class="hide">`

For first click, Tasty Hamburger will remove class hide from #main-menu element. For next click, Tasty Hamburger will add it again.

You can use *-toggle-* and *-reverse-toggle-* together to create something great!