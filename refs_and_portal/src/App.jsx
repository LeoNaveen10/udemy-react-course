import Player from './components/Player.jsx';
import TimerChallegerFunction from './components/TimerChallenege.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallegerFunction title='easy' targetTime={1} />
      <TimerChallegerFunction title='getting tuff' targetTime={5}/>
      <TimerChallegerFunction title='scary' targetTime={10}/>
      <TimerChallegerFunction title='only pros..' targetTime={30}/>
    </>
  );
}

export default App;
