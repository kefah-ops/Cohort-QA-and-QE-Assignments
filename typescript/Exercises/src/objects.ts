//Exercises
function getUsername(username: string) {
    if (username !== null) {
      return `User: ${username}`
    } else {
      return 'Guest'
    }
  }

  type Expect<T extends true> = T;

  const result = getUsername('string')
  type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;


  type test = Expect<Equal<typeof result, string>>;

const result2 = getUsername("string")


type test2 = Expect<Equal<typeof result2, string>>


//exercise 2
type direction="up"|"left"|"right"|"down"
function move(direction:direction, distance: number) {
//    console.log(direction);
}
// Move the specified distance in the given direction

  move('up' ,3)

move('left',4)


move("right" ,5)
  
  move("down" ,4)



//exercise 3

function validateUsername(username: string | null): boolean {if (username === null) {
    return false; 
}

    return username.length > 5
    return false
    console.log(username)
}


it('should return true for valid usernames', () => {
    expect(validateUsername('Matt1234')).toBe(true)
  
    expect(validateUsername('Alice')).toBe(false)
  
    expect(validateUsername('Bob')).toBe(false)
  })


  it('Should return false for null', () => {
    expect(validateUsername(null)).toBe(false)
  })


  