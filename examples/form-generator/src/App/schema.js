// export default {
//   validateTime: 'submit',
//   type: 'object',
//   ui: {
//     title: {
//       verticalAlign: 'top',
//       width: 150,
//     },
//     footer: {
//       justifyContent: 'right',
//       margin: 10,
//       onOk: {
//         text: '保存',
//         type: 'primary',
//         size: 'middle',
//         shape: 'squash',
//       },
//       onCancel: {
//         text: '重置',
//         type: 'default',
//         size: 'middle',
//         shape: 'squash',
//       },
//     },
//   },
//   theme: 'antd',
//   schema: [
//     {
//       type: 'array',
//       title: '数组容器',
//       ui: {
//         type: 'array',
//         mode: 'normal',
//       },
//       items: [
//         {
//           validateTime: 'submit',
//           type: 'object',
//           title: '对象容器',
//           ui: {
//             type: 'object',
//           },
//           schema: [
//             {
//               validateTime: 'submit',
//               type: 'string',
//               title: '输入框',
//               ui: {
//                 type: 'text',
//               },
//             },
//             {
//               validateTime: 'submit',
//               type: 'string',
//               title: '输入框',
//               ui: {
//                 type: 'text',
//               },
//             },
//           ],
//         },
//       ],
//       fieldKey: 'array_dk_fFn',
//     },
//   ],
// }

export default {
  validateTime: 'change',
  type: 'object',
  ui: {},
  theme: 'antd',
  schema: [
    {
      validateTime: 'submit',
      type: 'array',
      title: '多选框',
      ui: {
        type: 'checkbox',
      },
      fieldKey: 'checkbox_1MURwO',
    },
  ],
}
