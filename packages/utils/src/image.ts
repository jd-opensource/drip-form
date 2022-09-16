/**
 * 将二进制流数据转成base64格式的数据
 *
 * @param file
 */
export function binaryData2Blob(
  file: File
): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = function () {
      resolve(this.result)
    }
    reader.onerror = function (err) {
      reject(err)
    }
  })
}

/**
 * 将base64g格式的图片地址转成img图片对象
 *
 * @param {string} imgBase64Url
 */
export function getImgEl(imgBase64Url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = function () {
      resolve(img)
    }
    img.onerror = function (err) {
      reject(err)
    }
    img.src = imgBase64Url
  })
}

// 尺寸限制
export type ImgDimension = Partial<{
  width: number
  height: number
  minWidth: number
  minHeight: number
  maxWidth: number
  maxHeight: number
  widthDivisor: number
  heightDivisor: number
  widthHeightEqual: boolean
}>
// 大小限制
export type ImgSize = Partial<{
  max: number
  min: number
}>

export async function checkImg({
  file,
  dimension,
  size,
  errMsg,
}: {
  file: File
  dimension?: ImgDimension
  size?: ImgSize
  errMsg?: Partial<{
    dimension: string
    size: string
  }>
}): Promise<{ isOk: boolean; errors: Array<string> }> {
  let isOk: string | boolean = true
  const errors: Array<string> = []
  const {
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    widthDivisor,
    heightDivisor,
    widthHeightEqual,
  } = dimension || {}
  const { max, min } = size || {}
  // 尺寸校验
  try {
    const imgBase64Url = await binaryData2Blob(file)
    if (imgBase64Url) {
      const { naturalHeight, naturalWidth } = await getImgEl(
        imgBase64Url as string
      )

      let count = 0

      width && count++
      minWidth && count++
      maxWidth && count++
      widthDivisor && count++
      height && count++
      minHeight && count++
      maxHeight && count++
      heightDivisor && count++
      widthHeightEqual && count++

      if (width && width === naturalWidth) count--
      if (minWidth && minWidth <= naturalWidth) count--
      if (maxWidth && maxWidth >= naturalWidth) count--
      if (widthDivisor && naturalWidth % widthDivisor === 0) count--

      if (height && height === naturalHeight) count--
      if (minHeight && minHeight <= naturalHeight) count--
      if (maxHeight && maxHeight >= naturalHeight) count--
      if (heightDivisor && naturalHeight % heightDivisor === 0) count--

      if (widthHeightEqual === true && naturalHeight === naturalWidth) count--

      if (count !== 0) {
        errors.push(errMsg?.dimension || '图片尺寸校验未通过')
        isOk = false
      }
    }
  } catch (error) {
    console.error(error)
  }
  // 大小校验
  if ((min && min >= file.size) || (max && max <= file.size)) {
    errors.push(errMsg?.size || '图片大小校验未通过')
    isOk = false
  }
  return { isOk, errors }
}
