// NFT picture frame
const entity = new Entity()
const shapeComponent = new NFTShape(
  'ethereum://0x06012c8cf97bead5deae237070f9587f8e7a266d/229795',
  { color: Color3.Blue(), style: PictureFrameStyle.Gold_Carved }
)
entity.addComponent(shapeComponent)
entity.addComponent(
  new Transform({
    position: new Vector3(4, 1.5, 4),
  })
)
engine.addEntity(entity)

// fixed wall
const wall1 = new Entity()
wall1.addComponent(
  new Transform({
    position: new Vector3(4.5, 1, 4.1),
    scale: new Vector3(4, 3, 0.05),
  })
)
wall1.addComponent(new BoxShape())
engine.addEntity(wall1)

// ground
const floor = new Entity()
floor.addComponent(new GLTFShape('models/FloorBaseGrass.glb'))
floor.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1.6, 0.1, 1.6),
  })
)
engine.addEntity(floor)
