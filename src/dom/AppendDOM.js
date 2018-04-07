

export default function AppendDOM(element, parent, overflowHidden) {

    if (overflowHidden === undefined) overflowHidden = true;

    let appendTo;
    let target = null;
  
      if (parent)
      {
          if (typeof parent === 'string')  {
              target = document.getElementById(parent);
          }
          else if (typeof parent === 'object' && parent.nodeType === 1) {
              target = parent;
          }
      }
  
      // Fallback, covers an invalid ID and a non HTMLelement object
      if (!target) {
          target = document.body;
      }
  
      if (overflowHidden && target.style)  {
          target.style.overflow = 'hidden';
      }
  
      target.appendChild(element);
  
      return element;
  }