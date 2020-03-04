import React from 'react';
import * as THREE from 'three';

const Introduction = () => {

  console.log('lib');

var app = app || {};

app.createPlane = () => {
  const planeGeometry = new THREE.PlaneGeometry(120, 20);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCCCCCC
  });

  // Combine the geometry (shape) and the material (what
  // the surface looks like) into a mesh, the actual
  // 3D object
  const plane = new THREE.Mesh( planeGeometry, planeMaterial );

  plane.position.set(15, 0, 0);
  plane.rotation.x = -0.5 * Math.PI  // because of math(s)
  // plane.receiveShadow = true;  // shadows are cast onto this

  return plane;
};  // createPlane()


app.createSpotlight = () => {

  const spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -10, 60, 10 );

  return spotlight;
}; // createSpotlight()


app.createParticleSystem = () => {
  const particles = new THREE.Geometry();
  const dist = 1500;
  for (let i = 0; i < 20000; i++) {
    const p = new THREE.Vector3(
      100,
      THREE.Math.randInt(-dist, dist),
      THREE.Math.randInt(-dist, dist)
    );
    p.vx = 0//THREE.Math.randFloat(-1, 1);
    p.vy = 0//THREE.Math.randFloat(-1, 1);
    p.vz = 0//THREE.Math.randFloat(-1, 1)
    particles.vertices.push(p)
  }

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 2,
    map: THREE.TextureLoader('projects/snowflake.png'),
    blending: THREE.AdditiveBlending,
    transparent: true,
    alphaTest: 0.5
  })
  const particleSystem = new THREE.Points(
    particles,
    particleMaterial
  )
  return particleSystem

}

app.init = () => {
  console.log('huhu');

  // app.gui = new dat.GUI();
  // app.gui.add(app.controls, 'rotationSpeed', 0, 1);
  // app.gui.add(app.controls, 'bouncingSpeed', 0, 2)
  // app.gui.add(app.controls, 'particleVelocityScale', -1, 1)

  // The scene stores and keeps track of all the objects we're creating,
  // including the camera and the lights
  app.scene = new THREE.Scene();

  app.camera = new THREE.PerspectiveCamera(
    100,  // field of view
    window.innerWidth / window.innerHeight,  // screen ratio
    0.1,  // near field (how close to the camera should we still see things)
    1000  // far field (how far away from the camera should we still see things)
  );

  // Where exactly is the camera in the scene?
  app.camera.position.x = -500;
  app.camera.position.y = 0;
  app.camera.position.z = 600;
  // app.camera.position.set(-30, 40, 30);

  app.camera.lookAt(app.scene.position);  // Look at the origin: x=0, y=0, z=0

  // The renderer calculates how to draw all the objects in the scene,
  // based on the lighting and the camera perspective, and renders
  // it all down to a 2D image to show in a <canvas> browser tag
  app.renderer = new THREE.WebGLRenderer();  // use hardware acceleration of gfx card!
  app.renderer.setSize( window.innerWidth, window.innerHeight );
  app.renderer.setClearColor( 0x000000 );  // background colour

  //
  app.renderer.shadowMap.enabled = true;  // shadows are computationally expensive, and thus disabled by default
  // app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // WTF???

document.body.appendChild( app.renderer.domElement );


  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );
  //control camera position and zoom

  app.ambient = new THREE.AmbientLight(0x666666);
  app.scene.add(app.ambient)

  app.particleSystem = app.createParticleSystem();
  app.scene.add(app.particleSystem)
  // app.stats = app.addStats()
  app.animate();//kick off the animation process
  // Finally, actually render everything once
}; // app.init()

  app.animate = () => {
    // app.stats.update();
    app.animateParticles()
    // app.controls.step += app.controls.bouncingSpeed;

    app.renderer.render( app.scene, app.camera );

    requestAnimationFrame( app.animate )

  }
  app.animateParticles = () => {

  const particles= app.particleSystem.geometry.vertices;
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    const distSquared = (p.x * p.x) + (p.y * p.y) + (p.z * p.z)

    if(distSquared > 10.0){
    const gravityForce = -0.2 * (1.0 /distSquared)
    p.vx += gravityForce * p.x
    p.vy += gravityForce * p.y
    // p.vz += gravityForce * p.z
}

    p.x -= p.vx * -0.8;
    p.y -= p.vy * -0.8;
    p.z -= p.vz * -0.8;
    // p.x += 2 * app.controls
  }//for
  app.particleSystem.geometry.verticesNeedUpdate = true;
  // app.particleSystem.rotation.y += 0.01

}

window.addEventListener('resize', app.resize)

window.onload = app.init;

  return (


    <div className="stars">

    </div>

  )
};

export default Introduction
