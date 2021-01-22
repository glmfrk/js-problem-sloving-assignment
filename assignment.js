//  https://github.com/glmfrk/js-problem-sloving-assignment

function kilometerToMeter(Kilometer){
    var meter = Kilometer * 1000;
    if(Kilometer < 1){
        return "Distance cannot be negative";
    }
    else{
        return meter;
    }
}
//  kilometerToMeter conversion measurement function end here...

function budgetCalculator(watch,phone,laptop){
    var timeKeeperPrice = watch * 50;
    var mobilePrice = phone * 100;
    var ComputerPrice = laptop * 500;
    var totalCostPrice = timeKeeperPrice + mobilePrice + ComputerPrice;
    return totalCostPrice;
}
//  budgetCalculator function end here...

function hotelCost(totalDays) {
    var costMoney = 0;
    if (totalDays <= 10) {
        costMoney = totalDays * 100;
        
    }
    else if (totalDays <= 20) {
        var days10 = 10 * 100 ;
        var remainingDays = totalDays - 10;
        var days20 = remainingDays * 80; 
        costMoney = days10 + days20;
    }
    else{
        var days10 = 10 * 100 ;
        var days20 = 10 * 80 ;
        var remainingDays = totalDays - 20;
        var fullMonth = remainingDays * 50;
        costMoney = days10 + days20 + fullMonth;
        
    }
     return costMoney;   
}

// hotelCost Tour function end here...


function megaFriend(friendList) {
    var friends = 0;
    var totalFriends;
    for (var i = 0; i < friendList.length; i++) {
        var friendName = friendList[i];
        if (friendName.length > friends) {
            friends = friendName.length;
            totalFriends = friendName;
        }
        
    }
    return totalFriends;
}
// megaFriend function end here...

