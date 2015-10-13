// Note: This quiz uses a testing framework called mocha. If you want to run the tests yourself, make sure you have mocha and chai both installed in the directory you're working in. If not, just use npm install mocha (and/or chai). Takes two seconds. Then you simply use the command "mocha midreview.js" at the command line. 

// Also note: The functions must have the same names as indicated in order to pass the tests. Even the error string in #2 must be the same. 

// Oh look another note: If these are too easy for you, enjoy it while it lasts. This is a three-part review. 

var mocha = require('mocha'),
    chai = require('chai')

var assert = chai.assert;
var expect = chai.expect;



// 1. write a function called isNegative. it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.

// 2. modify isNegative so that it only accepts numerical input. it should THROW an error for bad input, and that error should consist of the exact string "input must be a number."

// 3. write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

// 4. write a function called incrementEach(). it should take as input an array of numbers and increase the value of each number by one. try it with a basic for loop, then try it the appropriate functional method (map/filter/reduce/forEach).

// 5. write a function called shortiesOnly(). taking as input an array of strings, it should use the array's .filter() method to return a new array containing only those strings with fewer than four characters. 

// test for #1
// 

var isNegative = function(n){
    if(n >= 0 )
        return false
    else
        return true
}




// test for #2

var isNegative = function(n){
    if(n !== Number){
        console.log("input must be a number") 
    }
    else{
      console.log('Thank you for following directions')  
    } 
}

var isNegative




// test for #3
// 
// 3. write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.



var iPutTheFunIn = function(input){

        var midpoint = input.length/2,
        part1 = input.slice(0,midpoint),
        part2 = input.slice(midpoint,input.length)
        return part1 + 'fun' + part2

}


// test for #4
// 
// 4. write a function called incrementEach(). it should take as input an array of numbers and increase the value of each number by one. try it with a basic for loop, then try it the appropriate functional method (map/filter/reduce/forEach).



var incrementEach = function(array){
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i] + 1)
    }
        return newArray


}

var incrementEach = function(array){
    return array.map((function(el){

    })
}


// test for #5
// 5. write a function called shortiesOnly(). taking as input an array of strings, it should use the array's .filter() method to return a new array containing only those strings with fewer than four characters. 


var shortiesOnly = function(stringArray){
        var arrayString = stringArray
        var newArray = []

        function getShortwords(){
            for (var i = 1; i < arrayString.length; i++) {
                    if (arrayString <= 4) {
                        newArray.push(getShortwords)
                    };
            };
        }
}

var shortiesOnly = function(arr){
    return arr.filter(function(el){
        if(el.length < 4) return true
            else return false
    })


}



describe("isNegative()",function(){
    it("should return true if the input number is negative",function(){
        expect(isNegative(2)).to.equal(false)
        expect(isNegative(-50)).to.equal(true)
        expect(isNegative(0)).to.equal(false)
    })
})


// test for #2
describe('isNegative()',function() {
    it('should throw an exception if the input is not a number' , function()
    {
        expect(isNegative(5))      .to.equal(false)
        expect(isNegative('five')) .to.throw('input must be a number')
        expect(isNegative([5]))    .to.throw('input must be a number')
        expect(isNegative(false))  .to.throw('input must be a number')
    })
})


// test for #3
describe('iPutTheFunIn()',function() {
    it('should put the fun in things!' , function() {
        expect(iPutTheFunIn('functional')).to.equal('functfunional')
        expect(iPutTheFunIn('funerals')).to.equal('funefunrals')
    })
})


// test for #4
describe('incrementEach()', function() {
    it('should increase the value of each number in an array' , function() {
        expect(incrementEach([3,4,5,6])).to.deep.equal([4,5,6,7])
        expect(incrementEach([-3,-4,-5,-6])).to.deep.equal([-2,-3,-4,-5])

    })
})


// test for #5
describe('shortiesOnly()', function() {
    it('should produce a new array with only <4-letter words' , function() {
        expect(shortiesOnly(["Sunbeams","do","illuminate","the","dew"])).to.deep.equal(["do","the","dew"])
    })
})




// PART 2 OF MIDREVIEW

var mocha = require('mocha'),
    chai = require('chai')

var assert = chai.assert;
var expect = chai.expect;


// 5. in a certain restaurant, a steak is $25, a bottle of wine is $40, a salad is $12, and a brownie sundae is $10. make a menu object that provides menu items as keys and prices as values. 
// 


'menu':[

    {'item': 'steak', 'price': '$25'},
    {'item': 'wine', 'price': '$40'},
    {'item': 'salad','price': '$12'},
    {'item': 'brownie', 'price': '$10'} 
]

var menu = new Object()

menu.steak = '$25'
menu.wine = '$40'
menu.salad = '$12'
menu.brownie = '$10'

var menu = {
    steak: '$25',
    wine: '$40',
    salad: '$12',
    brownie: '$10'
}

// 6. use a constructor called Restaurant to create a Restaurant object. put a getPrice() method on the constructor's prototype that takes the name of a menu item as input and returns the price of the item. i should be able to test it like this:

// >>> var applebees = new Menu()
// >>> applebees.getPrice('salad')
// >>> '$12'
// 

    var menu = {
        steak: '$25',
        wine: '$40',
        salad: '$12',
         brownie: '$10'
        }


    var Restaurant = function(customMenu){
        this.menu = customMenu
    }


     Restaurant.prototype.getPrice = function(){
        return this.menu[name]
    }
}

var samaSushi = new Restaurant({
    salmonRoll: '$20',
    sake: '$25',
})

samaSushi.getPrice('sake')

