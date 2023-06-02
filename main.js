import * as THREE from "three"; //Three Class
import { TextGeometry } from "three/addons/geometries/TextGeometry.js"; //TextGeometry class for Text-to-Screen
import { FontLoader } from "three/addons/loaders/FontLoader.js";

//x-axis -> Right/Left
//y-axis -> Up/Down
//z-axis -> In/Out

//Creating our scene
const scene = new THREE.Scene();
// scene.background = new THREE.Color("#faedcd");
//Creating our camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//Testing
// const loader = new FontLoader();
// loader.load("fonts/helvetiker_regular.typeface.json", (font) => {
//   const geometry = new TextGeometry("Hi!", {
//     font: font,
//     size: 80,
//     height: 5,
//     curveSegments: 12,
//     bevelEnabled: true,
//     bevelThickness: 10,
//     bevelSize: 8,
//     bevelOffset: 0,
//     bevelSegments: 5,
//   });
//   scene.add(geometry);
// });
//Testing

//Rendering
const renderer = new THREE.WebGLRenderer();
//Setting the size of the scene we are going to render
renderer.setSize(window.innerWidth, window.innerHeight);
//Appending the rendered scene to the dom
document.body.appendChild(renderer.domElement);

//Creating our shapes to animate and render to the screen

//Global Green Cube
// //Creating the shape of the cube
// const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
// //Setting the color of the cube material
// const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// //Setting the Mesh to the cube shape, then the material mounted on top after
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// //Setting the position in which the cube will render to the screen
// cube.position.set(0, 50, 0);
// //Adding the cube to the scene
// scene.add(cube);

//Globe (Earth)
//Loading textures for the Globe
const textureLoader = new THREE.TextureLoader();
//Loading the texture we want onto the textureloader class instance
const texture = textureLoader.load(
  "https://media.istockphoto.com/id/182058785/photo/world-topographic-map.jpg?s=612x612&w=0&k=20&c=eWrcGjNB9o-KrzW4TC2yxUII7k5E26QIqlN3JEJu1e4="
);
//Setting the shape of the globe
const geometry = new THREE.SphereGeometry(3, 32, 32);
//Creating the material of our globe using map property
const material = new THREE.MeshPhongMaterial({
  map: texture,
});
//Setting the Mesh to the geometry of the globe, then the material mounted onto it
const earth = new THREE.Mesh(geometry, material);

//Adding the globe to the screen
scene.add(earth);
earth.position.set(-2, 11, 0); //-2, 0, 0

//Globe 2 (Moon)
const moonTexture = new THREE.TextureLoader();
const texture2 = moonTexture.load(
  //   "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg"
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Moon_texture.jpg/1200px-Moon_texture.jpg"
);
const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
const moonMaterial = new THREE.MeshPhongMaterial({
  map: texture2,
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);
moon.position.set(1, 15, 0); //1, 4, 0

//Globe3 (Jupiter)
const jupiterTexture = new THREE.TextureLoader();
const texture3 = jupiterTexture.load(
  "https://external-preview.redd.it/JJTceYLFNKh1trdhGTiDAku5dMw24H61e8xyi2_TS6g.jpg?auto=webp&s=1f3d29a36611e75f0fa8bf6e25865809a41771ad"
);
const jupiterGeometry = new THREE.SphereGeometry(8, 32, 32);
const jupiterMaterial = new THREE.MeshPhongMaterial({
  map: texture3,
});
//New Code Start

//New Code End
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);
jupiter.position.set(22, 0, 0); //22, 0, 0

//Globe4 (Mercury)
const mercuryTexture = new THREE.TextureLoader();
//Texture could be changed?
const texture4 = mercuryTexture.load(
  "https://spacecentre.co.uk/wp-content/uploads/2019/09/GlobalColor2017_equi_64ppd.1000.750.430-700x0-c-default.jpg"
);
const mercuryGeometry = new THREE.SphereGeometry(2, 32, 32);
const mercuryMaterial = new THREE.MeshPhongMaterial({
  map: texture4,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
scene.add(mercury);
mercury.position.set(-22, 5, 0); //-22, 0, 0

//Globe5 (Venus)
const venusTexture = new THREE.TextureLoader();
//Texture can be changed?
const texture5 = venusTexture.load(
  "https://upload.wikimedia.org/wikipedia/commons/1/1c/Solarsystemscope_texture_8k_venus_surface.jpg"
);
const venusGeometry = new THREE.SphereGeometry(3, 32, 32);
const venusMaterial = new THREE.MeshPhongMaterial({
  map: texture5,
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venus);
venus.position.set(-12, 8, 0); //-12, 0, 0

//Globe6 (Mars)
const marsTexture = new THREE.TextureLoader();
const texture6 = marsTexture.load(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Solarsystemscope_texture_2k_mars.jpg/1280px-Solarsystemscope_texture_2k_mars.jpg"
);
const marsGeometry = new THREE.SphereGeometry(2, 32, 32);
const marsMaterial = new THREE.MeshPhongMaterial({
  map: texture6,
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);
mars.position.set(8, 15, 0); //8, 0, 0

//Globe7 (Saturn)
const saturnTexture = new THREE.TextureLoader();
const texture7 = saturnTexture.load(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Solarsystemscope_texture_8k_jupiter.jpg/2560px-Solarsystemscope_texture_8k_jupiter.jpg"
);
const saturnGeometry = new THREE.SphereGeometry(8, 32, 32);
const saturnMaterial = new THREE.MeshPhongMaterial({
  map: texture7,
});
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

//Saturn Ring
const ringGeometry = new THREE.RingGeometry(1.2, 1.8, 64);
const ringMaterial = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.8,
  depthWrite: false,
});
const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
ringMesh.rotation.x = Math.PI / 2;
saturn.add(ringMesh);
ringMesh.position.set(1.5, 0, 0);
ringMesh.scale.set(1.5, 1.5, 1.5);
//Saturn Ring

scene.add(saturn);
saturn.position.set(43, 5, 0); //41, 0, 0

//Globe8 (Neptune)
const neptuneTexture = new THREE.TextureLoader();
const texture8 = neptuneTexture.load(
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_2k_neptune.jpg"
);
const neptuneGeometry = new THREE.SphereGeometry(6, 32, 32);
const neptuneMaterial = new THREE.MeshPhongMaterial({
  map: texture8,
});
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);
neptune.position.set(82, 15, 0); //75, 0, 0

//Globe9 (Uranus)
const uranusTexture = new THREE.TextureLoader();
const texture9 = uranusTexture.load(
  "https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg"
);
const uranusGeometry = new THREE.SphereGeometry(6, 32, 32);
const uranusMaterial = new THREE.MeshPhongMaterial({
  map: texture9,
});
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);
uranus.position.set(64, 10, 0); //58, 0, 0

