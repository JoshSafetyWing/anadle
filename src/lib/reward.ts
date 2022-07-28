import * as CryptoJS from 'crypto-js'

export const reward = CryptoJS.AES.decrypt(
  'U2FsdGVkX1+Jr3OxOGRg9hFXBGAAVOl1nAoIMnrSVXLijWj1mRuPAvDLIA9XeysG',
  'anna'
).toString(CryptoJS.enc.Utf8)
