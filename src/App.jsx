import Button from './components/Button';

function App() {
  return (
      <div className="p-8 mt-4 text-center">
	      <h1 className="text-3xl text-blue-700 mb-3">Dlema Quiz App</h1>
	      <p className="text-gray-400 mb-4">A simple and static quizz App. Made by <a href="https://github.com/iwanharyatno" className="text-blue-400">Iwan Haryatno</a>.</p>
          <Button text="Start" />
      </div>
  );
}
export default App;