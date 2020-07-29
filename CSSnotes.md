# CSS notes
## Font styling
- When we use inheritance in font styling with relative font sizes the font size chnages to a relative quantity from the previous quantity..
## BOX model
- box sizing is not a inheritable property
- to use a universal selector os
``` css
*{
    box-sizing: border-box;
}
```
- The * selector will be used in every element
- In boxes which are on top of each other the effect will not be cumulative the larger margin will win.
- The * selector has the highest precedence. 
## Background property
```css
#box{
    background: url('url.png') no-repeat right center blue;
    background-color: blue;
}
```
The background property will override any specifics like background-color,background-position .

## Positioning by floating the elements


