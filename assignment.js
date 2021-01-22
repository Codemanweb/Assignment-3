
// kilometerToMeter

function kilometerToMeter ( kilometer){
    var meter = kilometer *1000;
    return meter;
}
 var result = kilometerToMeter(10);
 console.log(result);


//  budgetCalculator

var calculator = 50;
var phone = 100;
var laptop = 500;

// Calculator 

function budgetCalculator (numbers){
    var budget = calculator * numbers;
    return budget;
   
}
var totalCalculator = budgetCalculator(10);
console.log(totalCalculator);

// Phone

function budgetPhone (numbers){
    var budget2 = phone * numbers;
    return budget2;
}

var totalphone = budgetPhone(10);
console.log(totalphone);

// Laptop

function budgetLaptop (numbers){
    var budget3 = laptop *numbers;
    return budget3

}
var totalLaptop = budgetLaptop(10);
console.log(totalLaptop);


// hotelCost

function hotelCost ( numberOfDays){
    if ( numberOfDays <= 10){
        var sitRant = 100;
        var cost = numberOfDays *sitRant;
        return cost;
    }
   else if  (numberOfDays <= 20){

        var sitRant = 100;
        var discount1 = 20;
        var discountSitRant = sitRant-discount1;
        var cost = numberOfDays* discountSitRant;

        return cost;
    
    }

    else if (numberOfDays <= 100){
        var sitRant2 = 100;
        var discount2 = 50;
        var discountSitRant2 = sitRant2 - discount2;
        var cost = numberOfDays * discountSitRant2;

        return cost;

    }
}
var result = hotelCost(20);
console.log(result);


// megaFriend

var megaFriend = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
  ];
  
  var larger = 0;
  var longest;
  
  for (var i = 0; i < megaFriend.length; i++) {
      
    if (megaFriend[i].length > larger) {
      var larger = megaFriend[i].length;
      longest = megaFriend[i];
    }
  }
  
  console.log(longest);

  