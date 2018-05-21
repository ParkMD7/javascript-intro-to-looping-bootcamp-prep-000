function forLoop(array) {
  for(var i = 0; i < 25; i++){
    if(i === 1) {
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
      }
  }
  return array
}

function whileLoop(string) {
  let countdown = 10;
  while (countdown > 0) {
    console.log (--countdown)
  }
  return (string === 'done')
}