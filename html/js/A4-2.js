// Side-Effects

var carDoor, chosenDoor, reveal, switched;

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
    if (chosenDoor != carDoor)
        return remainingDoor(carDoor, chosenDoor);
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
        document.getElementById('display').innerHTML = "Congratulations, you won the car. " +
            "Must've made the right choice " + (switched? "switching!" : "staying!");
            setDoor(chosenDoor, 'car');
        }
    else {
        document.getElementById('display').innerHTML = "Darn, you got a goat! " +
        "Maybe you should've " + (switched? "stayed!" : "switched!");
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

// Pure

//// Monty
function remainingDoor(door1, door2) {
    return 3 - door1 - door2;
}

function setDoor(n, img) {
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
