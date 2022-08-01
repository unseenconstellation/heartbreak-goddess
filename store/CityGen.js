export function cityNameGen(){
    const firstFull = 
    [
        "Rose", "Iron", "Ash", "Wind", "Hull", "Golden", "White", "Black", "Red", "Green",
        "Oak", "Elm", "Maple", "Pine", "Holly", "Hill", "Stone", "Shade", "Sun", "Moon",
        "Ice", "Ember", "Willow", "Free", "Gold", "Silver","Valen", "Winter", "Summer", "Middle",
        "Rich", "Queens", "Kings", "Prince", "Faux", "Crux", "Hollow", "May", "Holts", "Farm",
        "Frost", "Bay", "Sage", "Sand", "Fox", "Mill", "Back", "Day", "Night", "Salt","New"
    ]

    const secondSyl = 
    [
        "wood", "berg", "burg", "side", "bury", "cester", "town", "ton", "dale", "ford", 
        "land", "borough", "stead", "grad", "mouth", "port", "view", "caster", "by", "ville",
        "folk", "worth", "side", "rough", "ham", "vine", "more", "mery", "fast", "ron",
        "set", "shire", "son", "gate", "well", "ridge", "burn", "polis", "mond", "fast",
        "lake"
        
    ]
    return(firstFull[Math.floor(Math.random()*firstFull.length)]+secondSyl[Math.floor(Math.random()*secondSyl.length)])
}
console.log(cityNameGen())