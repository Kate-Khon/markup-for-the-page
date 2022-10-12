import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <main className="main">
        <div className="main__picture"></div>
        
        <div className="main__goods">
          <h3 className="main__subtitle">Nyheder</h3>
          <div className="main__cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
        
        <div className="main__categories">
          <div className="category"></div>
          <div className="category"></div>
          <div className="category"></div>
          <div className="category"></div>
          <div className="category"></div>
          <div className="category"></div>
        </div>
        
        <div className="main__gallery">
          <h3 className="main__hashtag">#birgittebonnerup</h3>
          <div className="main__photos">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
