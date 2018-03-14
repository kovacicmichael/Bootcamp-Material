

db.animals.insert({"name": "zebra", "numlegs": 4, "class": "mammal", "weight": 350, "whatIWouldReallyCallIt": "Stripes"})
db.animals.insert({"name": "monkey", "numlegs": 2, "class": "mammal", "weight": 250, "whatIWouldReallyCallIt": "Ape"})
db.animals.insert({"name": "Lion", "numlegs": 4, "class": "mammal", "weight": 450, "whatIWouldReallyCallIt": "King"})
db.animals.insert({"name": "wolf", "numlegs": 4, "class": "mammal", "weight": 90, "whatIWouldReallyCallIt": "Social"})
db.animals.insert({"name": "fox", "numlegs": 4, "class": "mammal", "weight": 20, "whatIWouldReallyCallIt": "elegant"})
db.animals.insert({"name": "snake", "numlegs": 0, "class": "reptile", "weight": 5, "whatIWouldReallyCallIt": "Gross"})
db.animals.insert({"name": "frog", "numlegs": 4, "class": "reptile", "weight": 5, "whatIWouldReallyCallIt": "Warts"})
db.animals.insert({"name": "lion", "numlegs": 4, "class": "mammal", "weight": 400, "whatIWouldReallyCallIt": "king"})



//sorting

//by object iD
//assend is 1
//dessend is -1
db.animals.find().sort({_id: 1})
db.animals.find().sort({_id: -1})

//by weight
db.animals.find().sort({weight: -1})
//by name
db.animals.find().sort({name: -1})

db.animals.find().sort({numlegs: -1})

