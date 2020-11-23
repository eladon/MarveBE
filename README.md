# MarveBE

API for getting an actors name, and returning hes Marvel movies appereances and total number of characters played

### API END POINTS

# Post a request with an actors name to get all of the actors appereances in Marvel movies

# Including number of characters

```Using localhost
http://localhost:4000/movies?actorsName={actorsName}
```

```Using Heroku
https://immense-hamlet-61107.herokuapp.com/movies?actorsName={actorsName}
```

# Post example

http://localhost:4000/movies?actorsName=Chris Evans
https://immense-hamlet-61107.herokuapp.com/movies?actorsName=Chris Evans

# Response example

[
[{
"title": "Captain America: The First Avenger",
"character": "Steve Rogers / Captain America"
}, {
"title": "Captain America: The Winter Soldier",
"character": "Steve Rogers / Captain America"
}, {
"title": "Captain America: Civil War",
"character": "Steve Rogers / Captain America"
}, {
"title": "The Avengers",
"character": "Steve Rogers / Captain America"
}, {
"title": "Avengers: Endgame",
"character": "Steve Rogers / Captain America"
}, {
"title": "Fantastic Four: Rise of the Silver Surfer",
"character": "Johnny Storm / Human Torch"
}, {
"title": "Avengers: Infinity War",
"character": "Steve Rogers / Captain America"
}, {
"title": "Fantastic Four",
"character": "Johnny Storm / Human Torch"
}, {
"title": "Avengers: Age of Ultron",
"character": "Steve Rogers / Captain America"
}, {
"title": "Thor: The Dark World",
"character": "Loki as Captain America"
}, {
"title": "Spider-Man: Homecoming",
"character": "Steve Rogers / Captain America"
}, {
"title": "Captain Marvel",
"character": "Steve Rogers / Captain America"
}, {
"title": "Ant-Man",
"character": "Steve Rogers / Captain America"
}], {
"numberOfCharacters": 3,
"characters": ["Captain America", "Human Torch", "Loki as Captain America"]
}
]
