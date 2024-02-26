function countNeighbours(row, col) {
    let count = 0
    for (let y = -1; y <= 1; y++) {
        for (let x = -1; x <= 1; x++) {
            //avoid looking at myself
            if (x != 0 && y != 0) {
                count += readFromCell(row + y, col + x)
            }
        }
    }
    return count
}