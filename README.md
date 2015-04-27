# Style, with Ease!

Plug-in to use different easing for different dimensions of a transition.

### Usage:

#### HTML
    <!-- Must load after D3.js core -->
    <script src="d3.js"></script>
    <script src="d3.transition.styleWithEase.js"></script>

#### JS
    // Begin with normal D3.js transition
    d3.select('.ball')                        
      .transition()                           
      .duration(2000)

      // REQUIRED: Top level easing MUST be linear.                 
      .ease('linear')
        .style('transform', 'rotate(360deg)') 

        // Just like .style() and .attr(), with one extra parameter...            
        .styleWithEase('left', '400px', 'quad-in')

        // ... to declare which easing to use.              
        .attrWithEase('opacity', 0.3, 'quad-out')

        // Of course, you can use a function for the value
        .attrWithEase('opacity', function (d, i) { return i * 5; }, 'quad-out')

        // And even a custom easing function
        .styleWithEase('top', '140px', function (t) { return t * Math.random(); })

### Warning: Augments D3.js Core 
  
Adds two functions to the D3.js transition prototype:
* d3.transition.prototype.styleWithEase
* d3.transition.prototype.attrWithEase


Made By [Graphicacy](http://www.graphicacy.com)

Author, [reed](https://github.com/reedspool)
