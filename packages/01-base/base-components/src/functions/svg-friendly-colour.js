export default (colour) =>
  // Replace # with %23 to make colour variables useable in CSS SVGs
  // new object assigned to var colour
  colour.replace(/#/g, '%23')
