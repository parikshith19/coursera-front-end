# HTML5
## content types
- there are 2 types of content
  - flow content(block content)
  - phrasing content(inline content)
## Essential HTML tags
### Semantic and header tags
- semantic: Element that implies some meaning to the content.
  - So that machines can understand the meaning of the content better.
  - It may also help search engine ranking it. SEO(engine optimization)
### HTML entities
- HTML provides entities like &quot; and &nbsp; A space which does not break when the screen is resized the spaces can't be breaked for
- for refernece see the file 
- [see the last 3 lines ir. victory nor defeat does not break when we resize the window](file:///../../fullstack-course4-master/examples/Lecture08/html-entities-after.html)
### Links
- the a tag is both a flow content and a phrasing content
- thats why we can make an entire region clickable.
- the a tag has a attribute called target.
- Try by opening the preview in a browser
- <a target='_blank' href="http://www.google.com">Hello</a>
``` html
<a target='_blank' href="www.google.com">Hello</a>
```
- Using the above link the link will be opened in a new tab.
- Fragment identifiers and links to fragments
  - We can give links to a particular section of the webpage using the attribiute id of diferent element we can go tp that element using a selector
### Images
- If we don't specify the height and width of the image the website may appear jumpy.