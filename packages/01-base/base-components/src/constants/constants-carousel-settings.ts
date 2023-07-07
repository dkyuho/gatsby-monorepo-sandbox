// Customise settings for each carousel in the site
export const baseCarouselSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  showCarousel: true,
  swipeToSlide: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const stackedMultiCarouselSettings = {
  ...baseCarouselSettings,
  slidesToShow: 3,
}

export const vfTabbedCarouselSettings = {
  ...baseCarouselSettings,
  autoplaySpeed: 6000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const homePromosCarouselSettings = {
  ...baseCarouselSettings,
}

export const rowCarouselSettings = {
  ...baseCarouselSettings,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const testimonialsCarouselSettings = {
  ...baseCarouselSettings,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1560,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const stockWishlistCarouselSettings = {
  ...baseCarouselSettings,
  infinite: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const homeHeroCarouselSettings = {
  ...baseCarouselSettings,
  dots: false,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
}

export const sdKeyImageCarouselSettings = {
  ...baseCarouselSettings,
  autoplay: false,
  dots: false,
  arrows: false,
  slidesToShow: 1,
  focusOnSelect: true,
  responsive: undefined,
  adaptiveHeight: true,
}

export const sdKeyImageSmallCarouselSettings = {
  ...baseCarouselSettings,
  autoplay: false,
  dots: false,
  arrows: false,
  infinite: false,
  focusOnSelect: true,
  responsive: undefined,
}

export const sdSimilarVehicleCarouselSettings = {
  ...baseCarouselSettings,
  infinite: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const stockCarouselSettingsTwoCol = {
  ...baseCarouselSettings,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const stockCarouselSettingsOneCol = {
  ...baseCarouselSettings,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const blogCarouselSettings = {
  ...baseCarouselSettings,
  slidesToShow: 1,
  focusOnSelect: true,
  responsive: undefined,
}

export const vehicleBannerCarouselSettings = {
  ...baseCarouselSettings,
  autoplaySpeed: 9000,
  dots: false,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
}

export const buildBuyConfiguratorCarouselSettings = {
  ...baseCarouselSettings,
  autoplay: false,
  dots: false,
  arrows: false,
  slidesToShow: 1,
  responsive: undefined,
  adaptiveHeight: true,
}

export const brandLogoLinksCarouselSettings = {
  ...baseCarouselSettings,
  dots: true,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
      },
    },
  ],
}
