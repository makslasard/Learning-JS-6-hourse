function stray(numbers) {
    for(let i = 0; i < numbers.length; i++) {
      if(i !== i) {
        return i
      }
    }
  }
stray([1,1,2,1,1])  