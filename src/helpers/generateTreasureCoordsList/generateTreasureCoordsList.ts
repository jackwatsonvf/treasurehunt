// grid for map is 8 x 5
// one big treasure and 2 small treasures for each map
// first treasure in the array is always the biggie

type TreasureCoordsList = TreasureCoords[]

export interface TreasureCoords {
  x: string
  y: string
}

// builds a single treasure location
const treasureCoords = (): TreasureCoords => {
  const yValueMap = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e'
  }
  const xValue = `${Math.floor(Math.random() * 8 + 1)}`
  const yValue = Math.floor(Math.random() * 5 + 1)

  return {
    x: xValue,
    y: yValueMap[yValue]
  }
}

// recursive to make sure the newly created location doesn't already exist in the list
const createNewCoords = (locations) => {
  const newLocation = treasureCoords()

  if (locations.some((e) => newLocation.x === e.x && newLocation.y === e.y)) {
    return createNewCoords(locations)
  }

  return newLocation
}

//
const generateTreasureCoordsList = (): TreasureCoordsList => {
  let coords = []
  const treasures = [1, 2, 3]

  treasures.forEach(() => {
    const newLocation = createNewCoords(coords)
    coords.push(newLocation)
  })

  return coords
}

export default generateTreasureCoordsList
