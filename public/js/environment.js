let myMesh;

function createEnvironment(scene) {
  console.log("Adding environment");
  loadExhibit(scene);

  // interactive objects
  let texture = new THREE.TextureLoader().load("../assets/texture.png");
  let myGeometry = new THREE.PlaneGeometry(3, 3, 3);
  let myMaterial = new THREE.MeshBasicMaterial({ map: texture });
  myMesh = new THREE.Mesh(myGeometry, myMaterial);
  myMesh.position.set(0, 2, -5);
  scene.add(myMesh);

  myMesh.userData.link = "https://www.juliantisomathews.com/";
  myMesh.userData.isInteractable = true;



  //non-interactive objects
  let texture2 = new THREE.TextureLoader().load("../assets/texture.png");
  let myGeometry2 = new THREE.PlaneGeometry(3, 3, 3);
  let myMaterial2 = new THREE.MeshBasicMaterial({ map: texture });
  myMesh2 = new THREE.Mesh(myGeometry2, myMaterial2);
  // myMesh2.rotation.y = Math.PI / 2;
  myMesh2.position.set(4, 4, -5);
  scene.add(myMesh2);

  myMesh2.userData.link = "https://www.apple.com/";
  myMesh2.userData.isInteractable = true;
}


function updateEnvironment(scene) {
  // myMesh.position.x += 0.01;
}

function loadExhibit(scene) {
  // model



new THREE.MTLLoader()
.load("../Maze/maze.mtl", function (materials) {
    materials.preload();
    new THREE.OBJLoader()
        .setMaterials(materials)
        .load("..Maze/maze.obj", function (object) {
             // myObj = object;
            object.position.x = 0;
            object.position.z = 0;
            // object.scale.set(.2,.2,.2);
            // object.rotate.y = 50;
            var texture = new THREE.TextureLoader().load("../Maze/maze.jpg");

            object.traverse(function (child) {   // aka setTexture
                if (child instanceof THREE.Mesh) {
                    child.material.map = texture;
                }
            });
            scene.add(object);
        });
});
}