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
/* License:
/* The MIT License (MIT)
/* 
/* Copyright (c) [2015] [Graphicacy](http://www.graphicacy.com)
/* 
/* Permission is hereby granted, free of charge, to any person obtaining a copy
/* of this software and associated documentation files (the "Software"), to deal
/* in the Software without restriction, including without limitation the rights
/* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
/* copies of the Software, and to permit persons to whom the Software is
/* furnished to do so, subject to the following conditions:
/* 
/* The above copyright notice and this permission notice shall be included in all
/* copies or substantial portions of the Software.
/* 
/* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
/* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
/* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
/* SOFTWARE.
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

