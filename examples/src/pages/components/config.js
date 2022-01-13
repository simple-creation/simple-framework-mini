
import SearchNormal from './search/search-normal'
import SwiperNormal from './swiper/swiper-normal'
import HandleNormal from './entrypoint/handle-normal'
import RecommendNormal from './recommend/recommend-normal'

let componentList = new Map([
  ["search-normal", SearchNormal],
  ["swiper-normal", SwiperNormal],
  ["handle-normal", HandleNormal],
  ["recommend-normal", RecommendNormal]
]);
let compomentListLocal = new Map();
class PageConfig{
   __sectionList=[];
   addPageSection=(templateName, data)=>{   
      let sectionComponent = componentList.get(templateName);
      if (!sectionComponent){
          sectionComponent = compomentListLocal.get(templateName);
      }
      let sectionObject = {'component':sectionComponent,'data':data};
      this.__sectionList.push(sectionObject);
      return this;
   }
   registerComponent=(name,section)=>{
    compomentListLocal.set(name,section);
   }
   setPageSection=(index,templateName,data)=>{
     if (index > this.__sectionList.length-1){
       return false;
     }
     let sectionComponent = componentList.get(templateName);
     let sectionObject = {'component':sectionComponent,'data':data};
     this.__sectionList[index] = sectionObject;
     return true;
   }
   getPageSectionList=()=>{
     return this.__sectionList;
   }
}
export default PageConfig;
