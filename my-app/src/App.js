import css from './App.module.css';
import MyIllustrations from './components/MyIllustrations';
import MyPaintings from './components/MyPaintings';
import MyPhotos from './components/MyPhotos';

function App() {
  return (
    <div className={css.sidebar}>
      {<MyPhotos/> }
      {<MyIllustrations/> }
      {<MyPaintings/> }
    </div>
  );
}

export default App;