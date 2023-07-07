//  Desc: A simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet
//  @param {string} word
//  @returns {string}
export const rot13 = (word) => {
  let rotatedWord = ''
  let newValue

  for (let index = 0; index < word.length; index += 1) {
    const currentAscii = word.charCodeAt(index)
    if (currentAscii >= 65 && currentAscii <= 90) {
      newValue = currentAscii < 78 ? String.fromCharCode(currentAscii + 13) : String.fromCharCode(currentAscii - 13)
      rotatedWord += newValue
    } else if (currentAscii >= 97 && currentAscii <= 122) {
      newValue = currentAscii < 110 ? String.fromCharCode(currentAscii + 13) : String.fromCharCode(currentAscii - 13)
      rotatedWord += newValue
    } else {
      rotatedWord += word[index]
    }
  }

  return rotatedWord
}

// Desc: Email encoding function, uses XOR, Hex and ROT-13 in that order
// @param {string} email
// @returns {string}
export const encodeEmail = (email) => {
  const key = Math.floor(1 * 256)
  const encodedKey = key.toString(16)
  let encodedString = encodedKey.length === 1 ? `0${encodedKey}` : encodedKey

  for (let index = 0; index < email.length; index += 1) {
    const characterCode = email.charCodeAt(index)
    const encodedCharacter = (characterCode ^ key).toString(16)
    encodedString += encodedCharacter.length === 1 ? `0${encodedCharacter}` : encodedCharacter
  }

  // ROT-13 rotates encodedString and returns same value
  return rot13(encodedString)
}

// Desc: Email decoding function, uses XOR, Hex and ROT-13.
// @param {string} encodedString
// @returns {string}
export const decodeEmail = (encodedString) => {
  // ROT-13 re-rotates encodedString
  const encodedStringReRot = rot13(encodedString)

  let email = ''
  const key = parseInt(encodedStringReRot.substr(0, 2), 16)

  for (let i = 2; i < encodedStringReRot.length; i += 2) {
    const emailCharacter = parseInt(encodedStringReRot.substr(i, 2), 16) ^ key
    email += String.fromCharCode(emailCharacter)
  }

  // Supports decoding of Unicode codepoints. See https://blog.jse.li/posts/cloudflare-scrape-shield/
  email = decodeURIComponent(escape(email))
  return email
}
