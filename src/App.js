
import './App.css';
import {directionEnum,TEXT} from './helper';
import {useNavigate} from './UseNavigate';

function App() {
  const [robot,grid,rotate, moveForward] = useNavigate();

  return (
    <>
      <h1>{TEXT['Robot Simulator']}</h1>
      <div className="grid">
        {grid}
      </div>
      <div className="controls">
      <button  onClick={() => rotate(directionEnum.N)} className={robot.direction === directionEnum.N? 'btn active':'btn'}>{directionEnum.N}</button>
      <div className='EW'>
      <button  onClick={() => rotate(directionEnum.W)} className={robot.direction === directionEnum.W? 'btn active':'btn'}>{directionEnum.W}</button>
      <button onClick={moveForward} className='btn--move'>{TEXT.Move}</button>

      <button  onClick={() => rotate(directionEnum.E)} className={robot.direction === directionEnum.E? 'btn active':'btn'}>{directionEnum.E}</button>

      </div>
      <button  onClick={() => rotate(directionEnum.S)} className={robot.direction === directionEnum.S? 'btn active':'btn'}>{directionEnum.S}</button>

       
      </div>
    </>
  );
}

export default App;