// samaSuhsi.getPrice('')
// 7. add a method to the Restaurant called getDishes. this method should read the Restaurant's menu object and turn it into an array of dish names, then return that array. (i.e., do not just hard-code an array containing the dish names).  
// 


Restaurant.prototype.getDishes = function(){
    var dishArray = []
    for(var key in this.menu){
        dishArray.push(key)
    }

    return dishArray
}

// 8. write a function called getValues. getValues should take two inputs: an array of objects, and a property name. it should return an array containing the value of the specified property for each object. 

// example: 
// var colorDicts = [{red: 'rouge',blue:'bleu'},{red:'rojo',blue:'azul'},{red:'rote',blue:'blau'}]
// getValues(colorDicts,'blue') --> ['bleu','azul','blau']
// 


var getValues = function(array, propName){
    var results = []
    results.push(propName)
    return results

}

var getValues = function(array, propName){
    var newArr = []
    initialArr.forEach(function(obj){
        var val = obj[input]
        if (val !== undefined)
            newArr.push(val)

    })

    return newArr
}

// test for #5
describe("menu",function(){
    it('should be an object which yields the price of a menu item when the name of that item is supplied as a key.', function() {
        expect(menu.salad).to.equal('$12')
    })
})


// var applebees = new Restaurant()
//  applebees.menu = 
    
// test for #6 & #7
describe('Resturant' , function() {
    describe('#getPrice()',function(){
        it('should return the price of an item from the menu' , function() {

            expect(applebees.getPrice('salad')).to.equal('$12')
            }
        )
    })
})

// test for #7
describe("pipeline()",function(){
    it("should pipe the outputs of the functions passed in as arguments into a final value",function(){
        var squareNum = function(num) {return num * num},
            doubleNum = function(num) {return num * 2},
            inverseNum = function(num) {return 1 / num}

        expect(pipeline(5,doubleNum,squareNum)).to.equal(100)
        expect(pipeline(10,squareNum,inverseNum)).to.equal(.01)
    })
})

// test for #8

describe("getValues()",function(){
    it("should pipe the outputs of the functions passed in as arguments into a final value",function(){

            var books = [
                            {author: "vladimir nabokov",
                            title: "lolita",
                            year: "1955"},
                            {author: "jk rowling",
                            title: "harry potter and the powerful skin rash",
                            year: 2016},
                            {author: "david foster wallace",
                            title: "oblivion",
                            year: 2002}
                        ]

            expect(getValues(books,'title')).to.deep.equal(["lolita","harry potter and the powerful skin rash", "oblivion"])
    })
})










// PART 3 MIDREVIEW
// 
// 
// 
// 

var mocha = require('mocha'),
    chai = require('chai')

var assert = chai.assert;
var expect = chai.expect;

// 9. write a function called pipeline. it should take three inputs: (1) a string of text, (2) a function, and (3) another function. it should use functions (2) and (3) on the input, one after the other, and return a new string that has been processed by both function (2) and function (3).
// 
var pipeline = function(initialValue, callbacks){
    var newValue = initialValue
    callbacks.forEach(function(callback){
        newValue = callback(newValue) 
    })
    return newValue
}

var pipeline = function(initialValue, function1, function2){
    return function2(function1(initialValue))
}


// for example, presuming i have a function called capitalize() and a function called removeFirstLetter, i should be able to do this

// >>> var newWord = pipeline('america')
// >>> 'Americ'

// 10. write a function called map that will take an array and a callback as input.
// 

    var map = function(array, callback){
        var results = []
        for (var i = 0; i < array.length; i++) {
            var el = array[i]
            results.push(callback(el))
        }
        return results

    }

// 11. this one will be tricky and also really interesting. your task is to hack the built-in array method (hint: where do the methods on an array live?). replace map with a method that does ALMOST the same thing as the built-in map. the difference is, your map will add an extra element to the end: an "X." (feel free to replace the X with your own tag, but the mocha test will fail.)
// 
// 

Array.prototype.map = function(callback){
    var newArray = []
    for (var i = 0; i < this.length; i++) {
        var el = this[i],
            newEl = callback(el)
        newArray.push(newEl)
    }
    newArray.push('Hot John Pillow')
}


// 12. create a jquery promise/deferred object that will resolve true, and execute an associated callback, after 1 second. 

// 13. create a constructor called Place. the important methods on place are .fetchData() and .getCoords(). fetchData should take the name of a place as input, make a request to an api of your choosing (hint: googlemaps geocoding), and store the latitude and longitude of the place in an object, retrievable with the getCoords method. 





// test for #9
describe("pipeline()",function(){
    it("should pipe the outputs of the functions passed in as arguments into a final value",function(){
        var squareNum = function(num) {return num * num},
            doubleNum = function(num) {return num * 2},
            inverseNum = function(num) {return 1 / num}

        expect(pipeline(5,doubleNum,squareNum)).to.equal(100)
        expect(pipeline(10,squareNum,inverseNum)).to.equal(.01)
    })
})


// test for #10
describe("map()",function(){
    it("should return a new copy of the array after the given transformation",function(){

        expect(map([4,9,16],Math.sqrt)).to.deep.equal([2,3,4])
    })
})


//test for #11
describe("Array", function(){ // a Constructor name
    describe("#map()", function(){ // a method of said Constructor
        it("should behave as normal, except with an extra 'X' at the end of the array",function(){
            expect([5.5,2.1,100.9].map(Math.floor)).to.deep.equal([5,2,100,"X"])
        })
    })
})

// no tests for the last two, as jquery is required, but i'll review them by sight. 


