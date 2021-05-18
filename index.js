// Code your solution here
function findMatching(drivers, sought) {
    return drivers.filter(name => 
        name.toLowerCase() === sought.toLowerCase()
    )
}

function fuzzyMatch(drivers, search) {
    return drivers.filter(match=>
        match.toLowerCase().indexOf(search.toLowerCase()) === 0
        )
}

function matchName(drivers, name) {
    return drivers.filter(match => match.name === name);
}