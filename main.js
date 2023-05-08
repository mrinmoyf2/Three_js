import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';

//scene and camera 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

//Rendering 
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//shape
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//Animate the loop
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera,  );
}
animate();


























//Renderer
// const canvas = document.querySelector(".webgl");
// const renderer = new THREE.WebGL1Renderer({canvas})
// renderer.setSize(800, 600)
// renderer.render(scene, camera)


// //Scene
// const scene = new THREE.Scene()

// //Create our shapes

// const geometry = new THREE.SphereGeometry(3,64,64)
// const material = new THREE.MeshStandardMaterial({
//     //object
//     color:'#00ff83',
// })

// //mesh is the combination of geometry and material
// const mesh = new THREE.Mesh(geometry, material)

// scene.add(mesh)

// //Camera
// const camera = new THREE.PerspectiveCamera(45,800, 600)
// scene.add(camera)
 

// //Renderer
// const canvas = document.querySelector(".webgl");
// const renderer = new THREE.WebGL1Renderer({canvas})
// renderer.setSize(800, 600)
// renderer.render(scene, camera)

// import * as THREE from 'three';

// const renderer = new THREE.WebGL1Renderer();

// renderer.setSize(window.innerWidth , window.innerHeight);

// document.body.appendChild(renderer.domElement);