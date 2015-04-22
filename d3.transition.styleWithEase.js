/*- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -*/
/*
/* Style, with Ease!
/*
/*   d3.transition.prototype.styleWithEase
/*   d3.transition.prototype.attrWithEase
/*
/*   Plug-in to use different easing for different dimensions of a transition.
/*
/*   Usage:
/*
/*   d3.select('.ball')                        
/*     .transition()                           
/*     .duration(2000)
/*
/*     // REQUIRED: Start with linear easing.                 
/*     .ease('linear')
/*       .style('transform', 'rotate(360deg)') 
/*
/*       // Just like .style() and .attr(), with one extra parameter...            
/*       .styleWithEase('left', '400px', 'quad-in')
/*
/*       // ... to declare which easing to use.              
/*       .attrWithEase('opacity', 0.3, 'quad-out')
/*
/*       // Or, use a custom easing function
/*       .styleWithEase('top', '140px', function (t) { return t * Math.random(); })
/*
/* Author: [Reed](https://github.com/reedspool)
/*          
/* Made by [Graphicacy](http://www.graphicacy.com)
/*
/*- -~- -*/
d3.transition.prototype.styleWithEase = 
  function (attribute, value, priority, ease) {
    // Priority is optional
    if (! ease ) {
      ease = priority;
      priority = undefined;
    }

    // Ease might be a string, requesting a d3 easing
    if (typeof ease == 'string') {  
      ease = d3.ease(ease)
    }

    this.styleTween(attribute, function (d, i, v0) {
      var interpolator = d3.interpolate(v0, value);

      return function (t) {
        return interpolator(ease(t));
      }
    })

    return this;
  }

d3.transition.prototype.attrWithEase = 
  function (attribute, value, ease) {

    // Ease might be a string, requesting a d3 easing
    if (typeof ease == 'string') {  
      ease = d3.ease(ease)
    }

    this.attrTween(attribute, function (d, i, v0) {
      var interpolator = d3.interpolate(v0, value);

      return function (t) {
        return interpolator(ease(t));
      }
    })

    return this;
  }

