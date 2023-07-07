import { css } from '@emotion/react'
import { mediaQueryMin, breakpoints } from 'base-components'

const imContentStyles = css`
  padding-bottom: 40px;

  ${mediaQueryMin(breakpoints.lg)} {
    padding-bottom: 60px;
  }

  &:only-of-type {
    padding: 40px 0;

    ${mediaQueryMin(breakpoints.lg)} {
      padding: 60px 0;
    }
  }

  .classPageStock &,
  .classPageSpecialsDealerDetails &,
  .classPageSpecialsBrandDetails &,
  .classPageBlogPostDetails &,
  .classPageBlogPostsByTagDetails &,
  .classPageAccesssoriesDetails &,
  .classPageLocateDealerDetails &,
  .classPageBuildBuyIndex &,
  .classPageBuildBuyConfigurator &,
  .classPageBuildBuyConversion & {
    padding-top: 0;
  }

  .classPageBuildBuyConfigurator & {
    padding-bottom: 0;
  }

  @media print {
    padding: 0;
  }
`
export default imContentStyles
