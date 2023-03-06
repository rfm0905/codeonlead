import './App.css';

import Leaderboard from './Components/leaderboard'

function App() {
  let entries = []

  return (
    <div className="bg-slate-300">
      <h1 className="font-bold text-center text-5xl font-lexend py-20">Leaderboard</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-2">
            <div>
              <Leaderboard entries={entries}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
