import Block5 from '../../block5';
import FunctionList from '../../functionList/src';
import Swiper from '../../swiper';

import imagetextPage from '../../imagetextPage';


const DataSource = {
  
    title: {
      main: "选择",
      subTitle: "在这里用一段话介绍服务的案例情况",
    },
    itemsData: [
      {
        name: 'Block5',
        sourcecodePath: 'block5',
        component: Block5,
        type:'block'
      },
      {
        name: 'FunctionList',
        sourcecodePath: 'functionList',
        component: FunctionList,
        type:'block'
      },
      {
        name: 'Swiper',
        sourcecodePath: 'swiper',
        component: Swiper,
        type:'block'
      },
      {
        name: 'ImageTextPage',
        sourcecodePath: 'imagetextPage',
        component: imagetextPage,
        type:'page'
      },
      
    ],
   
};
export default DataSource;
