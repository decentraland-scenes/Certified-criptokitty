// NFT picture frame
const entity = new Entity()
const shapeComponent = new NFTShape(
  'ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536',
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
let floor = new Entity()
floor.addComponent(new GLTFShape('models/FloorBaseGrass.glb'))
floor.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1.6, 0.1, 1.6),
  })
)
engine.addEntity(floor)
