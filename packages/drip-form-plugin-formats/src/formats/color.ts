/*
 * 校验颜色、支持rgba、rgb、hex三种颜色
 * @Author: jiangxiaowei
 * @Date: 2021-07-29 12:43:09
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-07-29 17:47:11
 */
type ColorTypes = 'colorRgba' | 'colorRgb' | 'colorHex'
type ColorPattern = Record<ColorTypes, RegExp>

const customPattern: ColorPattern = {
  colorRgba:
    /^[rR][gG][Bb][Aa][(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),[\s]*(0\.\d{1,2}|1|0)?[)]{1}$/,
  colorRgb:
    /^[rR][gG][Bb][(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[)]{1}$/,
  colorHex: /^#[0-9a-fA-F]{6}$/,
}

const color = (data: string): boolean => {
  const { colorRgb, colorRgba, colorHex } = customPattern
  if (/^[rR][gG][Bb]/.test(data) && colorRgb.test(data)) {
    return true
  } else if (/^[rR][gG][Bb][Aa]/.test(data) && colorRgba.test(data)) {
    return true
  } else if (colorHex.test(data)) {
    return true
  }
  return false
}

export default color
