## JavaScript Fundamentals

# Developer console
console.log(), alert(), prompt()
F12 - open console in chrome browser
shift + enter - multi line input

# How to add JavaScript
between script tag
src="javaScript file"

# data types 
There are 8 basic data types in JavaScript.
1.number - for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
2.bigint - is for integer numbers of arbitrary length.
3.string - for strings. A string may have zero or more characters, there’s no separate single-character type.
4.boolean - for true/false.
5.null - for unknown values – a standalone type that has a single value null.
6.undefined-  for unassigned values – a standalone type that has a single value undefined.
7.object - for more complex data structures.
8.symbol - for unique identifiers.
typeof() - operator allows us to see which type is stored in a variable.

# common methods and properties
strings - concat, slice, substr, += 
properties - length
includes() (returns a boolean)

# comparative operators 
 ==, !=, === , ,!==, <, >, <=, >=

# Type Conversion 
Number(), String(), Boolean()

# control flow - 
For loop, 
while, 
do while, 
if, 
else 
else if, 
switch statement
break; (stop here)
continue (skip)

# logical operators 
|| (OR)
&& (AND)
! (NOT)

# Objects - array, dates, literals, functions, etc = reference types
  array methods - concat, join, indexOf, push , pop

# Variables
  local scope (inside a function) and global scope  (variables) ( var ignores block scope + local scope)

# functions 
code block {}, 
declaration has hoisting ,expression has no hoisting,
calling the function by name invoke (), 
commonly used is the function expression
'Arguments' & (Parameters) 
return
Arrow functions
callback function is function that is passed as a parameter 


# foreach() loops over an array

# objects literals 
create object, 
assign properties, 
reassign a property, 
create method, 
method is like a function but invoked with dot notation 
interact with the properties using the key word this inside a method
the math object (floor, ceil, round, random )
# primitive and reference types

# DOM
DOM what it is, the querySelector, querrySelectorAll
DOM Adding & Changing page content 
Getting and Setting Attribute (getAttribute, setAttribute)
changing CSS Styles (.style.textDecoration = 'line-through')
Adding & Removing or toggle CSS classes (classList add, toggle)
Change based on the contents of text - validate if error/success and then change class (textContent, innerText, innerHTML)
class toggle
node relations - parentElement, children and previous/nextElementSibling
how to convert a HTMLcollection into an Array 

# HTML collection
Array.from() used to change it to an array
# Event Basics 

# creating an event 
 button , li , foreach(item)
change item clicked style, try changing its class

# delete an element from the DOM 
remove()

# add an element from the DOM 
(createElement), append(), prepend()
i) += append to 
ii) createElement() create new HTML element 

# event bubbling (and delegation) 
.stopPropagation()

# What is Event bubbling - 
any event attached to this element and fire the callback it then bubbles up to its parent 
JS will check to see if there is an eventlistener attached to this element will fire its call back and keeps bubbling up to parents. 

# To stop event bubbling 
e.stopPropagation() from the child

# Event Delegation 
When we need to attach addEventListeners to many different elements - use event delegation.
that is to set up an eventlistener to the the whole group element and NOT just the individual list items since it has some disadvantages which are it affects the performance, it wont cater for newly created ones and it is less efficient. 

Advantages of using Event Delegation
1. Were only attaching one event listener to one containing element, which means less work better performance 
2. Whenever we add a new elem we don't need to worry about adding additional listeners
# More DOM events
 see https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events
 copy 
 mousemove : offsetX and offsetY
 wheel: pageX an, pageY

 # Creating a popup window

## Forms & Form Events 
e.preventDefault()
value property
fields from a form using dot notation
# Regular expression 
character set
 flags, goes at the end such g for global
 ranges, 
 repeating characters, 
 metacharacters, \d,\w,\W\s \t
 special characters, /., 
 staring and ending, ^$
 alternate characters, | ()
 test() method executes a search for a match between a regular expression and a specified string. Returns true or false
eg of Regex = /^[a-z]{5}$/i 

# search()
username.search(result)
what integer it was matched

# Quiz
create a score based on their answers, 
Array = answers,userAnswers,
forEach()
window object,
setTimeout(function,timer) 
setInterval(function,timerInterval), 
clearInterval(),
scrollTo(0,0)

# Array Methods (cycle through arrays)
# HighOrder Functions
forEach() (non destructive)
filter() (non destructive)
map() (non destructive)
reduce((total,age)=>total+age,0)
sort((a,b)=> a.start>b.start?-1:1)) (is destructive) 
find() searches from left to right and return the first element when true

# ternary operator
? means if true 
: means if false

# Project Todo List
Project Preview and setup
HTML and CSS Template 
Adding Todos
trim() removes spaces before or after
event delegation 
searching and filtering todos

# Creating elms with template string
create elements using JS methods
but for complex templates with a few lines of code its easier to write a template string

# Dates & Times in JavaScript
the key word "new" comes before a constructor

it is alot easier using timestamps than using 