//Globe10 (The Sun)
const sunTexture = new THREE.TextureLoader();
const texture10 = sunTexture.load(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Map_of_the_full_sun.jpg/1280px-Map_of_the_full_sun.jpg"
);
const sunGeometry = new THREE.SphereGeometry(35, 32, 32); //18 32 32
const sunMaterial = new THREE.MeshPhongMaterial({
  map: texture10,
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);
sun.position.set(-65, 0, 0); //-48, 0, 0

//Adding light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); //Default -> 0xffffff, 0.5
scene.add(ambientLight);

//Not too sure of this, but know it is supposed ot add light to the scene
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); //Default 0.5
// directionalLight.position.set(1, 1, 1);
// scene.add(directionalLight);

//Setting the position of the camera to fit both Cube and Globe
camera.position.set(13, 5, 80); //17, 0, 80

//Stars background for the planets scene
const skyboxGeometry = new THREE.BoxGeometry(
  window.innerWidth,
  window.innerHeight,
  700
); //Original Values placed at BoxGeometry() 2k, 1k, 1k
const starsTexture = new THREE.TextureLoader();
const texture11 = starsTexture.load(
  //   "https://upload.wikimedia.org/wikipedia/commons/9/9b/Pismis_24.jpg"
  "https://upload.wikimedia.org/wikipedia/commons/0/09/Night_stars_berlin.png"
);
const starsMaterial = new THREE.MeshBasicMaterial({
  map: texture11,
  side: THREE.BackSide,
});
const stars = new THREE.Mesh(skyboxGeometry, starsMaterial);
scene.add(stars);

//Setting up camera view movement based on click and drag, x and y axis
let mouseDown = false;
let lastMouseX = null;
let lastMouseY = null;

function onMouseDown(event) {
  mouseDown = true;
  lastMouseX = event.clientX;
  lastMouseY = event.clientY;
}

function onMouseUp() {
  mouseDown = false;
}

function onMouseMove(event) {
  if (!mouseDown) {
    return;
  }
  const deltaX = event.clientX - lastMouseX;
  const deltaY = event.clientY - lastMouseY;

  lastMouseX = event.clientX;
  lastMouseY = event.clientY;

  //Camera Rotation on drag
  //   const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
  //     new THREE.Euler(
  //       (deltaY * Math.PI) / 180,
  //       (deltaX * Math.PI) / 180,
  //       0,
  //       "XYZ"
  //     )
  //   );
  //   camera.quaternion.multiplyQuaternions(
  //     deltaRotationQuaternion,
  //     camera.quaternion
  //   );

  //Drag-to-move camera
  const movementSpeed = 0.1;

  const forward = new THREE.Vector3(0, 0, -1);
  forward.applyQuaternion(camera.quaternion);

  const right = new THREE.Vector3(1, 0, 0);
  right.applyQuaternion(camera.quaternion);

  const up = new THREE.Vector3(0, 1, 0);
  up.applyQuaternion(camera.quaternion);

  camera.position.addScaledVector(right, -deltaX * movementSpeed);
  camera.position.addScaledVector(forward, deltaY * movementSpeed);
  //   camera.position.addScaledVector(up, deltaY * movementSpeed);
}

// function mouseWheel(event) {
//   //Set the zoom speed
//   const zoomSpeed = 0.1;

//   //Update the camera position
//   camera.position.z += event.deltaY * zoomSpeed;

//   //Zoom min and max distance
//   const minDistance = 1;
//   const maxDistance = 10;
//   if (camera.position.z < minDistance) {
//     camera.position.z = minDistance;
//   } else if (camera.position.z > maxDistance) {
//     camera.position.z = maxDistance;
//   }
// }

document.addEventListener("mousedown", onMouseDown);
document.addEventListener("mouseup", onMouseUp);
document.addEventListener("mousemove", onMouseMove);
// document.addEventListener("wheel", mouseWheel);

//This function will be called and render our Camera and overall Scene
//Will apply animations(if declared) onto Created shapes
function animate() {
  requestAnimationFrame(animate);
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y -= 0.01;
  earth.rotation.y += 0.003;
  moon.rotation.y += 0.003;
  jupiter.rotation.y += 0.003;
  mercury.rotation.y += 0.003;
  venus.rotation.y += 0.003;
  mars.rotation.y += 0.003;
  saturn.rotation.y += 0.003;
  neptune.rotation.y += 0.003;
  uranus.rotation.y += 0.003;
  sun.rotation.y += 0.001; //0.001
  renderer.render(scene, camera);
}
animate();
