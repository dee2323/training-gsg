
import './App.css';
import Router from './Router';
import ProductProvider from './context/productContext';
function App() {
  return (
    <>
      <ProductProvider>
        <Router />
      </ProductProvider>


    </>
  );
}

export default App;
