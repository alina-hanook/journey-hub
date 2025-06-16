import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <main className="container my-4">
        <Outlet /> {/* This renders the matched child route */}
      </main>
    </>
  );
};

export default App;