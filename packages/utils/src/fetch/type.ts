import { Map } from '../common/type'
export type FetchApi = (args: {
  params: Array<{ key: string; value: string }>
  url: string
  method: 'GET' | 'POST'
}) => Promise<unknown>

export type GetApi<R> = (args: { params: Map; url: string }) => Promise<R>

export type PostApi<R> = (args: { params: Map; url: string }) => Promise<R>
