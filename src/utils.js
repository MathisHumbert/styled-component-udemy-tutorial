export const colors = {
  primary: '#645cff',
};

// this is not mandotary to use and obj for destructuring, it only allow us to use width, type and color in any order
export const setupBorder = ({ width, type, color }) => {
  return `${width}px ${type} ${color}`;
};
