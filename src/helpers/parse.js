import React from 'react';

const shouldBeHighlighted = str =>
  str.match(/((@)|(#)|(https?:\/\/))[\w.]+/gi);

const highlightedStr = str =>
  str
    .split(/\s/g)
    .map((word, index) => {
      if (shouldBeHighlighted(word)) {
        return <a key={index} className="highlight">{word} </a>;
      }
      return <span key={index}>{word} </span>;
    });

export {
  shouldBeHighlighted,
  highlightedStr,
};
