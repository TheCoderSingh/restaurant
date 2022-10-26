import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import { Header, Main, CreateItem, Cart } from './components';
import { useStateValue } from './context/StateProvider';
import { fetchFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await fetchFoodItems().then(data => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/create-item" element={<CreateItem />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
