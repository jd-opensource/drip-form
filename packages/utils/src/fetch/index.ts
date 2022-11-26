import { FetchApi, GetApi, PostApi } from './type'

const request = async (url: string, config: RequestInit) => {
  if (!window.fetch) {
    throw '浏览器版本过低'
  }
  try {
    const res = await fetch(url, config)
    if (res.ok) {
      const data = await res.json()
      return data
    } else {
      console.error('请求失败')
    }
  } catch (error) {
    console.error(error)
  }
}

const get: GetApi<unknown> = ({ params, url }) => {
  const { search, origin, hash, pathname } = new URL(url)
  const searchParams = new URLSearchParams(search)
  Object.entries(params).map(([key, value]) => {
    searchParams.set(key, value)
  })
  const newSearchParams = searchParams.toString()
  return request(
    `${origin}${pathname}${
      newSearchParams ? `?${newSearchParams}` : ''
    }${hash}`,
    {
      method: 'GET',
    }
  )
}

const post: PostApi<unknown> = ({ params, url }) => {
  return request(url, {
    method: 'POST',
    body: JSON.stringify(params),
  })
}

export const fetchFn: FetchApi = ({ params: oldParams, url, method }) => {
  const params: Record<string, unknown> = {}
  oldParams.map(({ key, value }) => {
    params[key] = value
  })
  switch (method.toUpperCase()) {
    case 'GET':
      return get({ params, url })
    case 'POST':
      return post({ params, url })
    default:
      throw new Error('不支持改请求类型')
  }
}
