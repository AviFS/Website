// On Click

function submit() {
    var dist = document.getElementById('dist').value;
    var pace = document.getElementById('pace').value;

    var dist = parseNum(dist);
    var [mins, secs] = parseTime(pace);

    resetTable();
    populateTable(dist, mins, secs);

}

// Parse

function parseNum(num) {
    var match = /^(\d+)$/.exec(num);
    if (match) {
        var [, num] = match;
        return Number(num);
    }
    alert('Distance: Input should match /\\d+/');
    throw new Error();
}

function parseTime(time) {
    var match = /^(\d+):(\d\d)$/.exec(time);
    if (match) {
        var [, mins, secs] = match;
        return [Number(mins), Number(secs)];
    }
    alert('Target Pace: Input should match /\\d\\d:\\d\\d/');
    throw new Error();
}

// Table

function resetTable() {
    document.getElementById('table').style.visibility='visible';
    document.getElementById('tbody').innerHTML = '';
}

function populateTable(dist, mins, secs) {
    var total = 60*mins+secs
    for (var mile = 1; mile <= dist; mile++) {
        addRow(mile, timeFormat(mile*total));
    }
}

function addRow(mile, time) {
    var table = document.getElementById('table')
    var tbody = table.getElementsByTagName('tbody')[0];

    var row = tbody.insertRow();
    var mileCell = row.insertCell();
    var timeCell = row.insertCell();

    mileCell.innerHTML = mile;
    timeCell.innerHTML = time;
}

// Number Format

function padZeros(num, places) {
    return String(num).padStart(places,'0')
}

function timeFormat(num) {
    var hours = Math.floor(num/3600);
    var mins = Math.floor((num%3600)/60);
    var secs = num%60;
    pad = num => padZeros(num,2)

    if (num < 3600)
        return `${pad(mins)}:${pad(secs)}`;
    return `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
}
