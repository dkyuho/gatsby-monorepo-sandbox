import { SerializedStyles } from '@emotion/react'

export default interface ButtonsTokens {
  // http://localhost:8000/
  homePromosBtnVariant: SerializedStyles
  homePromosBtnSize: SerializedStyles
  // http://localhost:8000/accessories/corolla/
  accessoriesCardBtnVariant: SerializedStyles
  accessoriesCardBtnSize: SerializedStyles
  // http://localhost:8000/accessories/corolla/
  accessoriesTabbedHeadingBtnVariant: SerializedStyles
  accessoriesTabbedHeadingBtnSize: SerializedStyles
  // http://localhost:8000/national-offers/
  specialsDisclaimersBtnVariant: SerializedStyles
  specialsDisclaimersBtnSize: SerializedStyles
  // http://localhost:8000/used-cars/for-sale/suzuki/swift/2011/gl/fz/492579/
  stockDetailsLocationsBtnVariant: SerializedStyles
  stockDetailsLocationsBtnSize: SerializedStyles
  // http://localhost:8000/used-cars/for-sale/suzuki/swift/2011/gl/fz/492579/
  stockCommentsBtnVariant: SerializedStyles
  stockCommentsBtnSize: SerializedStyles
  // http://localhost:8000/meet-the-band/
  teamMembersCardBtnVariant: SerializedStyles
  teamMembersCardBtnSize: SerializedStyles
  // ⚠️ component not being used
  alertPopupBtnVariant: SerializedStyles
  alertPopupBtnSize: SerializedStyles
  // http://localhost:8000/
  formHomeStockSlimVehicleBtnVariant: SerializedStyles
  formHomeStockSlimVehicleBtnSize: SerializedStyles
  // http://localhost:8000/ - FormHomeStockStandard / FormHomeStockImage / FormHomeStockTabbed
  formHomeStockBtnVariant: SerializedStyles
  formHomeStockBtnSize: SerializedStyles
  // http://localhost:8000/test-forms - after you submit a form
  formMessageBtnVariant: SerializedStyles
  formMessageBtnSize: SerializedStyles
  // http://localhost:8000/test-forms
  formSectionFooterBtnVariant: SerializedStyles
  formSectionFooterBtnSize: SerializedStyles
  // ⚠️ component not being used
  formPageStockBtnVariant: SerializedStyles
  formPageStockBtnSize: SerializedStyles
  // http://localhost:8000/
  locationsCardMapBtnVariant: SerializedStyles
  locationsCardMapBtnSize: SerializedStyles
  // http://localhost:8000/stock/ - range slider budget filter
  rsBudgetBtnVariant: SerializedStyles
  rsBudgetBtnSize: SerializedStyles
  // http://localhost:8000/local-offers/ - need to activate pdf download
  specialsDealerItemAsideDwnldBtnVariant: SerializedStyles
  specialsDealerItemAsideDwnldBtnSize: SerializedStyles
  // http://localhost:8000/
  vehiclesFinderTabbedHeadingBtnVariant: SerializedStyles
  vehiclesFinderTabbedHeadingBtnSize: SerializedStyles
  vehiclesFinderTabbedCarouselItemBtnVariant: SerializedStyles
  vehiclesFinderTabbedCarouselItemBtnSize: SerializedStyles
  // http://localhost:8000/build-and-buy/
  buildBuy: {
    asideResetBtnVariant: SerializedStyles | undefined
    asideResetBtnSize: SerializedStyles | undefined
    gridItemBuildBtnVariant: SerializedStyles | undefined
    gridItemBuildBtnSize: SerializedStyles | undefined
    gridItemInfoBtnVariant: SerializedStyles | undefined
    gridItemInfoBtnSize: SerializedStyles | undefined
    footerFinanceBtnVariant: SerializedStyles | undefined
    footerFinanceBtnSize: SerializedStyles | undefined
    footerEnquireBtnVariant: SerializedStyles | undefined
    footerEnquireBtnSize: SerializedStyles | undefined
    footerBuyBtnVariant: SerializedStyles | undefined
    footerBuyBtnSize: SerializedStyles | undefined
    formReserveNowBtnVariant: SerializedStyles | undefined
    formReserveNowBtnSize: SerializedStyles | undefined
    formFinanceSubmitBtnVariant: SerializedStyles | undefined
    formFinanceSubmitBtnSize: SerializedStyles | undefined
    formFinanceResetBtnVariant: SerializedStyles | undefined
    formFinanceResetBtnSize: SerializedStyles | undefined
    postcodePickerBtnVariant: SerializedStyles | undefined
    postcodePickerBtnSize: SerializedStyles | undefined
    postcodeUpdateBtnVariant: SerializedStyles | undefined
    postcodeUpdateBtnSize: SerializedStyles | undefined
    postcodeRemoveBtnVariant: SerializedStyles | undefined
    postcodeRemoveBtnSize: SerializedStyles | undefined
  }
  // http://localhost:8000/find-a-dealer/
  brandDealers: {
    cardFilterFindBtnVariant: SerializedStyles
    cardFilterFindBtnSize: SerializedStyles
    cardFilterLocationBtnVariant: SerializedStyles
    cardFilterLocationBtnSize: SerializedStyles
    // click a map marker
    mapMarkerBtnVariant: SerializedStyles
    mapMarkerBtnSize: SerializedStyles
  }
  // http://localhost:8000/blog/ or http://localhost:8000/
  blog: {
    cardBtnVariant: SerializedStyles
    cardBtnSize: SerializedStyles
    asideBtnVariant: SerializedStyles
    asideBtnSize: SerializedStyles
    asideActiveBtnVariant: SerializedStyles
    asideActiveBtnSize: SerializedStyles
    asideDwnldBtnVariant: SerializedStyles
    asideDwnldBtnSize: SerializedStyles
  }
  // http://localhost:8000/test-vehicles
  vehicleFeatures: {
    accessoryRowBtnVariant: SerializedStyles
    accessoryRowBtnSize: SerializedStyles
    carouselRowSingleBtnVariant: SerializedStyles
    carouselRowSingleBtnSize: SerializedStyles
    carouselRowTabbedBtnVariant: SerializedStyles
    carouselRowTabbedBtnSize: SerializedStyles
    carouselStackedMultiBtnVariant: SerializedStyles
    carouselStackedMultiBtnSize: SerializedStyles
    carouselStackedBtnVariant: SerializedStyles
    carouselStackedBtnSize: SerializedStyles
    gridBtnVariant: SerializedStyles
    gridBtnSize: SerializedStyles
    imageFullWidthBtnVariant: SerializedStyles
    imageFullWidthBtnSize: SerializedStyles
    rowSingleBtnVariant: SerializedStyles
    rowSingleBtnSize: SerializedStyles
    rowStackedMultiAltBtnVariant: SerializedStyles
    rowStackedMultiAltBtnSize: SerializedStyles
    rowStackedMultiIconsBtnVariant: SerializedStyles
    rowStackedMultiIconsBtnSize: SerializedStyles
    rowStackedMultiBtnVariant: SerializedStyles
    rowStackedMultiBtnSize: SerializedStyles
    sectionHeadingBtnVariant: SerializedStyles
    sectionHeadingBtnSize: SerializedStyles
    stackedAltBtnVariant: SerializedStyles
    stackedAltBtnSize: SerializedStyles
    stackedBtnVariant: SerializedStyles
    stackedBtnSize: SerializedStyles
    tickTockBtnVariant: SerializedStyles
    tickTockBtnSize: SerializedStyles
  }
}
