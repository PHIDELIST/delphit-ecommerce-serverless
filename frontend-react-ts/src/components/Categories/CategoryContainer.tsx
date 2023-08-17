import { useSelector } from 'react-redux';
import Fruits from './Fruits';
import type { RootState } from '../../redux/store'; 
import Sets from './Sets';
import Vegetables from './Vegetables';
import Greenery from './Greenery';
import Fungi from './Fungi';
import Groceries from './Groceries';
import Drinks from './Drinks';
import Sweets from './Sweets';

const CategoryContainer = () => {
  const ui = useSelector((state: RootState) => state.ui);



  return (
    <div className="category-main">
      {ui.ui === 'fruits' && (
        <div className='categories'>
          <Fruits />
        </div>
          )}: 
          {ui.ui ==='sets' && (
              <div className='categories'>
                <Sets />
              </div>
              )}:
              {ui.ui ==='vegetables' && (
                <div className='categories'>
                  <Vegetables />
                </div>
              )}:
              {ui.ui === 'greenary' && (
                <div className='categories'>
                  <Greenery />
                </div>
              )}:
              {
                ui.ui === 'fungi' && (
                  <div className='fungi'>
                    <Fungi />
                  </div>
                )
              }:
              {ui.ui === 'groceries' && (
                <div className='groceries'>
                  <Groceries />
                </div>
              )}:
              {ui.ui ==='sweets' && (
                <div className='sweets'>
                  <Sweets />
                </div>
              )}:
              {
                ui.ui ==='drinks' && (
                  <div className='drinks'>
                    <Drinks />
                  </div>
                )
              }
    </div>
  );
};

export default CategoryContainer;
