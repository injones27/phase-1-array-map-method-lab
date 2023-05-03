const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased () {
  const newArr = tutorials.map(function(title){
    console.log(title)
    // let titles = tutorials.split
    // title is a string
    // we want to capitalize each word in title
    // if title was an array of words what method can we use to capitalize each word
    // .toUppercase could work but we can also use .map()
    // split it into an individual array of words and then use map()
    const newArr2 = title.split(' ');
    const splitArr = newArr2.map(function(word){
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord; 
    })
    console.log(splitArr)
    return splitArr.join(' ');
  })
  console.log(newArr)
  return newArr;
  
}
titleCased()

