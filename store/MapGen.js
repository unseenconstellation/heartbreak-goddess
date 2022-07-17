export function randomMap() {

    let newSquares = []
    for (let y = 0; y < 9; y++) {
        let newRow = []
        for (let x = 0; x < 9; x++) {
            newRow.push({
                choice: false,
                icon: x
            })
        }
        newSquares.push(newRow)

    }
    console.log(newSquares.some(row => row.some(square => square.icon === "p")))
    let p = false
    while (!newSquares.some(row => row.some(square => square.icon === "p"))) {
        for (let i = 0; i < newSquares.length; i++) {
            for (let j = 0; j < newSquares[i].length; j++) {
                if (Number.isInteger(newSquares[i][j].icon)) {
                    if (Math.random() < 0.001 && !p) {
                        newSquares[i][j] = {
                            choice: false,
                            icon: "p"
                        }
                        p = true
                    }
                }
            }
        }

    }
    return newSquares


}
export function rangeCalc(atk, map, char) {
    console.log(map)
    let characterX = 0
    let characterY = 0
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x].icon === "p") {
                characterX = x
                characterY = y
            }
        }

    }
    let totalRange = []
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (Math.abs(j - characterX) + Math.abs(i - characterY) <= atk.range) {
                console.log("wtf")
                totalRange.push([i,j])
            }
        }
    }


    let newMap = [...map]
    for (let r = 0; r < newMap.length; r++) {
        for (let s = 0; s < newMap.length; s++) {
            totalRange.forEach(coordinate => {
                if (coordinate[0] === r && coordinate[1] === s) {
                    newMap[r][s].choice = true
                }

            })
        }
    }
    return newMap



}