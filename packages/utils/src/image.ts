/**
 * 将二进制流数据转成base64格式的数据
 *
 * @param file
 */
export function binaryData2Blob(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = function() {
      resolve(this.result)
    }
    reader.onerror = function(err) {
      reject(err)
    }
  })
}

/**
 * 将base64g格式的图片地址转成img图片对象
 *
 * @param {string} imgBase64Url
 */
export function getImgEl(imgBase64Url: string): Promise<GlobalEventHandlers> {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = function() {
      resolve(this)
    }
    img.onerror = function(err) {
      reject(err)
    }
    img.src = imgBase64Url
  })
}
