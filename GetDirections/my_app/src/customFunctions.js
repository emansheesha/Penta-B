// define CalculateDirection function to get x,y,direction
const CalculateDirection = (string_direction) => {
  // use split function to convert string to array of characters
  const arr_direction = string_direction.split("");
  //   call GetDirection function to get direction
  const direction = GetDirection(arr_direction);
  // use filter function to know how many points that the vehicle moves in x-axis
  const x_arr = arr_direction.filter(
    (element) => element === "R" || element === "L"
  );
  // use length of array know x-axis value
  const x_axis = x_arr.length;
  //   x in problem solving equals x-axis*2
  const x = x_axis * 2;
  //   call GetYAxis function to get y
  const y = GetYAxis(arr_direction, x_axis);
  return { x: x, y: y, direction: direction };
};
// define GetYAxis function to get y
const GetYAxis = (arr_direction, x_axis) => {
  // when string starts or ends with l or r it means that the vehicle doesn't move in y-direction so we can define y equals the sum of start, end and (x-1)
  let y1 = arr_direction[0] === "L" || arr_direction[0] === "R" ? 0 : 1;
  let y3 = arr_direction[-1] === "L" || arr_direction[-1] === "R" ? 0 : 1;
  let y2 = x_axis - 1;
  //   sum of y
  let y = y1 + y2 + y3;
  return y;
};
// define GetDirection function to get Direction
const GetDirection = (arr_direction) => {
  const dir = arr_direction[0];
  console.log(dir);
  //   use object literal to get direction instead of using switch or if
  const direction = {
    L: () => "WEST",
    R: () => "EAST",
    B: () => "SOUTH",
    F: () => "NORTH",
  };
  console.log(direction[dir]());
  return direction[dir]();
};
export default CalculateDirection;
