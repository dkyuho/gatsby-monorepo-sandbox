export default (filename) => {
  const x = filename
  let imageFileType = ''

  if (x.match(/.(jpg)$/)) {
    imageFileType = 'image/jpeg'
  } else if (x.match(/.(jpeg)$/)) {
    imageFileType = 'image/jpeg'
  } else if (x.match(/.(png)$/)) {
    imageFileType = 'image/png'
  } else if (x.match(/.(gif)$/)) {
    imageFileType = 'image/gif'
  } else if (x.match(/.(webp)$/)) {
    imageFileType = 'image/webp'
  } else if (x.match(/.(svg)$/)) {
    imageFileType = 'image/svg+xml'
  } else {
    imageFileType = 'image/jpeg'
  }
  return imageFileType
}
