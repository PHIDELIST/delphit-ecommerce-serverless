import { useSelector } from 'react-redux';
import Fruits from './Fruits';
import type { RootState } from '../../redux/store'; 

const CategoryContainer = () => {
  const ui = useSelector((state: RootState) => state.ui);



  return (
    <div className="category-main">
      {ui.ui === 'fruits' && (
        <div className='categories'>
          <Fruits />
        </div>
      )}
    </div>
  );
};

export default CategoryContainer;
