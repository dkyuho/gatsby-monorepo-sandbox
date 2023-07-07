import React from 'react'

const svgsIconName = {
  iconMath: 'iconMath',
  iconBrochureTick: 'iconBrochureTick',
  iconCarFront: 'iconCarFront',
  iconTwoCarFronts: 'iconTwoCarFronts',
  iconTwoCarFronts2: 'iconTwoCarFronts2',
  iconCarParts: 'iconCarParts',
  iconSteeringWheel: 'iconSteeringWheel',
  iconDollarShield: 'iconDollarShield',
  iconEmail: 'iconEmail',
  iconEmailOutline: 'iconEmailOutline',
  iconCarSpanner: 'iconCarSpanner',
  iconCashMoney: 'iconCashMoney',
  iconSearchCar: 'iconSearchCar',
  iconTick: 'iconTick',
  iconPlus: 'iconPlus',
  iconInfo: 'iconInfo',
  iconShieldTick: 'iconShieldTick',
  iconTestDrive: 'iconTestDrive',
  iconStock: 'iconStock',
  iconSpecials: 'iconSpecials',
  specialsSmall: 'specialsSmall',
  specialsXLarge: 'specialsXLarge',
  iconService: 'iconService',
  iconQuote: 'iconQuote',
  brochure: 'brochure',
  textMessage: 'textMessage',
  facebook: 'facebook',
  instagram: 'instagram',
  linkedin: 'linkedin',
  pinterest: 'pinterest',
  twitter: 'twitter',
  whatsapp: 'whatsapp',
  youtube: 'youtube',
  link: 'link',
  socialShare: 'socialShare',
  arrowLeftMedium: 'arrowLeftMedium',
  chevronUp: 'chevronUp',
  chevronRight: 'chevronRight',
  chevronDown: 'chevronDown',
  chevronLeft: 'chevronLeft',
  iconClose: 'iconClose',
  iconCloseLarge: 'iconCloseLarge',
  iconCloseHeavy: 'iconCloseHeavy',
  iconZoom: 'iconZoom',
  iconArrowPointLeft: 'iconArrowPointLeft',
  iconClock: 'iconClock',
  iconClockXLarge: 'iconClockXLarge',
  iconHome: 'iconHome',
  iconLocation: 'iconLocation',
  iconLocationSmall: 'iconLocationSmall',
  iconLocationXLarge: 'iconLocationXLarge',
  iconPhone: 'iconPhone',
  iconPhoneSmall: 'iconPhoneSmall',
  iconPhoneXLarge: 'iconPhoneXLarge',
  iconLinePhone: 'iconLinePhone',
  iconLineMap: 'iconLineMap',
  iconLineLocation: 'iconLineLocation',
  iconLineLocationLarge: 'iconLineLocationLarge',
  iconLineFleet: 'iconLineFleet',
  iconLineFleetLarge: 'iconLineFleetLarge',
  iconLineFinance: 'iconLineFinance',
  iconLineFinanceLarge: 'iconLineFinanceLarge',
  iconLineSales: 'iconLineSales',
  iconLineSalesLarge: 'iconLineSalesLarge',
  iconLineService: 'iconLineService',
  iconLineServiceLarge: 'iconLineServiceLarge',
  iconLineParts: 'iconLineParts',
  iconLinePartsLarge: 'iconLinePartsLarge',
  videoPlayButton: 'videoPlayButton',
  iconPrinter: 'iconPrinter',
  calculator: 'calculator',
  iconCheck: 'iconCheck',
  iconVisa: 'iconVisa',
  iconMastercard: 'iconMastercard',
  iconAmericanExpress: 'iconAmericanExpress',
  iconJCB: 'iconJCB',
  iconLaunch: 'iconLaunch',
} as const

const getViewBox = (name: keyof typeof svgsIconName) => {
  switch (name) {
    case svgsIconName.iconMath:
      return '0 0 20 20'
    case svgsIconName.iconBrochureTick:
      return '0 0 20 20'
    case svgsIconName.iconCarFront:
      return '0 0 20 20'
    case svgsIconName.iconTwoCarFronts:
      return '0 0 20 20'
    case svgsIconName.iconTwoCarFronts2:
      return '0 0 20 20'
    case svgsIconName.iconCarParts:
      return '0 0 20 20'
    case svgsIconName.iconSteeringWheel:
      return '0 0 20 20'
    case svgsIconName.iconDollarShield:
      return '0 0 20 20'
    case svgsIconName.iconEmail:
      return '0 0 20 20'
    case svgsIconName.iconEmailOutline:
      return '0 0 20 20'
    case svgsIconName.iconCarSpanner:
      return '0 0 20 20'
    case svgsIconName.iconCashMoney:
      return '0 0 20 20'
    case svgsIconName.iconSearchCar:
      return '0 0 20 20'
    case svgsIconName.iconTick:
      return '0 0 20 20'
    case svgsIconName.iconPlus:
      return '0 0 20 20'
    case svgsIconName.iconInfo:
      return '0 0 20 20'
    case svgsIconName.iconShieldTick:
      return '0 0 20 20'
    case svgsIconName.iconTestDrive:
      return '0 0 30 30'
    case svgsIconName.iconStock:
      return '0 0 30 30'
    case svgsIconName.iconSpecials:
      return '0 0 30 30'
    case svgsIconName.specialsSmall:
      return '0 0 30 30'
    case svgsIconName.specialsXLarge:
      return '0 0 70 70'
    case svgsIconName.iconService:
      return '0 0 30 30'
    case svgsIconName.iconQuote:
      return '0 0 30 30'
    case svgsIconName.brochure:
      return '0 0 30 30'
    case svgsIconName.textMessage:
      return '0 0 30 30'
    case svgsIconName.facebook:
      return '0 0 22 22'
    case svgsIconName.instagram:
      return '0 0 22 22'
    case svgsIconName.linkedin:
      return '0 0 22 22'
    case svgsIconName.pinterest:
      return '0 0 22 22'
    case svgsIconName.twitter:
      return '0 0 22 22'
    case svgsIconName.whatsapp:
      return '0 0 22 22'
    case svgsIconName.youtube:
      return '0 0 22 22'
    case svgsIconName.link:
      return '0 0 22 22'
    case svgsIconName.socialShare:
      return '0 0 22 22'
    case svgsIconName.arrowLeftMedium:
      return '0 0 46 46'
    case svgsIconName.chevronUp:
      return '0 0 30 30'
    case svgsIconName.chevronRight:
      return '0 0 30 30'
    case svgsIconName.chevronDown:
      return '0 0 30 30'
    case svgsIconName.chevronLeft:
      return '0 0 30 30'
    case svgsIconName.iconClose:
      return '0 0 30 30'
    case svgsIconName.iconCloseLarge:
      return '0 0 26 26'
    case svgsIconName.iconCloseHeavy:
      return '0 0 30 30'
    case svgsIconName.iconZoom:
      return '0 0 40 40'
    case svgsIconName.iconArrowPointLeft:
      return '0 0 31 31'
    case svgsIconName.iconClock:
      return '0 0 30 30'
    case svgsIconName.iconClockXLarge:
      return '0 0 70 70'
    case svgsIconName.iconHome:
      return '0 0 31 31'
    case svgsIconName.iconLocation:
      return '0 0 14 14'
    case svgsIconName.iconLocationSmall:
      return '0 0 30 30'
    case svgsIconName.iconLocationXLarge:
      return '0 0 70 70'
    case svgsIconName.iconPhone:
      return '0 0 14 14'
    case svgsIconName.iconPhoneSmall:
      return '0 0 30 30'
    case svgsIconName.iconPhoneXLarge:
      return '0 0 70 70'
    case svgsIconName.iconLinePhone:
      return '0 0 32 32'
    case svgsIconName.iconLineMap:
      return '0 0 32 32'
    case svgsIconName.iconLineLocation:
      return '0 0 32 32'
    case svgsIconName.iconLineLocationLarge:
      return '0 0 60 60'
    case svgsIconName.iconLineFleet:
      return '0 0 32 32'
    case svgsIconName.iconLineFleetLarge:
      return '0 0 60 60'
    case svgsIconName.iconLineFinance:
      return '0 0 32 32'
    case svgsIconName.iconLineFinanceLarge:
      return '0 0 60 60'
    case svgsIconName.iconLineSales:
      return '0 0 32 32'
    case svgsIconName.iconLineSalesLarge:
      return '0 0 60 60'
    case svgsIconName.iconLineService:
      return '0 0 32 32'
    case svgsIconName.iconLineServiceLarge:
      return '0 0 60 60'
    case svgsIconName.iconLineParts:
      return '0 0 32 32'
    case svgsIconName.iconLinePartsLarge:
      return '0 0 60 60'
    case svgsIconName.videoPlayButton:
      return '0 0 21 21'
    case svgsIconName.iconPrinter:
      return '0 0 20 20'
    case svgsIconName.calculator:
      return '0 0 25 25'
    case svgsIconName.iconVisa:
      return '0 0 42 24'
    case svgsIconName.iconMastercard:
      return '0 0 85 16'
    case svgsIconName.iconAmericanExpress:
      return '0 0 50 24'
    case svgsIconName.iconJCB:
      return '0 0 25 24'
    case svgsIconName.iconLaunch:
      return '0 0 24 24'
    default:
      return '0 0 22 22'
  }
}

