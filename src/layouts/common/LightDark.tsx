import React,{useEffect} from 'react';
import { LAYOUT_MODE_TYPES } from '../../interfaces/layout';
import { changeLayout, changeLayoutMode, changeLayoutPosition, changeLayoutWidth, changeLeftsidebarSizeType, changeLeftsidebarViewType, changeSidebarImageType, changeSidebarTheme, changeSidebarVisibility, changeTopbarTheme } from '@/utils/layoutHandlers';
import { useDispatch, useSelector } from 'react-redux';
import { RootLayoutState } from '@/interfaces/layoutInterface';


const LightDark= () => {
  
const {layoutType,
  leftSidebarType,
  layoutModeType,
  layoutWidthType,
  layoutPositionType,
  topbarThemeType,
  leftsidbarSizeType,
  leftSidebarViewType,
  leftSidebarImageType,
  sidebarVisibilitytype} = useSelector((state:RootLayoutState) => state.layoutSlice);

  const dispatch:any = useDispatch();

    const mode = layoutModeType === LAYOUT_MODE_TYPES['DARKMODE'] ? LAYOUT_MODE_TYPES['LIGHTMODE'] : LAYOUT_MODE_TYPES['DARKMODE'];
    
      /*
    layout settings
    */
    useEffect(() => {
      if (
          layoutType ||
          leftSidebarType ||
          layoutModeType ||
          layoutWidthType ||
          layoutPositionType ||
          topbarThemeType ||
          leftsidbarSizeType ||
          leftSidebarViewType ||
          leftSidebarImageType ||
          sidebarVisibilitytype
      ) {
          window.dispatchEvent(new Event('resize'));
         dispatch(changeLeftsidebarViewType(leftSidebarViewType));
          dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
         dispatch(changeSidebarTheme(leftSidebarType));
          dispatch(changeLayoutMode(layoutModeType));
         dispatch(changeLayoutWidth(layoutWidthType));
          dispatch(changeLayoutPosition(layoutPositionType));
         dispatch(changeTopbarTheme(topbarThemeType));
         dispatch(changeLayout(layoutType));
          dispatch(changeSidebarImageType(leftSidebarImageType));
         dispatch(changeSidebarVisibility(sidebarVisibilitytype));
      }
  }, [layoutType,
      leftSidebarType,
      layoutModeType,
      layoutWidthType,
      layoutPositionType,
      topbarThemeType,
      leftsidbarSizeType,
      leftSidebarViewType,
      leftSidebarImageType,
      sidebarVisibilitytype,
      dispatch]);

// Dark or Light Mode HandlerHandler for Changing Layout Mode
const onChangeLayoutMode = (value: string) => {
  dispatch(changeLayoutMode(value));
};


  return (
    <div className="ms-1 header-item d-none d-sm-flex">
            <button
                onClick={() => onChangeLayoutMode(mode)}
                type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">
                <i className='bx bx-moon fs-22'></i>
            </button>
        </div>
  )
}

export default LightDark;