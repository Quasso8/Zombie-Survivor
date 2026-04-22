const geo = new THREE.SphereGeometry(0.15, 4, 4);
const mat = new THREE.MeshBasicMaterial({
 // Smooth pop-in
 if(c.scale && c.scale.x < 1){ c.scale.x += 0.05 * delta; c.scale.y += 0.05 * delta; c.scale.z += 0.05 * delta; }color: 0xffcc00});
let coins = [];
const MAX_COINS = 30;

export function spawnCoin(scene, position, amount = 1){

 if(coins.length > MAX_COINS) return;

 for(let i = 0; i < amount; i++){

  let c = new THREE.Mesh(geo, mat);

  c.position.copy(position);
  c.position.x += (Math.random() - 0.5) * 0.5;

  coins.push(c);
  scene.add(c);
 }
}

export function updateCoins
// pop-in animation added(scene, player, onCollect, delta){

 for(let i = coins.length - 1; i >= 0; i--){

  let c = coins[i];

  let dx = player.position.x - c.position.x;
  let dz = player.position.z - c.position.z;

  let dist = Math.sqrt(dx*dx + dz*dz);

  // Magnet
  if(dist < 6){
 let strength = (1 - dist / 6);
 dx /= dist;
 dz /= dist;
 c.position.x += dx * 0.6 * strength * delta;
 c.position.z += dz * 0.6 * strength * delta;
}else{
   c.position.z += 0.2 * delta;
  }

  // Einsammeln
  if(dist < 1){
   if(onCollect) onCollect(1);

   scene.remove(c);
   coins.splice(i,1);
   continue;
  }

  if(c.position.z > 10){
   scene.remove(c);
   coins.splice(i,1);
  }
 }
}