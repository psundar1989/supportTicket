
// Define your state structure
interface LayoutState {
    // sidebarVisibilitytype?: string;
    // layoutType?: string;
    // layoutModeType?: string;

    layoutType?: string;
    layoutModeType?: string;
    leftSidebarType?: string;
    layoutWidthType?: string;
    layoutPositionType?: string;
    topbarThemeType?: string;
    leftsidbarSizeType?: string;
    leftSidebarViewType?: string;
    leftSidebarImageType?: string;
    sidebarVisibilitytype?: string;
  }
        // leftSidebarType,
        // layoutModeType,
        // layoutWidthType,
        // layoutPositionType,
        // topbarThemeType,
        // leftsidbarSizeType,
        // leftSidebarViewType,
        // leftSidebarImageType,
        // sidebarVisibilitytype
  //}
  
  // Define the root state which includes the layout slice
  interface RootLayoutState {
    layoutSlice: LayoutState;
  }

  export type {
    LayoutState,
    RootLayoutState,
  };