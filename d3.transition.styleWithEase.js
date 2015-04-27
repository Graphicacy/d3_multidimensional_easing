/*- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -*/
/*
/* Style, with Ease!
/*
/*   Plug-in to use different easing for different dimensions of a transition.
/*
/* See the [github repository](https://github.com/Graphicacy/d3_multidimensional_easing)
/*
/* Author, [Reed](https://github.com/reedspool)
/*          
/* Made By [Graphicacy](http://www.graphicacy.com)
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
      // Value might be a fn, so need to be evaluated in context
      var interpolator = d3.interpolate(v0, typeof value == 'function' 
                                            ? value.call(this, d, i)
                                            : value);

      return function (t) {
        return interpolator(ease(t));
      }
    }, priority)

    return this;
  }

d3.transition.prototype.attrWithEase = 
  function (attribute, value, ease) {
  
    // Ease might be a string, requesting a d3 easing
    if (typeof ease == 'string') {  
      ease = d3.ease(ease)
    }

    this.attrTween(attribute, function (d, i, v0) {
      // Value might be a fn, so need to be evaluated in context
      var interpolator = d3.interpolate(v0, typeof value == 'function' 
                                            ? value.call(this, d, i)
                                            : value);

      return function (t) {
        return interpolator(ease(t));
      }
    })

    return this;
  }

