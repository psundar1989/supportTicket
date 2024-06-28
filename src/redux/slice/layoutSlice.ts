
import { createSlice } from "@reduxjs/toolkit";

import {
    LAYOUT_TYPES,
    LAYOUT_MODE_TYPES,
    LAYOUT_SIDEBAR_TYPES,
    LAYOUT_WIDTH_TYPES,
    LAYOUT_POSITION_TYPES,
    LAYOUT_TOPBAR_THEME_TYPES,
    LEFT_SIDEBAR_SIZE_TYPES,
    LEFT_SIDEBAR_VIEW_TYPES,
    LEFT_SIDEBAR_IMAGE_TYPES,
    PERLOADER_TYPES,
    SIDEBAR_VISIBILITY_TYPES} from "../../interfaces/layout";

    export interface LayoutState {
        layoutType?: LAYOUT_TYPES.HORIZONTAL | LAYOUT_TYPES.VERTICAL | LAYOUT_TYPES.TWOCOLUMN | LAYOUT_TYPES.SEMIBOX;
        layoutModeType?: LAYOUT_MODE_TYPES.LIGHTMODE | LAYOUT_MODE_TYPES.DARKMODE;
        leftSidebarType?: LAYOUT_SIDEBAR_TYPES.LIGHT | LAYOUT_SIDEBAR_TYPES.DARK | LAYOUT_SIDEBAR_TYPES.GRADIENT | LAYOUT_SIDEBAR_TYPES.GRADIENT_2 | LAYOUT_SIDEBAR_TYPES.GRADIENT_3 | LAYOUT_SIDEBAR_TYPES.GRADIENT_4;
        layoutWidthType?: LAYOUT_WIDTH_TYPES.FLUID | LAYOUT_WIDTH_TYPES.BOXED;
        layoutPositionType?: LAYOUT_POSITION_TYPES.FIXED | LAYOUT_POSITION_TYPES.SCROLLABLE;
        topbarThemeType?: LAYOUT_TOPBAR_THEME_TYPES.LIGHT | LAYOUT_TOPBAR_THEME_TYPES.DARK;
        leftsidbarSizeType?: LEFT_SIDEBAR_SIZE_TYPES.DEFAULT | LEFT_SIDEBAR_SIZE_TYPES.COMPACT | LEFT_SIDEBAR_SIZE_TYPES.SMALLICON | LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER;
        leftSidebarViewType?: LEFT_SIDEBAR_VIEW_TYPES.DEFAULT | LEFT_SIDEBAR_VIEW_TYPES.DETACHED;
        leftSidebarImageType?: LEFT_SIDEBAR_IMAGE_TYPES.NONE | LEFT_SIDEBAR_IMAGE_TYPES.IMG1 | LEFT_SIDEBAR_IMAGE_TYPES.IMG2 | LEFT_SIDEBAR_IMAGE_TYPES.IMG3 | LEFT_SIDEBAR_IMAGE_TYPES.IMG4;
        preloader?: PERLOADER_TYPES.ENABLE | PERLOADER_TYPES.DISABLE;
        sidebarVisibilitytype?:  SIDEBAR_VISIBILITY_TYPES.SHOW | SIDEBAR_VISIBILITY_TYPES.HIDDEN;
        layoutModal?: boolean;
      }

//get Session stored data
 const getPersistedState = (): Partial<LayoutState> => {
    if (typeof window !== 'undefined') {
      const storedState = sessionStorage.getItem("layoutState");
      return storedState ? JSON.parse(storedState) : {};
    }
    return {};
  };
  const persistedState=getPersistedState();
      
      const initialState: LayoutState = {
        layoutType: persistedState?.layoutType || LAYOUT_TYPES.VERTICAL,
        layoutModeType: persistedState?.layoutModeType || LAYOUT_MODE_TYPES.LIGHTMODE,
        leftSidebarType: LAYOUT_SIDEBAR_TYPES.DARK,
        layoutWidthType: LAYOUT_WIDTH_TYPES.FLUID,
        layoutPositionType: LAYOUT_POSITION_TYPES.FIXED,
        topbarThemeType: LAYOUT_TOPBAR_THEME_TYPES.LIGHT,
        leftsidbarSizeType: LEFT_SIDEBAR_SIZE_TYPES.DEFAULT,
        leftSidebarViewType: LEFT_SIDEBAR_VIEW_TYPES.DEFAULT,
        leftSidebarImageType: LEFT_SIDEBAR_IMAGE_TYPES.NONE,
        preloader: PERLOADER_TYPES.DISABLE,
        sidebarVisibilitytype: SIDEBAR_VISIBILITY_TYPES.SHOW,
        layoutModal: false
      };

      const layoutSlice=createSlice({
        name: "layoutState",
        initialState,
        //initialState: persistedState,
        reducers:{
            updateLayout:(state,action)=>{
                const layoutProp = action.payload;
                return {
                    ...state,
                    ...layoutProp,
                };
            }
        }
    })
    export const { updateLayout} = layoutSlice.actions;
    export default layoutSlice.reducer;