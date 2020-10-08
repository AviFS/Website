var carDoor, chosenDoor, reveal, switched;

// Global

//// On Load
function startMonty() {
    carDoor = randInt(3);
    document.getElementById('display').innerHTML = "Please select a door.";
}

//// MAIN
function chooseDoor(picked) {
        chosenDoor = picked;
        reveal = calcRevealDoor();

        document.getElementById('display').innerHTML = "I'll now reveal Door " + (reveal+1) + "!";
        setDoor(reveal, 'goat');

        setTimeout(function() {
             askSwitch();
             checkWin();
             playAgain();
        },500);
}

//// Small Tasks
function calcRevealDoor() {
    // IF CHOSE GOAT → RETURN OTHER GOAT
    if (chosenDoor != carDoor)
        return remainingDoor(carDoor, chosenDoor);
    // IF CHOSE CAR → RETURN RANDOM GOAT
    var otherDoors = [mod(carDoor-1,3), mod(carDoor+1,3)];
    return otherDoors[randInt(2)];
}

function askSwitch() {
    switched = confirm("Do you want to switch?");
    if (switched)
        chosenDoor = remainingDoor(chosenDoor, reveal);
}

function checkWin() {
    if (chosenDoor==carDoor) {
        document.getElementById('display').innerHTML = "Congratulations, you won the car. " + "Must've made the right choice " + (switched? "switching!" : "staying!");
            setDoor(chosenDoor, 'car');
        }
    else {
        document.getElementById('display').innerHTML = "Darn, you got a goat! " + "Maybe you should've " + (switched? "stayed!" : "switched!");
        setDoor(chosenDoor, 'goat');
    }
}

function playAgain() {
    setTimeout(function() {
         if (confirm("Play again?")) {
             closeDoors();
             startMonty();
         }
         else
            document.getElementById('display').innerHTML = "Thanks for playing!";
    },500);
}

// Functional

//// Monty
function remainingDoor(door1, door2) {
    return 3 - door1 - door2;
}

function setDoor(n, img) {
    // EXAMPLES
    //// → setDoor(2, 'goat')
    //// → document.getElementById('door2').src = 'goat-door.png'

    ///// → setDoor(0, 'closed')
    ///// → document.getElementById('door0').src = 'closed-door.png'

    document.getElementById('door'+n.toString()).src = img+'-door.png'
}

function closeDoors() {
    for (var i = 0; i < 3; i++)
        setDoor(i, 'closed');
}

//// Math
function randInt(n) {
    return Math.floor(Math.random()*n);

}

function mod(n,k) {
    return ((n%k)+k)%k;
}

// Why I wrote mod myself
// -1%3 → -1
//%3 → 2


// calcRevealDoor()

// DDD    DDD      DDD
//  C      G        G

//  ^


// var otherDoors
//// 2→[0,1]
//// 1→[0,2]
//// 0→[1,2]
