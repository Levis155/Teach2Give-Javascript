# Event Propagation

This refers to the way events flow through the DOM tree. It defines the element order when an event occurs.

**For instance, a div could have a paragraph element and both the div and the paragraph might have the click event attached. Suppose a user clicks on the paragraph, which event should be handled first?**

This can be handled through the following ways of event propagation:

- **Bubbling** - This technique involves handling the innermost element's events first followed by the outer.

- **Capturing** - This technique involves handling the outermost element's event first then followed by the outer.

**With the addEventListener method, you can specify the propagation type by passing a third parameter called _useCapture_ (true or false)**

**False** is the default and means bubbling will be used while **true** means capturing will be used. This parameter should be passed to both the outer and inner elements.