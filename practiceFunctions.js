const balanced = str => {
  const check = str => {
    openingParen = 0
      str.split('').map( val => val === ")" ? openingParen ++ : val === "(" ? openingParen -- : null )
    return openingParen === 0 ? true : false
  }
  return str[0] === ")" ? false : str.length - 1 === "(" ? false : check(str)
}

balanced('(()())') // true
// balanced('())') // false
// balanced('(foo)') // true
// balanced(')()(') // false
