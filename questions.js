
var selectElementsStartingWithA = function(array) {
 // methode pour filtrer A
	function startingWithA(words){
 	return words.charAt(0) == "a";
	}
	return array.filter(startingWithA); //cf la fonction .filter
}

var selectElementsStartingWithVowel = function(array) {
	var vowel = ["a","e","i","o","u","y"];
		function firstElem(nom){
 			var firstLetter = nom.charAt(0);
 			// mode strict. -1 car le premier indice d'un tableau c'est 0
 			return vowel.indexOf(firstLetter)!==-1; 
		}
	return array.filter(firstElem);
}

var removeNullElements = function(array) {
 	function checkNullItems(item) {
 		return item !== null;
 	}
 	return array.filter(checkNullItems);
 }

var removeNullAndFalseElements = function(array) {
	function checkNull(item) {
 		return item !== null;
 	}

 	function checkFalse(item) {
 		return item !== false;
 	}
 	
 	var array2 = array.filter(checkNull);
 	return array2.filter(checkFalse);
}

var reverseWordsInArray = function(array) {
	function reverseChar(word) {
		return word.split('').reverse().join('');
	}
	return array.map(reverseChar);  //map applique une méthode à chaque valeur d'un tableau
  	
/*  	var array2 = [];
  	for (var i=0;  i< array.length; i++) {
  		array[i].reverse();
  		array2.push(array[i]);
  	}
  	return array2;  
  */
}
//@ revoir !!! cf. snippet everyPossiblePair.js
var everyPossiblePair = function(array) {
 	var res = [];
 	var copyOfArray = array.slice().reverse();

 	for (var student1 of array) {
 		copyOfArray.pop();
 		for (var student2 of copyOfArray)  {
 			res.push([student1, student2].sort());
 		}
 	}
 	return res.sort();
}

var allElementsExceptFirstThree = function(array) {
  return array.slice(3,array.length);  //[1,2,3,4,5,6] => [4,5,6]
}

var addElementToBeginning = function(array, element) {
     array.unshift(element);
     return array; //et surtout pas    return array.unshift(element) : qui retourne le nb total d'éléments après ajout. !!!
}
//cf.  reverseWordsInArray ligne 40
var sortByLastLetter = function(array) {
	return reverseWordsInArray(reverseWordsInArray(array).sort());
}

var getFirstHalf = function(string) {
	var laMoitie = '';
	var stringBis = string.split('', Math.ceil(string.length/2));  //Math.ceil arrondit à la valeur entière superieure
                     
	for (var letter of stringBis) {
        		laMoitie += letter;  
        	}
   return laMoitie;
}

var makeNegative = function(number) {
   	if (number > 0) {
  		return (number * -1);
  	} else {
  		return number;
  	}
}

var numberOfPalindromes = function(array) {
var counter=0;

	for (var item of array) {
		if (item.split('').reverse().join('') === item)
		counter+=1;
	}
	return counter;
}

var shortestWord = function(array) {
var shortest = '';
	for (var i=1; i < array.length; i++)  {
  		if ((array[i-1].length) < (array[i].length)) {
  		shortest=array[i-1]; //Si si! ;-)
      	}
      return shortest;
}
} //Ggrr : SyntaxError: missing } after function body 

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
