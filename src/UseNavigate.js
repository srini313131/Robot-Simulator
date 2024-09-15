import {  useState } from 'react';
import {renderGrid, directionOffsets, isWithInGrid, robotInitPosition} from './helper'


export const useNavigate = ()=>{
    const [robot, setRobot] = useState(robotInitPosition);
    const grid = renderGrid(robot);
    const rotate = (direction) => {
        setRobot({ ...robot, direction });
      };
    const moveForward = () => {
        const offset = directionOffsets[robot.direction];
          const newX = robot.x + offset.x;
            const newY = robot.y + offset.y;
            if (isWithInGrid(newX, newY)) {
              setRobot({ ...robot, x: newX, y: newY, direction: robot.direction });
            }
      };

      return [robot,grid,rotate, moveForward]
}