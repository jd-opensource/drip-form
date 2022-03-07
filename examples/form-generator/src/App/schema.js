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
//     {
//       validateTime: 'submit',
//       type: 'object',
//       title: '上传组件',
//       ui: {
//         type: 'uploader',
//         listType: 'picture',
//         canDrag: false,
//         action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//         dimension: {
//           width: 516,
//           height: 238,
//         },
//       },
//       fieldKey: 'uploader_Ux8m6P',
//     },
//   ],
// }

export default {
  validateTime: 'change',
  type: 'object',
  ui: {},
  theme: 'antd',
}
