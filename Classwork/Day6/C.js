var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

var filteredArray = players.filter(
    (obj) => {
        return obj.club == "FC Barcelona" 
    });

var newArray = players.map(
    (obj) => {
        var a = obj.name;
        return a;
    }
)
