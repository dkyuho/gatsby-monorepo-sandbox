const heaven = '9000'

const zindex = {
  heaven, // 9000
  space: '100',
  stratosphere: '60',
  ozone: '40',
  clouds: '20',
  air: '10',
  surface: '1',
  default: '0',
  crust: '-1',
  moltenCore: -heaven,
  modal: {
    backdrop: `${+heaven - 1}`,
    close: '100',
    controls: '50',
    content: '5',
    base: '1',
  },
} as const

export default zindex
