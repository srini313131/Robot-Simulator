import RobotSvg from './RobotSvg';


export const TEXT = {
'Robot Simulator':'Robot Simulator',
Move: 'Move'
}
export const gridSize = 5;
export const directionEnum = {
    N:'N',
    E:'E',
    S:'S',
    W:'W'
}
export const robotInitPosition = { x: 2, y: 2, direction: directionEnum.N };
export const directionOffsets = {
  'N': { x: 0, y: -1 },
  'E': { x: 1, y: 0 },
  'S': { x: 0, y: 1 },
  'W': { x: -1, y: 0 }
};

export const renderGrid = (robot) => {
  const grid = [];
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const isRobot = x === robot.x && y === robot.y;
      grid.push(
        <div
          key={`${x}-${y}`}
          className="cell"
        >
          {isRobot && <RobotSvg/>}
        </div>
      );
    }
  }
  return grid;
};

export const isWithInGrid = (newX, newY)=> newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize;