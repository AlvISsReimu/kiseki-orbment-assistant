import CryptoJS from 'crypto-js'

export const getHash = (str: string): string => {
  return CryptoJS.SHA1(str).toString()
}
