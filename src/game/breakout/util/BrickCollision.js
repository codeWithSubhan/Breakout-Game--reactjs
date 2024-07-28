export default function BrickCollision(ballObj, bricks) {
  var distX = Math.abs(ballObj.x - bricks.x - bricks.width / 2);
  var distY = Math.abs(ballObj.y - bricks.y - bricks.height / 2);

  console.log(ballObj, bricks);

  if (distX > bricks.width / 2 + ballObj.rad) {
    return {
      hit: false,
    };
  }

  if (distY > bricks.height / 2 + ballObj.rad) {
    return {
      hit: false,
    };
  }

  if (distX <= bricks.width / 2) {
    return {
      hit: true,
      axis: "Y",
    };
  }
  if (distY <= bricks.height / 2) {
    return {
      hit: true,
      axis: "X",
    };
  }

  // also test for corner collisions
  var dx = distX - bricks.width / 2;
  var dy = distY - bricks.height / 2;
  // return dx * dx + dy * dy <= ballObj.rad * ballObj.rad;
  return {
    hit: dx * dx + dy * dy <= ballObj.rad * ballObj.rad,
    axis: "X",
  };
}
