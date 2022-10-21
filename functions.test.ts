const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {


    test('after shuffling, test if length of array is still 5', () => {
        let array = [ 1, 2, 3, 4, 5] // make test array
        let shuffled_array = shuffleArray(array)
        expect(array.length).toBe(shuffled_array.length)
    })
    test('after shuffling, test if all items are original', () => {
        let array = [ 1, 2, 3, 4, 5]
        let shuffled_array = shuffleArray(array)
        expect(shuffled_array).toEqual(expect.arrayContaining(array))
    })
})