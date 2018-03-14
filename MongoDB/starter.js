

db.places.update({"country": "Morroco"}, {$set:{"continent": "Antartica"}});

//this code allows you to updtate multiple rows that have the country morroco
db.places.update({"country": "Morroco"}, {$set:{"continent": "Asia"}}, {multi: true});

db.places.update({"country": "Morroco"}, {$set:{"capitol": "Rabat"}})

db.places.update({"country": "Morroco"}, {$set:{"capitol": "Rabat"}},{multi:true})
//update/push things to and array
db.places.update({"country": "Morroco"}, {$push: {"Major Cities": "Agadir"}}, {multi:true})

db.places.remove({"country": "Morroco"}, {justOne: true});

//remove all things in table
db.places.remove({})

//remove the entire tabel from db "drop"
db.places.drop()
//deletes entire db
db.dropDatabase()

db.places.insert({ "continent": "North America", "country":"Morroco", "Major Cities": ["Denver", "New York"]})