import * as THREE from 'three'
// import { Button } from 'vant'

// class Thre {
//   constructor () {

//   }
// }
// create () {
//   var scene = new THREE.Scene()
//   var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//   var renderer = new THREE.WebGLRenderer()
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   document.body.appendChild(renderer.domElement)
//   var geometry = new THREE.BoxGeometry(1, 1, 1)
//   var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
//   var cube = new THREE.Mesh(geometry, material)
//   scene.add(cube)
//   camera.position.z = 5
//   // this.renderpra(scene, camera, renderer)
//   render(scene, camera, renderer)
// }
//   renderpra (scene, camera, renderer) {
//     renderer.render(scene, camera)
//     requestAnimationFrame(this.renderpra)
//   }
// }
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.y = 1
// camera.set(0, 10, 0)
var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
let a = 5
let b = 1
let cube
let line1
let cube1
let circle1
let circle2
let cone1
let type = cone1
let face12
let typeitem
let face11
let circle3
let keyboard = {}
let player = {
  speed: 0.8,
  turnSpeed: Math.PI * 0.02
}
let crate, cratTexture, crateNormalMap, crateBumpMap
/**
     * 清空当前obj对象的缓存
     * @param mesh  mesh对象
     * */
function clearCache (mesh) {
  console.log('mesh', mesh)
  mesh.geometry.dispose()
  mesh.material.dispose()
}
function create () {
  // clearCache(crate)
  // clearCache(cone1)
  scene.remove()
  var geometry = new THREE.BoxGeometry(b, b, b)
  var material = new THREE.MeshPhongMaterial({ color: 0x00ff00, wireframe: false, skinning: true })
  // material.side = THREE.DoubleSide // 双面，不剔除背面

  // var geometryline = new THREE.Geometry()
  // geometryline.vertices.push(new THREE.Vector3(-10, 0, 0))
  // geometryline.vertices.push(new THREE.Vector3(0, 10, 0))
  // geometryline.vertices.push(new THREE.Vector3(10, 0, 0))
  var linematerial = new THREE.LineBasicMaterial({ color: 0x9999FF })
  // line1 = new THREE.Line(geometry, linematerial)

  // var geometrybox1 = new THREE.BoxBufferGeometry(2, 1, 2) // 立方缓冲几何体
  // var materialbox1 = new THREE.MeshBasicMaterial({ color: 0xCC0000 })
  // cube1 = new THREE.Mesh(geometrybox1, materialbox1)

  // var geometrycircle1 = new THREE.CircleBufferGeometry(2, 5, 50, 150) // 第四个参数，圆形扇区中心角，不设置为圆，设置后为其他值
  // circle1 = new THREE.Mesh(geometrycircle1, material)

  var geometrycircle2 = new THREE.CircleGeometry(2, 32)
  circle2 = new THREE.Mesh(geometrycircle2, material)

  var geometrycone1 = new THREE.ConeBufferGeometry(2, 5, 32, 2, true)
  cone1 = new THREE.Mesh(geometrycone1, material)

  var geometryconeface12 = new THREE.DodecahedronBufferGeometry(1)
  face12 = new THREE.Mesh(geometryconeface12, material)

  var edges = new THREE.EdgesGeometry(geometrycircle2)
  var line = new THREE.LineSegments(edges, linematerial)

  var verticesOfCube = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
    -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1
  ]

  var indicesOfFaces = [
    2, 1, 0, 0, 3, 2,
    0, 4, 7, 7, 3, 0,
    0, 1, 5, 5, 4, 0,
    1, 2, 6, 6, 5, 1,
    2, 3, 7, 7, 6, 2,
    4, 5, 6, 6, 7, 4
  ]
  var geometry11 = new THREE.PolyhedronBufferGeometry(verticesOfCube, indicesOfFaces, 1, 2)
  face11 = new THREE.Mesh(geometry11, material)

  var materialnew = new THREE.LineDashedMaterial({
    color: 0xffffff,
    linewidth: 1,
    scale: 1,
    dashSize: 3,
    gapSize: 1
  })

  var light = new THREE.DirectionalLight(0xffffff, 1, 100)
  light.position.set(0, 3, 0)// default; light shining from top
  light.castShadow = true // default false
  scene.add(light)
  // var geometrycircle2 = new THREE.CircleGeometry(2, 32)
  circle3 = new THREE.Mesh(geometrycircle2, materialnew)

  cube = new THREE.Mesh(geometry, material)
  cube.receiveShadow = true
  cube.castShadow = true
  cube.position.set(0, 1, 0)

  var geometryplane1 = new THREE.PlaneBufferGeometry(20, 20, 32)
  var materialplane1 = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide })
  var plane1 = new THREE.Mesh(geometryplane1, materialplane1)
  plane1.receiveShadow = true
  // plane1.castShadow = true
  plane1.rotation.x = Math.PI / 2
  scene.add(plane1)

  // renderer.shadowMap.enabled = true
  // renderer.shadowMap.type = THREE.BasicShadowMap
  var ambientlight1 = new THREE.AmbientLight(0xffffff, 0.2)// soft white light

  var pointlight1 = new THREE.PointLight(0xffffff, 0.8, 100)
  pointlight1.position.set(0, 0, 0)
  ambientlight1.castShadow = true
  pointlight1.castShadow = true
  scene.add(ambientlight1)
  scene.add(pointlight1)

  // 加载贴图
  var textureLoader = new THREE.TextureLoader()
  cratTexture = textureLoader.load(require('../assets/logo.png'), function (texture) {
    console.log('enter texture', texture)
    var geometry12 = new THREE.BoxGeometry(b, b, b)
    var material12 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texture })
    // material12.map = texture
    crate = new THREE.Mesh(geometry12, material12)
    crate.position.set(1, 1, 1)
    crate.receiveShadow = true
    crate.castShadow = true
    scene.add(crate)
  }, undefined, function (err) {
    console.log(err)
  })
  crateNormalMap = textureLoader.load(require('../assets/images/dog.jpg'), function (texture) {
    console.log('enter22 texture', texture)
    var geometry12 = new THREE.BoxGeometry(b, b, b)
    var material12 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texture })
    // material12.map = texture
    crate = new THREE.Mesh(geometry12, material12)
    crate.position.set(-1, 1, 1)
    crate.receiveShadow = true
    crate.castShadow = true
    scene.add(crate)
  }, undefined, function (err) {
    console.log(err)
  })
  // crateBumpMap = textureLoader.load('src/assets/images/dog.jpg')
  // scene.add(line1)
  // scene.add(cube)
  // const typeitem = line
  typeitem = cube
  // console.log(typeitem)
  scene.add(typeitem)
  // scene.add(face12)
  // scene.add(circle2)
  camera.position.z = a
  // this.renderpra(scene, camera, renderer)
  render()
}
var render = function () {
  requestAnimationFrame(render)
  // cube.rotation.x += 0.1
  // cube.rotation.y += 0.1

  // cube1.rotation.x += 0.1
  // cube1.rotation.y += 0.1

  typeitem.rotation.x += 0.1
  typeitem.rotation.y += 0.1
  if (keyboard[87]) {
    camera.position.x -= Math.sin(camera.rotation.y) * player.speed
    camera.position.z += Math.cos(camera.rotation.y) * player.speed
    cube.position.y += 0.5
    plane1.rotation.y += 0.1
  } else if (keyboard[83]) {
    cube.position.y -= 0.5
    camera.position.x += Math.sin(camera.rotation.y) * player.speed
    camera.position.z -= Math.cos(camera.rotation.y) * player.speed
  } else if (keyboard[65]) {
    camera.rotation.y -= player.turnSpeed
  } else if (keyboard[68]) {
    camera.rotation.y += player.turnSpeed
  }
  // item.rotation.z += 0.1
  renderer.render(scene, camera)
}

function keyDown (event) {
  keyboard[event.keyCode] = true
}
function keyUp (event) {
  keyboard[event.keyCode] = false
}

window.addEventListener('keydown', keyDown)
window.addEventListener('keyup', keyUp)
export { create }
