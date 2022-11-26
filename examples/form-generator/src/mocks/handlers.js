import { rest } from 'msw'
export const handlers = [
  rest.post('/postSelectOptions', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [{ label: '1', value: '1' }],
      })
    )
  }),
  rest.get('/getSelectOptions', (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(ctx.status(200), ctx.json([{ label: '1', value: '1' }]))
  }),
]
