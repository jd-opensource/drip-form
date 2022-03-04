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
  schema: [
    {
      validateTime: 'submit',
      type: 'array',
      title: '数组容器',
      ui: {
        title: {
          verticalAlign: 'top',
        },
        type: 'array',
        mode: 'add',
        addTitle: '添加一行数据',
        hasConfirm: false,
        confirm: {
          confirmTitle: '确定删除这一项？',
          okText: '确定',
          cancelText: '取消',
        },
      },
      items: {
        validateTime: 'submit',
        type: 'object',
        title: '对象容器',
        ui: {
          type: 'object',
          mode: 'collapse',
          active: false,
          title: {
            verticalAlign: 'top',
          },
        },
        schema: [
          {
            validateTime: 'submit',
            type: 'string',
            title: '输入框',
            ui: {
              type: 'text',
              style: {
                width: '100%',
              },
            },
            fieldKey: 'text_-OvHie',
          },
        ],
      },
      fieldKey: 'array_ma1FeP',
    },
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
