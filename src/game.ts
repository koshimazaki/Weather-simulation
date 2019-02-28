import { CheckWeather, CurrentWeather, Weather, LightningSystem } from "./modules/weather";
import { RotateSystem, SpinVel } from "./modules/flakeRotation";
import { IsPrecip, PrecipType, FallSystem, SpawnSystem } from "./modules/precipitation";



///////// SCENE FIXED ENTITIES

// WEATHER CONTROLLER

const weatherObject = new CurrentWeather()


// ADD HOUSE

const house = new Entity()
house.addComponent(new Transform())
house.getComponent(Transform).position.set(5, 0, 5)
house.set(new GLTFShape('models/house_dry.gltf'))
engine.addEntity(house)

weatherObject.house = house

// ADD CLOUDS

const clouds = new Entity()
clouds.addComponent(new Transform({
  position: new Vector3(5, 10, 5),
  scale: new Vector3(5, 5, 5)
}))
engine.addEntity(clouds)

weatherObject.clouds = clouds

// DEFINE LIGHTNING COMPONENTS AS AN ARRAY OF GLTF COMPONENTS

const lightningModels: GLTFShape[] = []
for (let i = 1; i < 6; i++) {
  const modelPath = 'models/ln' + i + '.gltf'
  const lnModel = new GLTFShape(modelPath)
  lightningModels.push(lnModel)
}

// ADD LIGHTNING ENTITY

const lightning = new Entity()
lightning.addComponent(new Transform())
lightning.getComponent(Transform).position.set(5, 10, 5)
lightning.getComponent(Transform).scale.setAll(5)
engine.addEntity(lightning)


// ADD SYSTEMS

engine.addSystem(new CheckWeather(weatherObject))
engine.addSystem(new FallSystem())
engine.addSystem(new RotateSystem())
engine.addSystem(new SpawnSystem(weatherObject))
engine.addSystem(new LightningSystem(weatherObject, lightning, lightningModels))