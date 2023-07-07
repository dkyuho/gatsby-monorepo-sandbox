import { css } from '@emotion/react'
import { locationsTokens } from 'base-components'

export const lcHoursHeadingwrapperStyles = css`
  background-color: ${locationsTokens.lcHoursHeadingWrapperBgCol};
  margin: 10px 0;

  &:first-of-type {
    margin-top: 0;
  }

  @media print {
    display: none;
  }
`
export const lcHoursHeadingStyles = css`
  ${locationsTokens.lcHoursHeadingFontStack};
  font-size: ${locationsTokens.lcHoursHeadingSize};
  text-transform: ${locationsTokens.lcHoursHeadingTransform};
  letter-spacing: ${locationsTokens.lcHoursHeadingLetterSpacing};
  color: ${locationsTokens.lcHoursHeadingColour};
  text-align: center;
  margin: 0;
  padding: 10px 5px;
`
export const lcHoursNoteWrapperStyles = css`
  padding: 12px 5px;
  background-color: ${locationsTokens.lcNoteWrapperBgCol};

  p {
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`
export const lcHoursNoteTextStyles = css`
  color: ${locationsTokens.lcNoteTextCol};
  font-size: 14px;
  text-align: center;
`
export const lcHoursRowStyles = css`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &.classCurrentDay {
    color: ${locationsTokens.lcHoursCurrentDayTextCol};
    background-color: ${locationsTokens.lcHoursCurrentDayBgCol};
  }
`
export const lcHoursTextStyles = css`
  ${locationsTokens.lcHoursTextFontStack};
  font-size: ${locationsTokens.lcHoursTextSize};
  text-transform: ${locationsTokens.lcHoursTextTransform};
  letter-spacing: ${locationsTokens.lcHoursTextLetterSpacing};
  color: ${locationsTokens.lcHoursTextColour};
`