const getPath = (name: keyof typeof svgsIconName, props: { [key: string]: string }) => {
  switch (name) {
    case svgsIconName.iconMath:
      return (
        <>
          <desc>icon of square with math symbols in it</desc>
          <path
            {...props}
            d="M16.6111,1.5H3.3889A1.8944,1.8944,0,0,0,1.5,3.3889V16.6111A1.8944,1.8944,0,0,0,3.3889,18.5H16.6111A1.8944,1.8944,0,0,0,18.5,16.6111V3.3889A1.8944,1.8944,0,0,0,16.6111,1.5ZM10.9728,5.3344l1.0011-1.0011L13.3056,5.665l1.3316-1.3317,1.0011,1.0011L14.3067,6.6661l1.3316,1.3317L14.6372,8.9989,13.3056,7.6767,11.9739,9.0083,10.9728,8.0072l1.3316-1.3316Zm-6.4034.6234H9.2917V7.3744H4.5694Zm4.9584,7.82H7.6389v1.8889H6.2222V13.7778H4.3333V12.3611H6.2222V10.4722H7.6389v1.8889H9.5278Zm6.1389,1.1805H10.9444V13.5417h4.7223Zm0-2.3611H10.9444V11.1806h4.7223Z"
          />
        </>
      )
    case svgsIconName.iconBrochureTick:
      return (
        <>
          <desc>icon of Brochure with a tick in lower right corner</desc>
          <path
            {...props}
            d="M14.725,18.55l-2.475-2.7,1.044-1.062,1.431,1.431,3.231-3.231L19,14.257,14.725,18.55M16.75,1.45a.45.45,0,0,1,.45.45v8.856a5.4384,5.4384,0,0,0-1.8-.306V3.88L12.7,4.924V11.17a5.4017,5.4017,0,0,0-1.8,1.692V4.933L7.3,3.673V14.167l2.745.963L10,15.85a5.4062,5.4062,0,0,0,.135,1.215L6.4,15.76,1.594,17.623l-.144.027A.45.45,0,0,1,1,17.2V3.592a.4536.4536,0,0,1,.324-.432L6.4,1.45l5.4,1.89,4.806-1.863.144-.027M2.8,4.564V15.229l2.7-1.044V3.655Z"
          />
        </>
      )
    case svgsIconName.iconCarFront:
      return (
        <>
          <desc>Icon of the front of one cars</desc>
          <path
            {...props}
            d="M3.4035,8.1184h13.193L15.18,3.8684H4.82Zm10.78,4.2945a1.4205,1.4205,0,0,0,1.0182.3984,1.3618,1.3618,0,0,0,1.3947-1.3946,1.4206,1.4206,0,0,0-.3985-1.0182,1.3283,1.3283,0,0,0-.9962-.4205,1.4357,1.4357,0,0,0-1.4387,1.4387,1.3285,1.3285,0,0,0,.4205.9962Zm-10.3816,0a1.3518,1.3518,0,0,0,.9962.3984,1.4205,1.4205,0,0,0,1.0182-.3984,1.3285,1.3285,0,0,0,.4205-.9962A1.4357,1.4357,0,0,0,4.7982,9.978a1.3283,1.3283,0,0,0-.9962.4205,1.4206,1.4206,0,0,0-.3985,1.0182,1.352,1.352,0,0,0,.3985.9962ZM18.5,16.6184a.9884.9884,0,0,1-.93.93h-.9737a.9882.9882,0,0,1-.93-.93v-.9737H4.3333v.9737a.9029.9029,0,0,1-.2878.642.9029.9029,0,0,1-.642.2878H2.43a.9025.9025,0,0,1-.6419-.2878.9026.9026,0,0,1-.2879-.642v-7.57L3.448,3.3816a1.3456,1.3456,0,0,1,1.3722-.93H15.18a1.3456,1.3456,0,0,1,1.3722.93L18.5,9.0482Z"
          />
        </>
      )
    case svgsIconName.iconTwoCarFronts:
      return (
        <>
          <desc>Icon of the front of two cars</desc>
          <path
            {...props}
            d="M17.583,2.329a.9478.9478,0,0,0-.9977-.7082H9.05a.9477.9477,0,0,0-.9978.7082L6.6357,6.45v.917H3.4146a.9478.9478,0,0,0-.9976.7082L1,12.197v5.4741a.6874.6874,0,0,0,.6764.7081h.708a.6873.6873,0,0,0,.6762-.7081v-.6763h8.243v.6763a.6874.6874,0,0,0,.6762.7081h.7082a.6874.6874,0,0,0,.6763-.7081V12.197l-.3262-.949h3.9012v.6766a.6874.6874,0,0,0,.6763.708h.7081A.6874.6874,0,0,0,19,11.9246V6.45ZM4.1393,14.6443a1.05,1.05,0,0,1-1.4488,0,1.049,1.049,0,0,1,0-1.4812,1.05,1.05,0,0,1,1.4488,0,1.0495,1.0495,0,0,1,0,1.4812Zm7.5344,0a1.05,1.05,0,0,1-1.4488,0,1.05,1.05,0,0,1,0-1.4812,1.05,1.05,0,0,1,1.4488,0,1.049,1.049,0,0,1,0,1.4812ZM2.3844,11.489l1.03-3.0911H10.95l1.03,3.0911Zm14.925-2.5913a1.05,1.05,0,0,1-1.4487,0,1.0495,1.0495,0,0,1,0-1.4812,1.05,1.05,0,0,1,1.4487,0,1.0487,1.0487,0,0,1,0,1.4812ZM8.02,5.7423,9.05,2.6512h7.5349l1.03,3.0911Z"
          />
        </>
      )
    case svgsIconName.iconTwoCarFronts2:
      return (
        <>
          <desc>Icon of the front of two cars closer together</desc>
          <path
            {...props}
            d="M7,9.5714,8.2857,5.7143H16l1.2857,3.8571M16,13.8571a1.2857,1.2857,0,0,1-1.2857-1.2857h0A1.2857,1.2857,0,1,1,16,13.8571h0m-7.7143,0A1.2857,1.2857,0,0,1,7,12.5714H7a1.2857,1.2857,0,1,1,1.2857,1.2857h0m8.9314-8.5714A1.286,1.286,0,0,0,16,4.4286H8.2857a1.286,1.286,0,0,0-1.2171.8571L5.2857,10.4286v6.8571a.8572.8572,0,0,0,.8572.8572H7a.8571.8571,0,0,0,.8571-.8572v-.8571h8.5715v.8571a.8571.8571,0,0,0,.8571.8572h.8572A.8572.8572,0,0,0,19,17.2857V10.4286L17.2171,5.2857M12.9314,2.7143a1.2861,1.2861,0,0,0-1.2171-.8572H4a1.2861,1.2861,0,0,0-1.2171.8572L1,7.8571v6.8572a.8571.8571,0,0,0,.8571.8571h.8572a.8571.8571,0,0,0,.8571-.8571V11.2086A1.2862,1.2862,0,0,1,4,8.7143h.06L4.66,7H2.7143L4,3.1429h9.0771Z"
          />
        </>
      )
    case svgsIconName.iconCarParts:
      return (
        <>
          <desc>Icon of an exploded view of body and chassis</desc>
          <path
            {...props}
            d="M15.8184,13.8a2.362,2.362,0,0,0-2.2107,1.5339,2.8111,2.8111,0,0,0-.1528.83A2.3636,2.3636,0,1,0,15.8184,13.8Zm0,3.3091a.9454.9454,0,1,1,.9456-.9454A.9454.9454,0,0,1,15.8184,17.1092ZM4.2184,13.8A2.3637,2.3637,0,1,0,6.43,16.9932a2.8031,2.8031,0,0,0,.1526-.8294A2.3636,2.3636,0,0,0,4.2184,13.8Zm0,3.3091a.9454.9454,0,1,1,.9454-.9454A.9454.9454,0,0,1,4.2184,17.1092ZM1.8928,5.2986V3.81A1.4461,1.4461,0,0,1,3.3372,2.3654H9.9555a1.5219,1.5219,0,0,1,1.1654.5908l1.89,2.3348H14.16L11.8167,2.3966a2.4194,2.4194,0,0,0-1.8612-.924H3.3374A2.34,2.34,0,0,0,1,3.81V7.5919h.0368V6.2367A.8848.8848,0,0,1,1.8928,5.2986ZM17.6766,6.7093,14.2729,5.291H1.9822c-.0312,0-.0594.0054-.0894.0076a.8845.8845,0,0,0-.8562.9379v3.8344a.8934.8934,0,0,0,.9456.9454h.4726a2.3637,2.3637,0,0,1,4.7273,0h5.6726a2.3636,2.3636,0,1,1,4.7271,0h.4728A.8933.8933,0,0,0,19,10.0709V8.5057A2.0311,2.0311,0,0,0,17.6766,6.7093Zm-4.6327,8.5091H11.0733a1.4132,1.4132,0,0,0-2.11,0h-1.97a2.1166,2.1166,0,0,1,.189.9454,2.8019,2.8019,0,0,1-.1526.8294c-.0122.0386-.024.0786-.0364.116h1.97a1.4132,1.4132,0,0,0,2.11,0h1.9706a2.1166,2.1166,0,0,1-.189-.9454,2.8047,2.8047,0,0,1,.1528-.83C13.02,15.2952,13.0315,15.2556,13.0439,15.2184Z"
          />
        </>
      )
    case svgsIconName.iconSteeringWheel:
      return (
        <>
          <desc>Icon of a steering wheel</desc>
          <path
            {...props}
            d="M10.85,16.732a6.7618,6.7618,0,0,0,5.882-5.882h-2.55a4.33,4.33,0,0,1-3.332,3.332v2.55M8.3,6.6h3.4l2.55,2.55h2.482A6.7523,6.7523,0,0,0,14.48,4.9,6.5373,6.5373,0,0,0,10,3.2,6.5373,6.5373,0,0,0,5.5205,4.9,6.7523,6.7523,0,0,0,3.268,9.15H5.75L8.3,6.6m.85,10.132v-2.55A4.33,4.33,0,0,1,5.818,10.85H3.268a6.5241,6.5241,0,0,0,1.93,3.91A6.7655,6.7655,0,0,0,9.15,16.732M10,1.5a8.1872,8.1872,0,0,1,5.9925,2.5075A8.1872,8.1872,0,0,1,18.5,10a8.1872,8.1872,0,0,1-2.5075,5.9925A8.1872,8.1872,0,0,1,10,18.5a8.1872,8.1872,0,0,1-5.9925-2.5075A8.1872,8.1872,0,0,1,1.5,10,8.1872,8.1872,0,0,1,4.0075,4.0075,8.1872,8.1872,0,0,1,10,1.5Z"
          />
        </>
      )
    case svgsIconName.iconDollarShield:
      return (
        <>
          <desc>Icon of a filled shield and reversed dollar inside the shield</desc>
          <path
            {...props}
            d="M10.8229,14.3371v1.2343H9.4171V14.3371a3.6808,3.6808,0,0,1-2.46-1.6457l1.1143-.9343a2.664,2.664,0,0,0,1.9972,1.2343c.7628,0,1.4657-.2914,1.4657-.9343,0-.7028-.5314-.9342-1.5257-1.2942-1.2343-.4715-2.64-1.1143-2.64-2.64A2.4293,2.4293,0,0,1,9.4771,5.8343V4.4286h1.4058V5.7229A3.6769,3.6769,0,0,1,12.88,6.9571l-.9943.9943a2.4565,2.4565,0,0,0-1.7571-.9343A1.163,1.163,0,0,0,8.8343,8.0714c0,.7629.6428.9343,1.8171,1.4057,1.2943.4715,2.4086,1.0543,2.4086,2.58A2.467,2.467,0,0,1,10.8229,14.3371ZM17.3543,4.2914,10,1,2.6457,4.2914V9.1943a10.1429,10.1429,0,0,0,2.1086,6.2228A9.1338,9.1338,0,0,0,10,19a9.1068,9.1068,0,0,0,5.2457-3.5829,10.1429,10.1429,0,0,0,2.1086-6.2228Z"
          />
        </>
      )
    case svgsIconName.iconEmail:
      return (
        <>
          <desc>Icon of a filled envelope</desc>
          <path
            {...props}
            d="M16.8,6.6l-6.8,4.25L3.2,6.6v-1.7l6.8,4.25,6.8-4.25m0-1.7H3.2c-.94,0-1.7,.76-1.7,1.7V15.1c0,.94,.76,1.7,1.7,1.7h13.6c.94,0,1.7-.76,1.7-1.7V4.9c0-.94-.76-1.7-1.7-1.7Z"
          />
        </>
      )
    case svgsIconName.iconEmailOutline:
      return (
        <>
          <desc>Icon of a outline of an envelope</desc>
          <path
            {...props}
            d="M18.5,4.9c0-.94-.76-1.7-1.7-1.7H3.2c-.94,0-1.7,.76-1.7,1.7V15.1c0,.94,.76,1.7,1.7,1.7h13.6c.94,0,1.7-.76,1.7-1.7V4.9m-1.7,0l-6.8,4.25L3.2,4.9h13.6m0,10.2H3.2V6.6l6.8,4.25,6.8-4.25V15.1Z"
          />
        </>
      )
    case svgsIconName.iconCarSpanner:
      return (
        <>
          <desc>Icon of the front view of a car and a spanner in the lower right</desc>
          <path
            {...props}
            d="M17.1637,12.6538c.009-.135.036-.27.036-.405v.45l-.036-.045M8.2,12.2488a4.4465,4.4465,0,0,0,.378,1.8H3.7v.9a.9026.9026,0,0,1-.9.9H1.9a.9026.9026,0,0,1-.9-.9v-7.2l1.872-5.4a1.3488,1.3488,0,0,1,1.2779-.9h9.9a1.3488,1.3488,0,0,1,1.2779.9l1.872,5.4v4.5a4.5,4.5,0,0,0-9,0m-2.7-2.25a1.35,1.35,0,1,0-1.35,1.35,1.3482,1.3482,0,0,0,1.35-1.35m9.9-3.15-1.35-4.05H4.15L2.8,6.8489H15.4M18.8827,16.92l-3.699-3.6989a2.5882,2.5882,0,0,0-.612-2.7989,2.6671,2.6671,0,0,0-3.0059-.531l1.746,1.7459-1.215,1.224-1.791-1.7549a2.6686,2.6686,0,0,0,.531,3.0149,2.62,2.62,0,0,0,2.808.612l3.6989,3.69a.3775.3775,0,0,0,.567,0l.936-.927A.3767.3767,0,0,0,18.8827,16.92Z"
          />
        </>
      )
    case svgsIconName.iconCashMoney:
      return (
        <>
          <desc>Icon of two cash bills overlapping</desc>
          <path
            {...props}
            d="M4.2727,3.4545H19v9.8182H4.2727V3.4545m7.3637,2.4546A2.4546,2.4546,0,1,1,9.1818,8.3636a2.4545,2.4545,0,0,1,2.4546-2.4545M7.5455,5.0909A1.6365,1.6365,0,0,1,5.9091,6.7273V10a1.6364,1.6364,0,0,1,1.6364,1.6364h8.1818A1.6363,1.6363,0,0,1,17.3636,10V6.7273a1.6364,1.6364,0,0,1-1.6363-1.6364H7.5455M1,6.7273H2.6364v8.1818H15.7273v1.6364H1Z"
          />
        </>
      )
    case svgsIconName.iconSearchCar:
      return (
        <>
          <desc>Icon of the front of a car with a magnifier lower right</desc>
          <path
            {...props}
            d="M8.6844,12.9707a4.7466,4.7466,0,0,0,.4034,1.9211H3.8816v.96a.9634.9634,0,0,1-.9605.9606H1.9605A.9634.9634,0,0,1,1,15.8523V8.1679L2.9979,2.4046a1.44,1.44,0,0,1,1.364-.96H14.928a1.44,1.44,0,0,1,1.3639.96L18.29,8.1679v4.8028a4.8028,4.8028,0,1,0-9.6055,0M5.8027,10.5693A1.4408,1.4408,0,1,0,4.3619,12.01a1.4388,1.4388,0,0,0,1.4408-1.4408M16.3688,7.2074,14.928,2.8849H4.3619L2.9211,7.2074H16.3688m-2.822,2.3337a3.5649,3.5649,0,0,1,3.0155,5.4611L19,17.4558l-1.1,1.1-2.4694-2.43a3.5619,3.5619,0,1,1-1.8837-6.585m0,1.5829a1.9787,1.9787,0,1,0,1.9787,1.9787,1.9787,1.9787,0,0,0-1.9787-1.9787"
          />
        </>
      )
    case svgsIconName.iconTick:
      return (
        <>
          <desc>Icon of Tick Symbol 2px thick</desc>
          <path {...props} d="M6.72,13.2477,2.4531,8.9805,1,10.4233l5.72,5.72L19,3.8639,17.5571,2.4211Z" />
        </>
      )
    case svgsIconName.iconPlus:
      return (
        <>
          <desc>Icon of Plus Symbol 2px thick</desc>
          <polygon
            {...props}
            points="19 8.989 11.011 8.989 11.011 1 8.989 1 8.989 8.989 1 8.989 1 11.011 8.989 11.011 8.989 19 11.011 19 11.011 11.011 19 11.011 19 8.989"
          />
        </>
      )
    case svgsIconName.iconInfo:
      return (
        <>
          <desc>icon of a ring with an i in the middle</desc>
          <path
            {...props}
            d="M3.6135,3.662A8.6509,8.6509,0,0,1,9.9791,1a8.584,8.584,0,0,1,6.3653,2.662A8.5306,8.5306,0,0,1,19,10a8.6908,8.6908,0,0,1-2.6556,6.38A8.7074,8.7074,0,0,1,9.9791,19a8.7761,8.7761,0,0,1-6.3656-2.62A8.8179,8.8179,0,0,1,1,10,8.6538,8.6538,0,0,1,3.6135,3.662ZM4.92,15.1127a6.9,6.9,0,0,0,5.0587,2.1125,6.9945,6.9945,0,0,0,5.1-2.1125A7.0265,7.0265,0,0,0,17.1874,10,7.0265,7.0265,0,0,0,15.08,4.8873a6.9945,6.9945,0,0,0-5.1-2.1125A6.9,6.9,0,0,0,4.92,4.8873,7.0273,7.0273,0,0,0,2.8126,10,7.0273,7.0273,0,0,0,4.92,15.1127Zm6.1265-8.2366H8.9531V4.7773h2.0938Zm0,8.3466H8.9531V8.9749h2.0938Z"
          />
        </>
      )
    case svgsIconName.iconShieldTick:
      return (
        <>
          <desc>Icon of a shield with a tick mark in the middle</desc>
          <path
            {...props}
            d="M17.15,9.2c0,2.2-.7,4.2-2.05,6.05-1.35,1.8-3.05,3-5.1,3.5-2.05-.5-3.75-1.65-5.1-3.5-1.35-1.8-2.05-3.85-2.05-6.05V4.45L10,1.25l7.15,3.2v4.75Zm-8.75,4.8l6.35-6.35-1.1-1.15-5.25,5.2-2.05-2.05-1.1,1.1,3.15,3.25Z"
          />
        </>
      )
    case svgsIconName.iconTestDrive:
      return (
        <>
          <desc>icon of Steering Wheel</desc>
          <path
            {...props}
            d="M25.61,4.39C22.68,1.47,19.16,0,15,0C10.84,0,7.32,1.47,4.39,4.39C1.47,7.32,0,10.84,0,15c0,4.16,1.47,7.68,4.39,10.61C7.32,28.54,10.84,30,15,30c4.16,0,7.68-1.46,10.61-4.39S30,19.16,30,15C30,10.84,28.54,7.32,25.61,4.39L25.61,4.39z M26.84,15c0,1.99-0.47,3.87-1.35,5.57l-5.98-3.87c0.18-0.53,0.29-1.11,0.29-1.7c0-2.29-1.58-4.16-3.75-4.69V3.16c3.05,0.29,5.62,1.52,7.68,3.81C25.78,9.26,26.84,11.89,26.84,15L26.84,15z M13.95,3.16v7.15c-2.17,0.53-3.75,2.4-3.75,4.69c0,0.59,0.12,1.17,0.29,1.7l-5.98,3.87c-0.94-1.7-1.41-3.57-1.41-5.57c0-3.11,1.05-5.74,3.11-8.03C8.32,4.69,10.9,3.46,13.95,3.16L13.95,3.16z M5.68,22.38l5.98-3.93c1.87,1.82,4.8,1.82,6.68,0l5.98,3.93C20.04,28.3,9.84,28.3,5.68,22.38z"
          />
        </>
      )
    case svgsIconName.iconStock:
      return (
        <>
          <desc>icon of Magnifying Glass</desc>
          <path
            {...props}
            d="M30,27.7c0,0.63-0.23,1.2-0.67,1.63c-0.5,0.43-1,0.67-1.63,0.67c-0.67,0-1.2-0.23-1.63-0.67l-6.17-6.17c-2.17,1.47-4.57,2.23-7.2,2.23c-1.73,0-3.37-0.33-4.93-1c-1.57-0.67-2.9-1.6-4.07-2.7c-1.1-1.17-2.03-2.5-2.7-4.07c-0.67-1.57-1-3.2-1-4.93C0,11,0.33,9.37,1,7.77C1.67,6.2,2.6,4.83,3.7,3.73C4.87,2.57,6.2,1.67,7.77,1c1.57-0.67,3.2-1,4.93-1s3.37,0.33,4.93,1s2.9,1.57,4.07,2.73c1.1,1.1,2.03,2.47,2.7,4.03c0.67,1.6,1,3.23,1,4.93c0,2.67-0.77,5.07-2.23,7.2l6.17,6.2C29.77,26.53,30,27.07,30,27.7L30,27.7z M18.4,18.4c1.6-1.57,2.37-3.47,2.37-5.7S20,8.6,18.4,7c-1.57-1.6-3.47-2.37-5.7-2.37S8.57,5.4,7,7c-1.6,1.6-2.37,3.47-2.37,5.7S5.4,16.83,7,18.4c1.57,1.6,3.47,2.4,5.7,2.4S16.83,20,18.4,18.4z"
          />
        </>
      )
    case svgsIconName.iconSpecials:
      return (
        <>
          <desc>icon of Discount Tag</desc>
          <path
            {...props}
            d="M8.12,8.14c0.5-0.5,0.75-1.11,0.75-1.8S8.61,5.05,8.12,4.55C7.62,4.06,7.03,3.8,6.34,3.8s-1.31,0.26-1.8,0.75S3.8,5.64,3.8,6.34s0.24,1.31,0.73,1.8s1.11,0.73,1.8,0.73S7.62,8.63,8.12,8.14L8.12,8.14z M30,17.74c0,0.69-0.24,1.29-0.73,1.78l-9.72,9.74c-0.51,0.5-1.11,0.73-1.8,0.73s-1.29-0.24-1.78-0.73L1.8,15.09c-0.5-0.5-0.93-1.15-1.29-2C0.18,12.24,0,11.47,0,10.77V2.53c0-0.69,0.26-1.29,0.75-1.78C1.25,0.26,1.84,0,2.53,0h8.24c0.69,0,1.47,0.18,2.32,0.53c0.85,0.34,1.52,0.77,2.02,1.27l14.16,14.14C29.76,16.46,30,17.05,30,17.74z"
          />
        </>
      )
    case svgsIconName.specialsSmall:
      return (
        <>
          <desc>icon of small specials tag</desc>
          <path
            {...props}
            d="M16.38,29.84L0.59,14.98L0.39,0.39l14.59,0.15l0.17,0.19l14.68,15.65L16.38,29.84z M1.78,14.45l14.57,13.71l11.81-11.81L14.45,1.74L1.61,1.61L1.78,14.45z M7.78,10.93c-0.8,0-1.61-0.3-2.25-0.91C4.3,8.78,4.29,6.81,5.52,5.54C6.75,4.3,8.71,4.3,9.99,5.51c0.61,0.58,0.95,1.36,0.96,2.2C10.97,8.56,10.63,9.38,10,10C9.39,10.62,8.59,10.93,7.78,10.93z M7.75,5.81c-0.5,0-0.99,0.19-1.37,0.57c-0.76,0.79-0.76,2.02,0,2.78c0.79,0.76,2.02,0.76,2.78,0h0c0.39-0.39,0.61-0.9,0.6-1.43C9.75,7.22,9.54,6.74,9.16,6.38C8.76,6,8.25,5.81,7.75,5.81z"
          />
        </>
      )
    case svgsIconName.specialsXLarge:
      return (
        <>
          <desc>Icon of extra-large specials tag</desc>
          <path
            {...props}
            d="M38.19,68.54l-36-33.87l0-0.32L1.74,1.74l32.93,0.34l0.22,0.23l33.65,35.88L38.19,68.54z M3.68,34.02l34.47,32.44l28.3-28.3L34.02,3.58L3.26,3.26L3.68,34.02z M18.24,24.9c-1.7,0-3.42-0.65-4.77-1.94c-2.61-2.61-2.62-6.77-0.03-9.49c2.61-2.61,6.77-2.61,9.49-0.03c1.29,1.24,2.02,2.88,2.04,4.64c0.02,1.81-0.7,3.53-2.02,4.86C21.65,24.25,19.95,24.9,18.24,24.9z M18.16,13.01c-1.32,0-2.63,0.5-3.64,1.51c-2.01,2.11-2.02,5.35,0,7.37c2.11,2.01,5.35,2.02,7.37,0c1.04-1.04,1.6-2.38,1.58-3.78c-0.02-1.35-0.57-2.62-1.57-3.57C20.84,13.52,19.49,13.01,18.16,13.01z"
          />
        </>
      )
    case svgsIconName.iconService:
      return (
        <>
          <desc>icon of Spanner</desc>
          <path
            {...props}
            d="M7.36,6.09c0.58-0.62,0.33-1.3-0.24-1.84s-3.17-3-3.17-3s4.73-2.16,8.09,1.01s1.65,7.55,1.65,7.55S27.23,22.8,28.55,23.87c1.32,1.07,1.67,2.03,1.32,2.77l-2.51,2.66c-0.73,0.39-1.7,0.09-2.84-1.16C23.37,26.88,9.64,14.11,9.64,14.11S5.36,16.08,2,12.9S0.53,4.88,0.53,4.88s2.6,2.46,3.17,3s1.27,0.75,1.85,0.13L7.36,6.09z M25.08,24.83c-0.56,0.59-0.53,1.52,0.06,2.08c0.59,0.56,1.52,0.53,2.08-0.06s0.53-1.52-0.06-2.08C26.57,24.22,25.63,24.24,25.08,24.83z"
          />
        </>
      )
    case svgsIconName.iconQuote:
      return (
        <>
          <desc>icon of Dollar Symbol</desc>
          <path
            {...props}
            d="M21.51,23.8c-1.11,1.2-2.74,2.08-4.86,2.45V30h-3.6v-3.49c-2.46-0.11-4.85-0.77-6.25-1.58l1.1-4.3c1.54,0.85,3.71,1.62,6.1,1.62c2.1,0,3.53-0.81,3.53-2.28c0-1.4-1.18-2.28-3.9-3.2c-3.93-1.32-6.62-3.16-6.62-6.73c0-3.24,2.28-5.77,6.21-6.54V0h3.6v3.24c2.46,0.11,4.12,0.62,5.33,1.21L21.1,8.6c-0.96-0.4-2.65-1.25-5.29-1.25c-2.39,0-3.16,1.03-3.16,2.06c0,1.21,1.29,1.99,4.41,3.16c4.38,1.54,6.14,3.57,6.14,6.88C23.2,21.08,22.62,22.6,21.51,23.8"
          />
        </>
      )
    case svgsIconName.brochure:
      return (
        <>
          <desc>icon of Brochure</desc>
          <path
            {...props}
            d="M20,26.64V6.88L10,3.36v19.77L20,26.64z M30,0.86v25.16c0,0.41-0.21,0.68-0.62,0.78L20,30l-10-3.52l-8.91,3.44L0.86,30C0.29,30,0,29.71,0,29.14V3.98C0,3.57,0.21,3.3,0.62,3.2L10,0l10,3.52l8.91-3.44L29.14,0C29.71,0,30,0.29,30,0.86z"
          />
        </>
      )
    case svgsIconName.textMessage:
      return (
        <>
          <desc>icon of chat bubble with three horizontal lines</desc>
          <path
            {...props}
            d="M27,0c1.7,0,3,1.3,3,3v18c0,1.7-1.3,3-3,3H6l-6,6V3c0-1.6,1.3-3,3-3H27z M6,10.5v3h18v-3H6z M18,18v-3H6v3H18z M24,9V6H6v3H24z"
          />
        </>
      )
    case svgsIconName.facebook:
      return (
        <>
          <desc>icon of Facebook logo</desc>
          <path
            {...props}
            d="M11.3,11H9.9V8.9h1.4c0,0,0-2.1,0-2.5c0-0.4,0.3-3.1,3.8-3.1c0.5,0,1.8,0,2.5,0c0,0.7,0,2.8,0,2.8c-0.7,0-1.5,0-1.9,0c-0.4,0-0.9,0.4-0.9,0.7c0,0.3,0,2.2,0,2.2s2.5,0,2.8,0c-0.1,1.4-0.3,2.1-0.3,2.1h-2.5v8.5h-3.5V11z"
          />
        </>
      )
    case svgsIconName.instagram:
      return (
        <>
          <desc>icon of Instagram logo</desc>
          <path
            {...props}
            d="M5.4,3.5h11.1c1.1,0,1.9,0.9,1.9,1.9v11.1c0,1.1-0.9,1.9-1.9,1.9H5.4c-1.1,0-1.9-0.9-1.9-1.9V5.4C3.5,4.4,4.4,3.5,5.4,3.5L5.4,3.5z M14.4,5.2c-0.4,0-0.7,0.3-0.7,0.7v1.6c0,0.4,0.3,0.7,0.7,0.7h1.7c0.4,0,0.7-0.3,0.7-0.7V5.8c0-0.4-0.3-0.7-0.7-0.7H14.4L14.4,5.2z M16.8,9.8h-1.3c0.1,0.4,0.2,0.8,0.2,1.3c0,2.5-2.1,4.5-4.7,4.5c-2.6,0-4.7-2-4.7-4.5c0-0.4,0.1-0.9,0.2-1.3H5.2v6.3c0,0.3,0.3,0.6,0.6,0.6h10.4c0.3,0,0.6-0.3,0.6-0.6V9.8L16.8,9.8z M11,8C9.4,8,8,9.4,8,11c0,1.6,1.3,2.9,3,2.9c1.7,0,3-1.3,3-2.9C14,9.4,12.7,8,11,8z"
          />
        </>
      )
    case svgsIconName.linkedin:
      return (
        <>
          <desc>icon of LinkedIn logo</desc>
          <path
            {...props}
            d="M6.9,18.5H3.7v-10h3.1V18.5z M5.3,7.1c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8C7.1,6.3,6.3,7.1,5.3,7.1z M18.5,18.5h-3.1v-4.9c0-1.2,0-2.7-1.6-2.7c-1.6,0-1.9,1.3-1.9,2.6v4.9H8.8v-10h3v1.4h0c0.4-0.8,1.4-1.6,2.9-1.6c3.1,0,3.7,2.1,3.7,4.8V18.5z"
          />
        </>
      )
    case svgsIconName.pinterest:
      return (
        <>
          <desc>icon of Pinterest logo</desc>
          <path
            {...props}
            d="M11.2,2.7c-4.3,0-6.6,2.9-6.6,6.1c0,1.5,0.8,3.3,2,3.9c0.2,0.1,0.3,0,0.3-0.1c0-0.1,0.2-0.8,0.3-1.1c0-0.1,0-0.2-0.1-0.3c-0.4-0.5-0.7-1.4-0.7-2.3c0-2.2,1.7-4.4,4.5-4.4c2.5,0,4.2,1.7,4.2,4.1c0,2.7-1.4,4.6-3.2,4.6c-1,0-1.7-0.8-1.5-1.8c0.3-1.2,0.8-2.5,0.8-3.3c0-0.8-0.4-1.4-1.3-1.4c-1,0-1.8,1-1.8,2.4c0,0.9,0.3,1.5,0.3,1.5s-1,4.2-1.2,5c-0.3,1.3,0,3.5,0.1,3.7c0,0.1,0.1,0.1,0.2,0.1c0.1-0.1,1.3-1.9,1.6-3.2c0.1-0.5,0.6-2.4,0.6-2.4c0.3,0.6,1.3,1.2,2.3,1.2c3,0,5.2-2.8,5.2-6.3C17.4,5.2,14.7,2.7,11.2,2.7z"
          />
        </>
      )
    case svgsIconName.twitter:
      return (
        <>
          <desc>icon of Twitter logo</desc>
          <path
            {...props}
            d="M18.4,6.4c-0.5,0.2-1.1,0.4-1.8,0.5c0.6-0.4,1.1-1,1.3-1.7c-0.6,0.3-1.2,0.6-1.9,0.7c-0.6-0.6-1.4-1-2.2-1c-1.7,0-3.1,1.4-3.1,3.1c0,0.2,0,0.5,0.1,0.7C8.4,8.6,6.1,7.4,4.6,5.5C4.3,6,4.2,6.5,4.2,7c0,1.1,0.5,2,1.4,2.5c-0.5,0-1-0.2-1.4-0.4c0,0,0,0,0,0c0,1.5,1.1,2.7,2.4,3c-0.3,0.1-0.5,0.1-0.8,0.1c-0.2,0-0.4,0-0.6-0.1c0.4,1.2,1.5,2.1,2.9,2.1c-1,0.8-2.4,1.3-3.8,1.3c-0.2,0-0.5,0-0.7,0c1.4,0.9,3,1.4,4.7,1.4c5.6,0,8.7-4.7,8.7-8.7c0-0.1,0-0.3,0-0.4C17.5,7.5,18,7,18.4,6.4z"
          />
        </>
      )
    case svgsIconName.whatsapp:
      return (
        <>
          <desc>icon of WhatsApp logo</desc>
          <path
            {...props}
            d="M16.63,5.34A7.84,7.84,0,0,0,11,3,7.93,7.93,0,0,0,4.17,14.88L3.05,19l4.2-1.1a7.89,7.89,0,0,0,3.78,1h0a7.91,7.91,0,0,0,5.6-13.51ZM11,17.51h0a6.57,6.57,0,0,1-3.35-.92l-.24-.14L5,17.1l.66-2.43-.16-.24A6.58,6.58,0,0,1,11,4.35a6.59,6.59,0,0,1,6.58,6.59A6.57,6.57,0,0,1,11,17.51Zm3.61-4.92c-.2-.1-1.17-.58-1.35-.65s-.31-.09-.44.1-.52.65-.63.77-.23.15-.43,0a5.17,5.17,0,0,1-1.59-1A6.1,6.1,0,0,1,9.1,10.5a.28.28,0,0,1,.09-.4c.08-.09.2-.23.29-.35a1.22,1.22,0,0,0,.2-.32.39.39,0,0,0,0-.35C9.62,9,9.22,8,9.06,7.61s-.33-.33-.45-.34H8.23a.71.71,0,0,0-.53.25A2.28,2.28,0,0,0,7,9.17a3.9,3.9,0,0,0,.81,2.05,8.84,8.84,0,0,0,3.38,3,9.58,9.58,0,0,0,1.13.42,2.71,2.71,0,0,0,1.24.08,2,2,0,0,0,1.34-.94,1.7,1.7,0,0,0,.11-.95C15,12.73,14.84,12.69,14.64,12.59Z"
          />
        </>
      )
    case svgsIconName.youtube:
      return (
        <>
          <desc>icon of YouTube logo</desc>
          <path
            {...props}
            d="M18.7,7.8c0,0-0.2-1.1-0.6-1.6c-0.6-0.6-1.3-0.6-1.6-0.7C14.3,5.4,11,5.4,11,5.4h0c0,0-3.3,0-5.5,0.2c-0.3,0-1,0-1.6,0.7C3.4,6.8,3.3,7.8,3.3,7.8s-0.2,1.3-0.2,2.6v1.2c0,1.3,0.2,2.6,0.2,2.6s0.2,1.1,0.6,1.6c0.6,0.6,1.4,0.6,1.7,0.7c1.3,0.1,5.4,0.2,5.4,0.2s3.3,0,5.5-0.2c0.3,0,1,0,1.6-0.7c0.5-0.5,0.6-1.6,0.6-1.6s0.2-1.3,0.2-2.6v-1.2C18.9,9.1,18.7,7.8,18.7,7.8z M9.4,13.1l0-4.4l4.3,2.2L9.4,13.1z"
          />
        </>
      )
    case svgsIconName.link:
      return (
        <>
          <desc>icon of a stylised chain link to represent a web link</desc>
          <path
            {...props}
            d="M15.5,6.5H11.9V8.3h3.6a2.7,2.7,0,0,1,0,5.4H11.9v1.8h3.6a4.5,4.5,0,0,0,0-9Zm-5.4,7.2H6.5a2.7,2.7,0,0,1,0-5.4h3.6V6.5H6.5a4.5,4.5,0,0,0,0,9h3.6ZM7.4,10.1h7.2v1.8H7.4Z"
          />
        </>
      )
    case svgsIconName.socialShare:
      return (
        <>
          <desc>icon of the Social Share logo - three dots connected with two straight lines</desc>
          <path
            {...props}
            d="M14.9,13.7c-0.5,0-1,0.1-1.3,0.4l-3.8-2.7c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.4l3.8-2.7c0.4,0.2,0.9,0.4,1.3,0.4c1.5,0,2.6-1.2,2.6-2.6c0-1.4-1.2-2.6-2.6-2.6s-2.6,1.2-2.6,2.6c0,0.2,0,0.4,0.1,0.7L8.7,9c-0.4-0.3-1-0.5-1.6-0.5c-1.5,0-2.6,1.2-2.6,2.6c0,1.4,1.2,2.6,2.6,2.6c0.6,0,1.2-0.2,1.6-0.5l3.6,2.6c-0.1,0.2-0.1,0.4-0.1,0.7c0,1.4,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6C17.5,14.8,16.3,13.7,14.9,13.7z"
          />
        </>
      )
    case svgsIconName.arrowLeftMedium:
      return (
        <>
          <desc>icon of a medium thickness arrow pointing left</desc>
          <polygon {...props} points="46,20 11.45,20 27.16,4.24 22.93,0 0,23 22.93,46 27.16,41.76 11.45,26 46,26" />
        </>
      )
    case svgsIconName.chevronUp:
      return (
        <>
          <desc>icon of a thin (2px) chevron pointing up</desc>
          <polygon
            {...props}
            points="15.001 8.826 25.934 19.76 24.52 21.174 15.001 11.654 5.48 21.174 4.066 19.76 15.001 8.826"
          />
        </>
      )
    case svgsIconName.chevronRight:
      return (
        <>
          <desc>icon of a thin (2px) chevron pointing right</desc>
          <polygon {...props} points="21.174 15 10.24 25.934 8.826 24.52 18.346 15 8.826 5.48 10.24 4.066 21.174 15" />
        </>
      )
    case svgsIconName.chevronDown:
      return (
        <>
          <desc>icon of a thin (2px) chevron pointing down</desc>
          <polygon
            {...props}
            points="15 21.527 4.066 10.593 5.48 9.179 15 18.699 24.52 9.179 25.934 10.593 15 21.527"
          />
        </>
      )
    case svgsIconName.chevronLeft:
      return (
        <>
          <desc>icon of a thin (2px) chevron pointing left</desc>
          <polygon {...props} points="8.826 15 19.76 4.066 21.174 5.48 11.654 15 21.174 24.52 19.76 25.934 8.826 15" />
        </>
      )
    case svgsIconName.iconClose:
      return (
        <>
          <desc>Icon of an x for closing</desc>
          <polygon
            {...props}
            points="24.2,7 22.4,5.3 15,13.2 7.6,5.3 5.8,7 13.3,15 5.8,23 7.6,24.7 15,16.8 22.4,24.7 24.2,23 16.7,15"
          />
        </>
      )
    case svgsIconName.iconCloseLarge:
      return (
        <>
          <desc>Icon of large X for closing</desc>
          <polygon {...props} points="26,1 25,0 13,12 1,0 0,1 12,13 0,25 1,26 13,14 25,26 26,25 14,13 " />
        </>
      )
    case svgsIconName.iconCloseHeavy:
      return (
        <>
          <desc>Icon of thick X for closing</desc>
          <path
            {...props}
            d="M27,5.42,24.58,3,15,12.58,5.42,3,3,5.42,12.58,15,3,24.58,5.42,27,15,17.42,24.58,27,27,24.58,17.42,15Z"
          />
        </>
      )
    case svgsIconName.iconZoom:
      return (
        <>
          <desc>icon of a four corner arrows to indicate zoom</desc>
          <path
            {...props}
            d="M0,0v2v12h4V6.8l9.2,9.2l2.8-2.8L6.8,4H14V0H2L0,0L0,0z M26,0v4h7.2L24,13.2l2.8,2.8L36,6.8V14h4V2V0h-2L26,0L26,0z M13.2,24L4,33.2V26H0v12v2h2h12v-4H6.8l9.2-9.2L13.2,24z M26.8,24L24,26.8l9.2,9.2H26v4h12h2v-2V26h-4v7.2L26.8,24z"
          />
        </>
      )
    case svgsIconName.iconArrowPointLeft:
      return (
        <>
          <desc>icon of an arrow pointing left</desc>
          <path
            {...props}
            d="M26.5,14.5H6.9L19.2,2.2c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-14,14c-0.4,0.4-0.4,1,0,1.4l14,14c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L6.9,16.5h19.6c0.6,0,1-0.4,1-1S27.1,14.5,26.5,14.5z"
          />
        </>
      )
    case svgsIconName.iconClock:
      return (
        <>
          <desc>icon of a clock</desc>
          <path
            {...props}
            d="M15,29.6C6.95,29.6,0.4,23.05,0.4,15S6.95,0.4,15,0.4S29.6,6.95,29.6,15S23.05,29.6,15,29.6z M15,1.6C7.61,1.6,1.6,7.61,1.6,15S7.61,28.4,15,28.4S28.4,22.39,28.4,15S22.39,1.6,15,1.6z M21.84,19.73l-6.73-4.34V7.42h-1.2v8.62l7.28,4.7L21.84,19.73z"
          />
        </>
      )
    case svgsIconName.iconClockXLarge:
      return (
        <>
          <desc>icon of extra-large clock</desc>
          <path
            {...props}
            d="M35,67.25C17.22,67.25,2.75,52.78,2.75,35S17.22,2.75,35,2.75S67.25,17.22,67.25,35S52.78,67.25,35,67.25z M35,4.25C18.04,4.25,4.25,18.04,4.25,35S18.04,65.75,35,65.75S65.75,51.96,65.75,35S51.96,4.25,35,4.25z M50.31,46.34L34.64,36.28V17.91h-1.5V37.1l16.36,10.5L50.31,46.34z"
          />
        </>
      )
    case svgsIconName.iconHome:
      return (
        <>
          <desc>icon of a house</desc>
          <polygon
            {...props}
            points="31,13.6 25.7,10 25.7,4.9 21.7,4.9 21.7,7.4 15.5,3.2 0,13.6 5.3,13.6 5.3,27.8 12.9,27.8 12.9,21.1 18.1,21.1 18.1,27.8 25.7,27.8 25.7,13.6"
          />
        </>
      )
    case svgsIconName.iconLocation:
      return (
        <>
          <desc>icon of location marker</desc>
          <path
            {...props}
            d="M5.4,6.1c0.4,0.3,0.7,0.5,1.2,0.5s0.9-0.2,1.2-0.5c0.4-0.3,0.5-0.8,0.5-1.2S8.2,4,7.9,3.7C7.5,3.3,7.2,3.1,6.7,3.1S5.8,3.3,5.4,3.7C5.1,4,4.9,4.4,4.9,4.9S5.1,5.8,5.4,6.1L5.4,6.1z M11.6,4.9c0,0.7-0.2,1.5-0.5,2.4c-0.3,0.9-0.9,1.9-1.6,3.1c-0.7,1.1-1.5,2.2-2.3,3.1L6.7,14c-0.4-0.3-0.8-1-1.5-1.8c-0.7-1-1.2-1.8-1.7-2.4C3.1,9,2.6,8.1,2.3,7.3S1.8,5.6,1.8,4.9c0-1.3,0.4-2.5,1.4-3.5S5.2,0,6.7,0s2.5,0.4,3.5,1.4S11.6,3.5,11.6,4.9z"
          />
        </>
      )
    case svgsIconName.iconLocationSmall:
      return (
        <>
          <desc>icon of small location marker</desc>
          <path
            {...props}
            d="M15,8.85c0.83,0,1.5,0.67,1.5,1.5c0,0.83-0.67,1.5-1.5,1.5c-0.83,0-1.5-0.67-1.5-1.5C13.5,9.52,14.17,8.85,15,8.85 M15.49,29.14c0.4-0.54,9.67-13.4,9.67-18.79c0-5.6-4.56-10.16-10.16-10.16S4.84,4.75,4.84,10.35c0,5.39,9.28,18.25,9.67,18.79L15,29.81L15.49,29.14z M23.96,10.35c0,4.34-7.03,14.65-8.96,17.4C13.07,25,6.04,14.69,6.04,10.35c0-4.94,4.02-8.96,8.96-8.96S23.96,5.41,23.96,10.35z"
          />
        </>
      )
    case svgsIconName.iconLocationXLarge:
      return (
        <>
          <desc>Icon of xtra-large location marker</desc>
          <path
            {...props}
            d="M35,22.35c1.61,0,2.92,1.31,2.92,2.92s-1.31,2.92-2.92,2.92c-1.61,0-2.92-1.31-2.92-2.92S33.39,22.35,35,22.35 M35.59,65.07c0.84-1.16,20.56-28.47,20.56-39.81C56.15,13.6,46.66,4.11,35,4.11c-11.66,0-21.15,9.49-21.15,21.15c0,11.34,19.72,38.65,20.56,39.81l0.6,0.82L35.59,65.07z M54.68,25.26c0,9.8-16.33,33.37-19.68,38.11c-3.35-4.74-19.68-28.31-19.68-38.11c0-10.85,8.83-19.68,19.68-19.68C45.85,5.58,54.68,14.41,54.68,25.26z"
          />
        </>
      )
    case svgsIconName.iconPhone:
      return (
        <>
          <desc>icon of a phone</desc>
          <path
            {...props}
            d="M13.2,9.7c0.4,0,0.8,0.3,0.8,0.8v2.7c0,0.2-0.1,0.4-0.2,0.5c-0.2,0.2-0.3,0.2-0.5,0.2 c-2.4,0-4.6-0.6-6.7-1.8c-2-1.2-3.6-2.8-4.8-4.8C0.6,5.4,0,3.2,0,0.8c0-0.2,0.1-0.4,0.2-0.5C0.4,0.1,0.6,0,0.8,0h2.7 c0.4,0,0.8,0.4,0.8,0.8c0,1,0.1,1.9,0.4,2.8c0.1,0.3,0,0.6-0.2,0.8L2.8,6.1c1.1,2.3,2.9,4,5.1,5.1l1.7-1.7c0.2-0.2,0.5-0.3,0.8-0.2 C11.3,9.6,12.3,9.7,13.2,9.7z"
          />
        </>
      )
    case svgsIconName.iconPhoneSmall:
      return (
        <>
          <desc>icon of a small phone</desc>
          <path
            {...props}
            d="M26.33,30.2c-0.05,0-0.1,0-0.15,0C12.13,29.14,1.13,17.27,1.13,3.17c0-0.46,0.01-0.92,0.03-1.37c0.03-0.52,0.27-1.01,0.66-1.34c0.4-0.34,0.92-0.49,1.44-0.44l6.76,0.74c0.79,0.09,1.37,0.8,1.3,1.58c-0.05,0.52-0.07,1.05-0.07,1.57c0,1.42,0.18,2.84,0.52,4.21c0.15,0.6-0.09,1.24-0.59,1.58l-3.86,2.62c1.78,4.09,4.68,7.53,8.42,9.99l4.23-2.69c0.42-0.26,0.94-0.3,1.39-0.1c1.94,0.87,4,1.37,6.14,1.48h0c0.4,0.02,0.78,0.21,1.04,0.51c0.26,0.31,0.38,0.71,0.34,1.11l-0.65,5.9C28.1,29.48,27.29,30.2,26.33,30.2z M3.06,1.2c-0.17,0-0.32,0.06-0.45,0.17c-0.15,0.12-0.23,0.3-0.24,0.49C2.34,2.29,2.33,2.73,2.33,3.17c0,13.48,10.52,24.82,23.94,25.83c0.37,0.04,0.71-0.24,0.75-0.62l0.65-5.9c0.01-0.1-0.03-0.17-0.06-0.2c-0.03-0.03-0.09-0.08-0.18-0.09c-2.28-0.12-4.49-0.65-6.57-1.58c-0.09-0.04-0.18-0.03-0.26,0.01l-4.87,3.1l-0.32-0.2c-4.24-2.69-7.49-6.57-9.39-11.2l-0.19-0.45l4.68-3.17c0.09-0.06,0.13-0.18,0.1-0.29c-0.37-1.46-0.56-2.98-0.56-4.5c0-0.56,0.03-1.12,0.08-1.68c0.01-0.14-0.09-0.27-0.23-0.28L3.14,1.2C3.11,1.2,3.08,1.2,3.06,1.2z"
          />
        </>
      )
    case svgsIconName.iconPhoneXLarge:
      return (
        <>
          <desc>Icon of extra-large phone</desc>
          <path
            {...props}
            d="M61.23,69.33c-0.1,0-0.19,0-0.29-0.01C28.74,66.92,3.52,39.7,3.52,7.37c0-1.05,0.03-2.11,0.08-3.15c0.05-1.04,0.52-1.98,1.31-2.66c0.79-0.67,1.82-1,2.85-0.88L23.41,2.4c1.48,0.16,2.57,1.5,2.44,2.97c-0.11,1.22-0.17,2.46-0.17,3.69c0,3.35,0.41,6.68,1.23,9.9c0.29,1.14-0.16,2.33-1.11,2.98l-9.39,6.37c4.2,9.93,11.2,18.25,20.28,24.13l10.13-6.45c0.78-0.5,1.76-0.56,2.62-0.17c4.56,2.05,9.42,3.22,14.44,3.48c0.76,0.04,1.45,0.38,1.94,0.96c0.49,0.57,0.72,1.33,0.64,2.08l-1.5,13.65C64.75,67.91,63.14,69.33,61.23,69.33z M7.34,2.17c-0.54,0-1.05,0.19-1.46,0.54C5.4,3.11,5.12,3.68,5.09,4.3C5.04,5.31,5.02,6.35,5.02,7.37c0,31.55,24.62,58.11,56.04,60.46c1.21,0.1,2.28-0.79,2.41-2l1.5-13.65c0.04-0.34-0.06-0.68-0.29-0.94c-0.22-0.26-0.54-0.42-0.88-0.43h0c-5.21-0.26-10.25-1.48-14.98-3.61c-0.4-0.18-0.84-0.15-1.2,0.07l-10.94,6.96l-0.4-0.26c-9.71-6.17-17.15-15.03-21.5-25.64l-0.23-0.56l10.4-7.05c0.44-0.3,0.63-0.83,0.5-1.37c-0.84-3.34-1.27-6.79-1.27-10.27c0-1.27,0.06-2.56,0.17-3.83c0.06-0.67-0.43-1.27-1.1-1.35L7.59,2.18C7.51,2.17,7.42,2.17,7.34,2.17z"
          />
        </>
      )
    case svgsIconName.iconLinePhone:
      return (
        <>
          <desc>Icon of small line phone</desc>
          <path
            {...props}
            d="M29.14,22.9c-2.38-0.12-4.64-0.69-6.7-1.61c-0.28-0.13-0.61-0.11-0.87,0.06l-4.8,3.05c-4.3-2.73-7.7-6.75-9.66-11.52l4.51-3.06c0.32-0.22,0.46-0.61,0.37-0.99c-0.37-1.47-0.57-3.01-0.57-4.59c0-0.58,0.03-1.15,0.08-1.71c0.04-0.49-0.31-0.93-0.81-0.98L3.55,0.76c-0.78-0.09-1.48,0.5-1.52,1.29C2.01,2.52,2,2.99,2,3.46c0,14.73,11.39,26.8,25.84,27.88c0.74,0.05,1.38-0.48,1.47-1.22l0.69-6.22C30.05,23.39,29.66,22.93,29.14,22.9z"
          />
        </>
      )
    case svgsIconName.iconLineMap:
      return (
        <>
          <desc>Line icon of small line Map marker</desc>
          <path
            {...props}
            d="M16,9.42c0.86,0,1.55,0.7,1.55,1.55c0,0.86-0.7,1.55-1.55,1.55c-0.86,0-1.55-0.7-1.55-1.55C14.45,10.11,15.14,9.42,16,9.42"
          />
          <path d="M26.24,11.31c0-5.63-4.61-10.24-10.24-10.24c-5.63,0-10.24,4.61-10.24,10.24C5.76,16.95,16,31.07,16,31.07S26.24,16.95,26.24,11.31z" />
        </>
      )
    case svgsIconName.iconLineLocation:
      return (
        <>
          <desc>Line icon of building with flag</desc>
          <path
            {...props}
            d="M28.61,15.47v13.6h-9.4v-2.42h-8.53v2.42H1.39v-13.6h5.23v-2.79h16.76v2.79L28.61,15.47z M22.64,2.44V8h-3.92l-0.21-1.1h-3.13v5.76h-2.41V1.31h6.32l0.21,1.12H22.64z"
          />
        </>
      )
    case svgsIconName.iconLineLocationLarge:
      return (
        <>
          <desc>Line icon of a large building with flag</desc>
          <path
            {...props}
            d="M55.18,56H36.86v-4.35H22.94V56H4.82V30.13h9.4v-5.02h31.56v5.02h9.4V56z M38.28,54.58h15.48V31.55h-9.4v-5.02H15.65v5.02h-9.4v23.02h15.27v-4.35h16.77V54.58z M31.4,24.32h-4.06V4h10.98l0.38,2.02h5.76v11.42H36.1l-0.38-1.97H31.4V24.32z M28.76,22.89h1.22v-8.85h6.93l0.38,1.97h5.74V7.45h-5.52l-0.38-2.02h-8.37V22.89z"
          />
        </>
      )
    case svgsIconName.iconLineFleet:
      return (
        <>
          <desc>Line icon of two simplified small car fronts</desc>
          <path
            {...props}
            d="M30.38,10.2v8.76c0,.62-.46,1.13-1.08,1.13h-1.13c-.62,0-1.08-.52-1.08-1.13v-1.08h-4.25l.52,1.52v8.76c0,.62-.46,1.13-1.08,1.13h-1.13c-.62,0-1.08-.52-1.08-1.13v-1.08H4.86v1.08c0,.62-.46,1.13-1.08,1.13h-1.13c-.62,0-1.08-.52-1.08-1.13v-8.76l2.27-6.6c.24-.76,.77-1.13,1.6-1.13h4.56v-1.47l2.27-6.6c.24-.76,.77-1.13,1.6-1.13h12.66c.82,0,1.35,.37,1.6,1.13l2.27,6.6ZM7.28,22.33c0-.48-.17-.88-.49-1.19s-.71-.46-1.16-.46-.84,.15-1.16,.46c-.32,.31-.49,.71-.49,1.19s.17,.88,.49,1.19c.32,.31,.71,.46,1.16,.46s.84-.15,1.16-.46c.32-.31,.49-.71,.49-1.19Zm13.66,0c0-.48-.17-.88-.49-1.19-.32-.31-.71-.46-1.16-.46s-.84,.15-1.16,.46-.49,.71-.49,1.19,.17,.88,.49,1.19c.32,.31,.71,.46,1.16,.46s.84-.15,1.16-.46c.32-.31,.49-.71,.49-1.19Zm7.02-9.2c0-.48-.17-.88-.49-1.19-.32-.31-.71-.46-1.16-.46s-.84,.15-1.16,.46-.49,.71-.49,1.19,.17,.88,.49,1.19,.71,.46,1.16,.46,.84-.15,1.16-.46c.32-.31,.49-.71,.49-1.19Zm-1.35-4.18c.1,0,.16-.08,.13-.18l-1.24-3.72c-.03-.1-.15-.18-.25-.18H15.08c-.1,0-.22,.08-.25,.18l-1.24,3.72c-.03,.1,.03,.18,.13,.18h12.9Zm-7.07,9.2c.1,0,.16-.08,.13-.18l-1.24-3.72c-.03-.1-.15-.18-.25-.18H6.61c-.1,0-.22,.08-.25,.18l-1.24,3.72c-.03,.1,.03,.18,.13,.18h14.3Z"
          />
        </>
      )
    case svgsIconName.iconLineFleetLarge:
      return (
        <>
          <desc>Line icon of a large fleet</desc>
          <path
            {...props}
            d="M37.85,55.18h-2.06c-1.51,0-2.69-1.22-2.69-2.78v-1.26H10.45v1.26c0,1.56-1.18,2.78-2.69,2.78H5.7c-1.51,0-2.7-1.22-2.7-2.78l0.04-16.22l4.14-12.03c0.54-1.66,1.78-2.55,3.59-2.55h8.7l0.04-2.2l4.14-12.03c0.54-1.66,1.78-2.55,3.59-2.55h21.99c1.82,0,3.06,0.88,3.6,2.56L57,19.64v15.99c0,1.56-1.18,2.78-2.7,2.78h-2.06c-1.51,0-2.69-1.22-2.69-2.78v-1.26h-9.67l0.67,2.05V52.4C40.54,53.96,39.36,55.18,37.85,55.18z M9.02,49.71h25.5v2.7c0,0.77,0.54,1.35,1.26,1.35h2.06c0.71,0,1.26-0.59,1.26-1.35V36.53l-1.25-3.6h13.12v2.7c0,0.77,0.54,1.35,1.26,1.35h2.06c0.71,0,1.26-0.59,1.26-1.35V19.76l-4.1-11.95c-0.34-1.08-1.03-1.56-2.23-1.56H27.24c-1.19,0-1.88,0.48-2.23,1.57l-4.1,11.93v3.28H10.77c-1.19,0-1.88,0.48-2.23,1.57l-4.1,11.93V52.4c0,0.77,0.54,1.35,1.26,1.35h2.06c0.71,0,1.26-0.59,1.26-1.35V49.71z M32.77,45.11c-1.03,0-1.91-0.35-2.62-1.05c-0.73-0.7-1.11-1.63-1.11-2.67c0-1.07,0.39-1.99,1.13-2.68c0.73-0.69,1.61-1.03,2.6-1.03c1.01,0,1.88,0.35,2.61,1.04c0.73,0.7,1.12,1.62,1.12,2.68c0,1.06-0.39,1.99-1.12,2.68C34.66,44.76,33.79,45.11,32.77,45.11z M32.77,39.11c-0.63,0-1.16,0.21-1.62,0.65c-0.45,0.42-0.67,0.97-0.67,1.64c0,0.66,0.22,1.2,0.68,1.64c0.44,0.43,0.97,0.64,1.61,0.64c0.64,0,1.17-0.21,1.61-0.64l0.01-0.01c0.45-0.42,0.67-0.96,0.67-1.64c0-0.67-0.22-1.21-0.68-1.64C33.94,39.32,33.41,39.11,32.77,39.11z M10.78,45.11c-1.01,0-1.88-0.35-2.61-1.04c-0.73-0.7-1.12-1.62-1.12-2.68c0-1.07,0.39-2,1.12-2.68c0.71-0.68,1.59-1.03,2.6-1.03c1.03,0,1.91,0.35,2.62,1.05c0.73,0.7,1.11,1.63,1.11,2.67c0,1.04-0.39,1.97-1.12,2.67l0,0C12.68,44.76,11.8,45.11,10.78,45.11z M10.78,39.11c-0.64,0-1.17,0.21-1.61,0.64c-0.45,0.42-0.68,0.97-0.68,1.64c0,0.67,0.22,1.21,0.67,1.64c0.46,0.43,0.98,0.64,1.62,0.64c0.64,0,1.17-0.21,1.61-0.64v0c0.45-0.44,0.68-0.99,0.68-1.64c0-0.66-0.22-1.2-0.68-1.65C11.95,39.32,11.43,39.11,10.78,39.11z M36.79,35.06H6.76l3.5-10.47h23.02L36.79,35.06z M8.76,33.62H34.8l-2.54-7.6H11.3L8.76,33.62z M49.23,28.34c-1.01,0-1.92-0.36-2.62-1.05c-0.73-0.7-1.11-1.63-1.11-2.67c0-1.07,0.39-1.99,1.13-2.68c0.71-0.68,1.58-1.03,2.6-1.03c1.01,0,1.88,0.35,2.61,1.04c0.73,0.7,1.12,1.62,1.12,2.68c0,1.07-0.38,1.97-1.12,2.68C51.12,27.99,50.25,28.34,49.23,28.34z M49.23,22.34c-0.64,0-1.17,0.21-1.61,0.64c-0.45,0.43-0.68,0.98-0.68,1.64c0,0.66,0.23,1.21,0.68,1.64c0.44,0.43,0.97,0.64,1.61,0.64c0.64,0,1.17-0.21,1.61-0.64l0,0c0.46-0.44,0.68-0.96,0.68-1.64c0-0.67-0.22-1.21-0.67-1.64C50.39,22.55,49.86,22.34,49.23,22.34z M53.23,18.29H23.5l0.04-0.95l3.18-9.51h23.02L53.23,18.29z M25.21,16.86h26.04l-2.53-7.6H27.75L25.21,16.86z"
          />
        </>
      )
    case svgsIconName.iconLineFinance:
      return (
        <>
          <desc>Line icon of a small simplified calculator</desc>
          <path
            {...props}
            d="M6.64,2.59H25.76c1.52,0,2.76,1.23,2.76,2.76V26.65c0,1.52-1.23,2.76-2.76,2.76H6.64c-1.52,0-2.76-1.23-2.76-2.76V5.35c0-1.52,1.23-2.76,2.76-2.76Zm.86,3.37v6.37H24.92V5.97H7.5Zm0,9.56v3.73h6.87v-3.73H7.5Zm10.54,0v3.73h6.87v-3.73h-6.87Zm-10.54,6.85v3.73h6.87v-3.73H7.5Zm10.54,0v3.73h6.87v-3.73h-6.87Z"
          />
        </>
      )
    case svgsIconName.iconLineFinanceLarge:
      return (
        <>
          <desc>Line icon of a large finance</desc>
          <path
            {...props}
            d="M50.75,54.12H9.25V5.88h41.5V54.12z M10.75,52.62h38.5V7.38h-38.5V52.62z M43.64,12.6v9H16.36v-9H43.64 M45.14,11.1H14.86v12h30.27V11.1L45.14,11.1z M21.67,27.4v3.06H16.5V27.4H21.67 M23.17,25.9H15v6.06h8.17V25.9L23.17,25.9z M32.58,27.4v3.06h-5.17V27.4H32.58 M34.08,25.9h-8.17v6.06h8.17V25.9L34.08,25.9z M43.5,27.4v3.06h-5.17V27.4H43.5 M45,25.9h-8.17v6.06H45V25.9L45,25.9z M21.67,35.87v3.06H16.5v-3.06H21.67 M23.17,34.37H15v6.06h8.17V34.37L23.17,34.37z M32.58,35.87v3.06h-5.17v-3.06H32.58 M34.08,34.37h-8.17v6.06h8.17V34.37L34.08,34.37z M43.5,35.87v3.06h-5.17v-3.06H43.5 M45,34.37h-8.17v6.06H45V34.37L45,34.37z M21.67,44.34v3.06H16.5v-3.06H21.67 M23.17,42.84H15v6.06h8.17V42.84L23.17,42.84z M32.58,44.34v3.06h-5.17v-3.06H32.58 M34.08,42.84h-8.17v6.06h8.17V42.84L34.08,42.84z M43.5,44.34v3.06h-5.17v-3.06H43.5 M45,42.84h-8.17v6.06H45V42.84L45,42.84z"
          />
        </>
      )
    case svgsIconName.iconLineSales:
      return (
        <>
          <desc>Line icon of a small car</desc>
          <path
            {...props}
            d="M27.76,19.13c0,0.86-0.7,1.57-1.57,1.57c-0.86,0-1.57-0.7-1.57-1.57c0-0.86,0.7-1.57,1.57-1.57C27.06,17.57,27.76,18.27,27.76,19.13"
          />
          <path d="M7.41,19.13c0,0.86-0.7,1.57-1.57,1.57S4.28,20,4.28,19.13c0-0.86,0.7-1.57,1.57-1.57S7.41,18.27,7.41,19.13" />
          <path d="M30.24,7.75L27.4,9.14 M1.68,7.75l2.84,1.39" />
          <polyline points="2.58,13.21 9.35,15.11 22.65,15.11 29.38,13.22" />
          <path d="M28.91,26.07h-3.13c-0.86,0-1.56-0.7-1.56-1.57v-1.56H7.78v1.56c0,0.86-0.7,1.57-1.57,1.57H3.09c-0.86,0-1.57-0.7-1.57-1.57v-5.87v-1.59c0-2.55,1.12-4.92,2.91-6.74c0.82-0.83,1.49-1.81,1.97-2.88l0.01-0.03c0.66-1.49,2.13-2.45,3.76-2.45h11.65c1.64,0,3.12,0.97,3.78,2.47l0.01,0.02c0.46,1.04,1.08,2.02,1.9,2.81c1.9,1.84,2.97,4.37,2.97,7.02v0.6l0,6.65C30.48,25.37,29.78,26.07,28.91,26.07z" />
        </>
      )
    case svgsIconName.iconLineSalesLarge:
      return (
        <>
          <desc>Line icon of a large car</desc>
          <path
            {...props}
            d="M46.93,34.5c0,1.24-1.01,2.25-2.25,2.25s-2.25-1.01-2.25-2.25c0-1.24,1.01-2.25,2.25-2.25S46.93,33.26,46.93,34.5 M17.68,34.5c0-1.24-1.01-2.25-2.25-2.25s-2.25,1.01-2.25,2.25c0,1.24,1.01,2.25,2.25,2.25S17.68,35.74,17.68,34.5 M13.43,19.84l-4.55-1.85l-0.42,1.04L13,20.88L13.43,19.84z M51.54,19.03l-0.42-1.04l-4.55,1.85L47,20.88L51.54,19.03z M51.43,42.94c0,1.55-1.26,2.82-2.81,2.82h-4.5c-1.55,0-2.81-1.26-2.81-2.81v-1.69h-22.5v1.69c0,1.55-1.26,2.81-2.81,2.81h-4.5c-1.55,0-2.81-1.26-2.81-2.81V32.21c0-3.66,1.54-7.24,4.34-10.08c1.14-1.16,2.05-2.49,2.71-3.97c1.05-2.39,3.37-3.91,5.94-3.91h16.74c2.58,0,4.91,1.52,5.95,3.88c0.7,1.59,1.58,2.89,2.62,3.9c2.83,2.73,4.45,6.56,4.45,10.49L51.43,42.94z M11.31,26.35l9.26,2.53h18.97l9.24-2.52c-0.67-1.3-1.53-2.49-2.59-3.52c-1.14-1.11-2.1-2.53-2.85-4.22c-0.87-1.98-2.81-3.24-4.94-3.24H21.67c-2.12,0-4.03,1.25-4.89,3.19c-0.74,1.65-1.72,3.1-2.96,4.36C12.79,23.97,11.95,25.13,11.31,26.35z M50.31,42.94L50.3,32.52c0-1.77-0.36-3.51-1.03-5.13L39.69,30l-19.35-0.02l-9.54-2.6c-0.66,1.55-1,3.18-1,4.83v10.73c0,0.93,0.76,1.69,1.69,1.69h4.5c0.93,0,1.69-0.76,1.69-1.69v-2.81h24.75v2.81c0,0.93,0.76,1.69,1.69,1.69h4.5C49.55,44.62,50.31,43.87,50.31,42.94z"
          />
        </>
      )
    case svgsIconName.iconLineService:
      return (
        <>
          <desc>Line icon of a small spanner</desc>
          <path {...props} d="M5.8,25.39c0.55,0,1,0.45,1,1s-0.45,1-1,1c-0.55,0-1-0.45-1-1S5.25,25.39,5.8,25.39" />
          <path d="M29.07,7.06l-3.7,3.7L22.19,9.7l-1.06-3.18l3.7-3.7c-2.52-0.92-5.45-0.37-7.47,1.65c-2.07,2.06-2.59,5.08-1.59,7.64L3.38,24.49c-1.17,1.17-1.17,3.07,0,4.24c1.17,1.17,3.07,1.17,4.24,0l12.49-12.49c2.48,0.84,5.33,0.27,7.31-1.7C29.44,12.52,29.99,9.58,29.07,7.06z" />
        </>
      )
    case svgsIconName.iconLineServiceLarge:
      return (
        <>
          <desc>Line icon of a large spanner</desc>
          <path
            {...props}
            d="M11.46,53.83c-1.37,0-2.66-0.53-3.62-1.5c-0.97-0.97-1.5-2.25-1.5-3.62s0.53-2.66,1.5-3.62L31.7,21.22c-1.44-4.1-0.41-8.67,2.67-11.75c3.1-3.09,7.76-4.12,11.88-2.62l0.92,0.34l-5.68,5.68l1.37,4.11l4.11,1.37l5.68-5.68l0.34,0.92c1.5,4.12,0.48,8.79-2.62,11.88c-2.97,2.97-7.25,4.03-11.25,2.83L15.08,52.33C14.12,53.29,12.83,53.83,11.46,53.83z M42.37,7.42c-2.63,0-5.21,1.02-7.12,2.93c-2.83,2.83-3.71,7.07-2.25,10.8l0.15,0.38L8.72,45.96c-0.73,0.73-1.14,1.7-1.14,2.74c0,1.03,0.4,2.01,1.14,2.74c1.46,1.46,4.02,1.46,5.48,0l24.57-24.57l0.37,0.12c3.65,1.23,7.61,0.31,10.34-2.41c2.51-2.51,3.49-6.19,2.62-9.61l-4.8,4.8l-5.44-1.81l-1.81-5.44l4.8-4.8C44.04,7.52,43.2,7.42,42.37,7.42z M12.59,48.41c0-0.62-0.5-1.13-1.13-1.13c-0.62,0-1.13,0.5-1.13,1.13c0,0.62,0.5,1.13,1.13,1.13C12.08,49.53,12.59,49.03,12.59,48.41"
          />
        </>
      )
    case svgsIconName.iconLineParts:
      return (
        <>
          <desc>Line icon of a small piston</desc>
          <path {...props} d="M24.02,14.65H10.47V3.5c0-1.38,1.12-2.5,2.5-2.5h8.55c1.38,0,2.5,1.12,2.5,2.5V14.65z" />
          <line x1="24.02" y1="5.49" x2="10.47" y2="5.49" />
          <circle cx="11.85" cy="27.13" r="3.87" />
          <line x1="16.86" y1="14.95" x2="13.38" y2="23.3" />
        </>
      )
    case svgsIconName.iconLinePartsLarge:
      return (
        <>
          <desc>Line icon of a large piston</desc>
          <path
            {...props}
            d="M23.67,53c-3.49,0-6.33-2.84-6.33-6.33s2.84-6.33,6.33-6.33c0.61,0,1.19,0.08,1.75,0.24l4.98-11.73h-9.6V11.02C20.8,8.77,22.57,7,24.82,7h13.8c2.26,0,4.02,1.77,4.02,4.02v17.83h-11L26.5,40.99c2.09,1.02,3.5,3.16,3.5,5.68C30,50.22,27.22,53,23.67,53z M23.67,41.5c-2.85,0-5.17,2.32-5.17,5.17s2.32,5.17,5.17,5.17c2.9,0,5.17-2.27,5.17-5.17C28.85,43.77,26.58,41.5,23.67,41.5z M21.95,27.7H41.5V15.05H21.95V27.7z M21.95,13.9H41.5v-2.87c0-1.64-1.24-2.87-2.87-2.87h-13.8c-1.64,0-2.87,1.24-2.87,2.87V13.9z"
          />
        </>
      )
    case svgsIconName.videoPlayButton:
      return (
        <>
          <desc>Video Click to Start Icon</desc>
          <path
            {...props}
            d="M21,10.5C21,16.3,16.3,21,10.5,21S0,16.31,0,10.5S4.7,0,10.5,0S21,4.7,21,10.5z M10.5,2.25c-4.56,0-8.25,3.7-8.25,8.25s3.69,8.25,8.25,8.25s8.25-3.7,8.25-8.25S15.06,2.25,10.5,2.25z M14.62,11.18c0.49-0.37,0.49-0.98,0-1.36L8.89,5.51c-0.49-0.37-0.9-0.17-0.9,0.45v9.09c0,0.62,0.4,0.82,0.9,0.45L14.62,11.18z"
          />
        </>
      )
    case svgsIconName.iconPrinter:
      return (
        <>
          <desc>icon of an printer</desc>
          <path
            {...props}
            d="M15.4,1.9H4.6v3.6H15.4m.9,4.5c-.5,0-.9-.4-.9-.9s.4-.9,.9-.9,.9,.4,.9,.9-.4,.9-.9,.9m-2.7,6.3H6.4v-4.5h7.2m2.7-5.4H3.7c-1.49,0-2.7,1.21-2.7,2.7v5.4h3.6v3.6H15.4v-3.6h3.6v-5.4c0-1.49-1.21-2.7-2.7-2.7Z"
          />
        </>
      )
    case svgsIconName.calculator:
      return (
        <>
          <desc>icon of a calculator</desc>
          <path
            {...props}
            d="M18.2,2.51H6.8C5.25,2.51,4,3.77,4,5.32v14.39v0c0,1.55,1.25,2.8,2.8,2.8H18.2c1.55,0,2.8-1.25,2.8-2.8v0V5.32C21,3.77,19.75,2.51,18.2,2.51z M9.62,19.68c0,0.46-0.37,0.83-0.83,0.83H6.45c-0.46,0-0.83-0.37-0.83-0.83v-0.83c0-0.46,0.37-0.83,0.83-0.83H8.8c0.46,0,0.83,0.37,0.83,0.83V19.68z M9.62,16.04c0,0.46-0.37,0.83-0.83,0.83H6.45c-0.46,0-0.83-0.37-0.83-0.83v-0.83c0-0.46,0.37-0.83,0.83-0.83H8.8c0.46,0,0.83,0.37,0.83,0.83V16.04z M9.62,12.4c0,0.46-0.37,0.83-0.83,0.83H6.45c-0.46,0-0.83-0.37-0.83-0.83v-0.83c0-0.46,0.37-0.83,0.83-0.83H8.8c0.46,0,0.83,0.37,0.83,0.83V12.4z M14.45,19.68c0,0.46-0.37,0.83-0.83,0.83h-2.34c-0.46,0-0.83-0.37-0.83-0.83v-0.83c0-0.46,0.37-0.83,0.83-0.83h2.34c0.46,0,0.83,0.37,0.83,0.83L14.45,19.68L14.45,19.68z M14.45,16.04c0,0.46-0.37,0.83-0.83,0.83h-2.34c-0.46,0-0.83-0.37-0.83-0.83v-0.83c0-0.46,0.37-0.83,0.83-0.83h2.34c0.46,0,0.83,0.37,0.83,0.83L14.45,16.04L14.45,16.04z M14.47,12.47c0,0.46-0.37,0.83-0.83,0.83H11.3c-0.46,0-0.83-0.37-0.83-0.83v-0.83c0-0.46,0.37-0.83,0.83-0.83h2.34c0.46,0,0.83,0.37,0.83,0.83V12.47z M19.28,19.68c0,0.46-0.37,0.83-0.83,0.83h-2.34c-0.46,0-0.83-0.37-0.83-0.83v-0.83c0-0.46,0.37-0.83,0.83-0.83h2.34c0.46,0,0.83,0.37,0.83,0.83L19.28,19.68L19.28,19.68z M19.28,16.04c0,0.46-0.37,0.83-0.83,0.83h-2.34c-0.46,0-0.83-0.37-0.83-0.83v-0.83c0-0.46,0.37-0.83,0.83-0.83h2.34c0.46,0,0.83,0.37,0.83,0.83L19.28,16.04L19.28,16.04z M19.29,12.49c0,0.46-0.37,0.83-0.83,0.83h-2.34c-0.46,0-0.83-0.37-0.83-0.83v-0.83c0-0.46,0.37-0.83,0.83-0.83h2.34c0.46,0,0.83,0.37,0.83,0.83V12.49z M19.46,8.68c0,0.41-0.33,0.75-0.75,0.75H6.22c-0.41,0-0.75-0.33-0.75-0.75v-3.3c0-0.41,0.33-0.75,0.75-0.75h12.5c0.41,0,0.75,0.33,0.75,0.75L19.46,8.68L19.46,8.68z"
          />
        </>
      )
    case svgsIconName.iconCheck:
      return (
        <>
          <desc>icon of checked or done</desc>
          <path {...props} d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </>
      )
    case svgsIconName.iconVisa:
      return (
        <>
          <desc>icon of Visa</desc>
          <path
            {...props}
            d="M20.8 5.31L17.97 18.9h-3.43l2.83-13.58h3.43zm14.23 8.78l1.82-5.12 1.01 5.12h-2.83zm3.84 4.8H42L39.27 5.31h-2.92c-.61 0-1.22.42-1.42 1.05l-5.05 12.53h3.54l.7-1.98h4.35l.4 1.98zm-8.88-4.49c0-3.55-4.75-3.76-4.75-5.33.1-.73.7-1.15 1.41-1.15 1.11-.1 2.33.1 3.34.63l.6-2.92A8.36 8.36 0 0 0 27.46 5c-3.33 0-5.75 1.88-5.75 4.5 0 1.98 1.71 3.02 2.92 3.65 1.32.62 1.82 1.04 1.72 1.67 0 .94-1 1.36-2.02 1.36a8.37 8.37 0 0 1-3.53-.84l-.6 2.92c1.2.53 2.52.74 3.73.74 3.73.1 6.06-1.78 6.06-4.6zM15.95 5.31L10.5 18.9H6.87L4.14 8.03c0-.52-.4-.94-.8-1.15A11.5 11.5 0 0 0 0 5.73l.1-.42h5.76c.8 0 1.4.63 1.51 1.36l1.41 7.83 3.64-9.19h3.53z"
          />
        </>
      )
    case svgsIconName.iconMastercard:
      return (
        <>
          <desc>icon of Mastercard</desc>
          <path
            fill="#0A2540"
            {...props}
            d="M36.1 4.99c-.6 0-1.4.2-1.8.9-.3-.5-.9-.9-1.7-.9-.5 0-1.1.1-1.5.7v-.6H30v4.9h1.1v-2.7c0-.8.6-1.3 1.3-1.3.7 0 1.1.5 1.1 1.3v2.7h1.1v-2.7c0-.8.6-1.3 1.3-1.3.7 0 1.1.5 1.1 1.3v2.7h1.09v-3c0-1.2-.8-2-2-2zm6.88.8c-.3-.4-.8-.7-1.5-.7-1.4 0-2.4 1.1-2.4 2.6s1.1 2.6 2.4 2.6c.7 0 1.2-.3 1.5-.7v.4h1.1v-4.9h-1.1v.7zm-1.4 3.4c-.9 0-1.5-.7-1.5-1.6 0-.9.6-1.6 1.5-1.6s1.5.7 1.5 1.6c0 .9-.6 1.6-1.5 1.6zm6.2-2.1l-.5-.1c-.4-.1-.8-.2-.8-.5s.3-.6.9-.6c.6 0 1.2.2 1.5.4l.5-.8c-.5-.3-1.2-.5-2-.5-1.2 0-2 .6-2 1.6 0 .8.6 1.3 1.6 1.4l.5.1c.6.1.8.3.8.5 0 .4-.4.6-1.1.6-.8 0-1.3-.2-1.6-.5l-.5.8c.7.5 1.6.6 2.1.6 1.4 0 2.2-.7 2.2-1.6.1-.8-.5-1.2-1.6-1.4zm5.4 2.1c-.4 0-.8-.3-.8-.9v-2.1h1.9v-1h-1.9v-1.5h-1.1v1.5h-1v1h1v2.1c0 1.3.6 1.9 1.7 1.9.6 0 1.1-.2 1.5-.5l-.4-.9c-.3.2-.6.4-.9.4zm4.39-4.2c-1.4 0-2.4 1-2.4 2.6s1 2.6 2.5 2.6c.7 0 1.4-.2 2-.7l-.5-.8c-.4.3-.9.5-1.4.5-.7 0-1.3-.4-1.4-1.2h3.6v-.4c-.1-1.5-1-2.6-2.4-2.6zm-1.3 2.2c.1-.7.5-1.2 1.3-1.2.7 0 1.1.4 1.2 1.2h-2.5zm5.9-1.5v-.6h-1.1v4.9h1.1v-2.7c0-.8.5-1.3 1.2-1.3.3 0 .6.1.79.2l.3-1.1c-.2-.1-.5-.1-.8-.1-.7 0-1.2.2-1.5.7zm4.99.3c.5 0 .8.2 1.2.5l.7-.7c-.4-.5-1.1-.8-1.8-.8-1.5 0-2.6 1.1-2.6 2.6s1 2.6 2.6 2.6c.7 0 1.4-.3 1.8-.8l-.7-.7c-.3.3-.7.5-1.2.5-.8 0-1.4-.6-1.4-1.6s.6-1.6 1.4-1.6zm6.39-.2c-.3-.4-.8-.7-1.5-.7-1.4 0-2.4 1.1-2.4 2.6s1.1 2.6 2.4 2.6c.7 0 1.2-.3 1.5-.7v.4h1.1v-4.9h-1.1v.7zm-1.4 3.4c-.9 0-1.5-.7-1.5-1.6 0-.9.6-1.6 1.5-1.6s1.5.7 1.5 1.6c0 .9-.6 1.6-1.5 1.6zm5.1-3.5v-.6h-1.1v4.9h1.1v-2.7c0-.8.5-1.3 1.2-1.3.3 0 .6.1.8.2l.3-1.1c-.2-.1-.5-.1-.8-.1-.7 0-1.2.2-1.5.7zm6.39-3v3c-.3-.4-.8-.7-1.5-.7-1.4 0-2.4 1.1-2.4 2.6s1.1 2.6 2.4 2.6c.7 0 1.2-.3 1.5-.7v.5h1.1v-7.3h-1.1zm-1.4 6.5c-.9 0-1.5-.7-1.5-1.6 0-.9.6-1.6 1.5-1.6s1.5.7 1.5 1.6c0 .9-.6 1.6-1.5 1.6z"
          />
          <path
            fill="#ED0006"
            d="M10.12 7.59c0-2.4 1.1-4.5 2.8-5.9-1.3-1-2.9-1.6-4.6-1.6C4.22 0 .93 3.4.93 7.6s3.3 7.59 7.4 7.59c1.7 0 3.29-.6 4.59-1.6a7.96 7.96 0 0 1-2.8-6z"
          />
          <path
            fill="#F9A000"
            d="M17.51 0c-1.7 0-3.3.6-4.6 1.6a7.6 7.6 0 0 1 0 11.78c1.3 1 2.9 1.6 4.6 1.6 4.1 0 7.4-3.4 7.4-7.5C24.9 3.4 21.6 0 17.5 0z"
          />
          <path
            fill="#FF5D00"
            d="M15.71 7.59c0-2.4-1.1-4.5-2.8-5.9-1.7 1.4-3.79 3.5-3.79 5.9 0 2.4 2 4.5 3.8 5.89a7.6 7.6 0 0 0 2.8-5.9z"
          />
        </>
      )
    case svgsIconName.iconAmericanExpress:
      return (
        <>
          <desc>icon of American Express</desc>
          <g fill="none" {...props} fillRule="evenodd">
            <path
              fill="#017ECD"
              fillRule="nonzero"
              d="M25.45 11.51v-1.28c0-.5-.5-.99-1-.99h-1.4v2.27h-1.51V5.1h3.7c.9-.1 1.8.5 1.9 1.38v.5c0 .59-.3 1.18-.9 1.47.5.3.8.9.7 1.48v1.58h-1.5zm-2.5-3.75h1.6c.3.1.7-.1.8-.4.1-.29-.1-.68-.4-.78h-2v1.18zm21.33 3.75l-2.4-4.34v4.34h-3.01l-.5-1.38h-2.8l-.5 1.38h-3.21s-2-.3-2-3.06c0-3.35 1.7-3.45 2.4-3.45h1.9v1.48h-1.5c-.7.1-1.2.7-1.1 1.38v.5c0 2.17 2.6 1.48 2.7 1.48L36.16 5h2.1l2.31 5.82V5.1h2.1l2.41 4.24V5.1h1.5v6.51l-2.3-.1zm-8.01-2.96h1.5l-.7-1.87-.8 1.87zm-22.75 2.96V7.07l-1.9 4.44h-1.2l-1.9-4.44v4.44H5.5l-.5-1.38H2.2l-.5 1.38H0L2.5 5h2.1l2.31 5.92V5.1h2.4l1.71 4.04 1.7-4.04h2.4v6.51l-1.6-.1zM2.81 8.55h1.5l-.7-1.87-.8 1.87zm13.12 2.96V5.1h4.7v1.48h-3.2v.99h3.1v1.48h-3.1v1.08h3.2v1.38h-4.7zm11.82.1V5.1h1.5v6.51h-1.5zm3.3 8.3v-1.3c0-.58-.5-.98-1.1-.98h-1.6v2.27h-1.6V13.5h3.9c1-.2 1.9.49 2 1.48v.4c0 .58-.3 1.18-.9 1.47.5.3.8.89.8 1.48v1.58h-1.5zm-2.6-3.76h1.7c.3.1.7-.1.8-.4.1-.29-.1-.68-.4-.78a.3.3 0 0 0-.4 0h-1.7v1.18zm-8.11 3.75h-1.4l-1.7-1.87-1.71 1.87H9.52V13.5h5.9l1.81 2.07 1.9-2.07h5.11c1-.1 1.9.49 2 1.48v.4c0 1.87-.7 2.46-2.8 2.46h-1.6v2.07h-1.5zm-2-3.16l2 2.27v-4.44l-2 2.17zm-7.22 1.78h3.4l1.6-1.78-1.6-1.77h-3.4v.98h3.3v1.48h-3.3v1.09zm10.82-2.37h1.7c.3.1.7-.1.8-.4.1-.29-.1-.68-.4-.78a.3.3 0 0 0-.4 0h-1.7v1.18zm20.14 3.75h-2.9v-1.48h2.5s.9.1.9-.5c0-.58-1.4-.49-1.4-.49-1.1.2-2-.59-2.2-1.57v-.3c-.11-.99.7-1.88 1.7-1.97h3.4v1.38h-2.5s-.9-.2-.9.5c0 .48 1.2.48 1.2.48s2.5-.2 2.5 1.78c.1 1.09-.6 2.07-1.8 2.27h-.4l-.1-.1zm-8.62 0V13.5h5.01v1.48h-3.4v.98h3.3v1.48h-3.3v1.09h3.4v1.38h-5zm14.23 0h-2.9v-1.48h2.5s.9.1.9-.5c0-.58-1.4-.49-1.4-.49-1.1.2-2-.59-2.2-1.67v-.3c-.1-.99.7-1.87 1.7-1.97h3.4v1.48h-2.5s-.9-.2-.9.5c0 .48 1.2.48 1.2.48s2.5-.2 2.5 1.78c.1 1.09-.6 2.07-1.8 2.27h-.4c0-.1 0-.1-.1-.1z"
            />
            <path d="M0 0h50v24H0z" fill="null" />
          </g>
        </>
      )
    case svgsIconName.iconJCB:
      return (
        <>
          <desc>icon of American Express</desc>
          <g fill="none" {...props} fillRule="evenodd">
            <g fillRule="nonzero">
              <path
                fill="#1B6BAF"
                d="M3 3C1.3 3 0 4.33 0 6.03v7.58c.75.47 1.6.76 2.53.76.84 0 1.5-.66 1.59-1.52V8.68h2.52v3.98c0 1.52-.84 2.85-3.55 2.85-1.03 0-2.06-.2-3-.38V21h4.5c1.68 0 2.99-1.33 2.99-3.03V3H2.99z"
              />
              <path
                fill="#D02644"
                d="M11.65 3a3 3 0 0 0-3.03 3.06V9.7c.76-.76 2.09-1.24 4.26-1.15.86.1 1.61.2 2.37.39v1.43a6.4 6.4 0 0 0-2.27-.76 2.5 2.5 0 0 0-2.65 2.1 2.52 2.52 0 0 0 2.08 2.68h.47c.86-.1 1.61-.38 2.28-.76v1.43c-.76.2-1.61.39-2.37.39-2.18.1-3.5-.39-4.26-1.15V21h4.54a3 3 0 0 0 3.04-3.06V3h-4.46z"
              />
              <path
                fill="#46A548"
                d="M20.12 3a3.01 3.01 0 0 0-3.07 3.03v2.65h4.7c.87-.1 1.63.67 1.73 1.52v.1c0 .85-.58 1.51-1.44 1.6.96 0 1.73.76 1.82 1.71 0 .95-.86 1.7-1.82 1.7h-4.99V21h4.51a3.01 3.01 0 0 0 3.07-3.03V3h-4.5zm-1.15 11.27h2.2c.49-.19.78-.66.68-1.23-.1-.28-.38-.57-.67-.66h-2.2v1.9zm2.69-3.79a.91.91 0 0 0-.67-.85h-2.02v1.7H21c.38-.09.67-.47.67-.85z"
              />
            </g>
            <path d="M0 0h26v24H0z" fill="null" />
          </g>
        </>
      )
    case svgsIconName.iconLaunch:
      return (
        <>
          <desc>icon of Launch</desc>
          <path
            {...props}
            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
          />
        </>
      )
    default:
      return <path />
  }
}

interface SvgsProps {
  name: keyof typeof svgsIconName
  testName?: string
  className?: string
  viewBox?: string
}

const Svgs = ({ className, viewBox, name, testName, ...props }: SvgsProps) => (
  <svg
    className={className}
    viewBox={viewBox || getViewBox(name)}
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={testName}
  >
    {getPath(name, { ...props })}
  </svg>
)

export default Svgs
