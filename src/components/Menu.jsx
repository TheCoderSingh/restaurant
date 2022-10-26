import { useEffect, useState } from 'react';
import { IoFastFood } from 'react-icons/io5';
import { motion } from 'framer-motion';

import RowContainer from './RowContainer';
import { categories } from '../utils/data';
import { useStateValue } from '../context/StateProvider';

const Menu = () => {
  const [filter, setFilter] = useState('chicken');

  const [{ foodItems }, dispatch] = useStateValue();

  useEffect(() => {}, [filter]);

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize relative text-headingColor before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-range-600 transition-all ease-in-out mr-auto">
          Our Hot Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none py-6">
          {categories &&
            categories.map(category => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? 'bg-cartNumBg' : 'bg-white'
                }  w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out hover:bg-cartNumBg`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`${
                    filter === category.urlParamName
                      ? 'bg-white'
                      : 'bg-cartNumBg'
                  } w-10 h-10 rounded-full  group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? 'text-textColor'
                        : 'text-white'
                    }  group-hover:text-textColor text-lg`}
                  />
                </div>

                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? 'text-white'
                      : 'text-textColor'
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter(n => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
