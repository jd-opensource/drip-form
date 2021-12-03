const styleLoader = require('./plugins/styleLoader')
const path = require('path')

module.exports = {
  title: 'Drip-Form',
  tagline: '基于 React 和 JsonSchema 的动态表单解决方案',
  url: 'https://jdfed.github.io/',
  baseUrl: '/drip-form/',
  onBrokenLinks: 'throw',
  favicon:
    'https://storage.360buyimg.com/imgtools/7e0e546a96-d962c880-f9a2-11eb-bf08-d585041b7c80.svg',
  organizationName: 'drip-form', // Usually your GitHub org/user name.
  projectName: 'drip-form', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Drip-Form',
      logo: {
        alt: 'drip-form Logo',
        src: 'https://storage.360buyimg.com/imgtools/7e0e546a96-d962c880-f9a2-11eb-bf08-d585041b7c80.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'right',
        },
        { to: 'faq', label: '常见问题', position: 'right' },
        {
          href: 'https://github.com/JDFED/drip-form',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: '文档',
          items: [
            {
              label: '开始',
              to: 'docs/start/install',
            },
            {
              label: 'API',
              to: 'docs/use/unitedSchema',
            },
            {
              label: '组件',
              to: 'docs/components/cascaderField',
            },
            {
              label: '进阶',
              to: 'docs/expert/formdata',
            },
          ],
        },
        {
          title: '推荐',
          items: [
            {
              label: 'MicroApp',
              href: 'https://zeroing.jd.com/micro-app/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '常见问题',
              to: 'faq/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/JDFED/drip-form',
            },
            {
              label: 'issues',
              href: 'https://github.com/JDFED/drip-form/issues/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JD JMFE.  All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: 'background',
          // path: require.resolve('./docs'),
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/JDFED/drip-form/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/JDFED/drip-form/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, 'plugins/runtime-plugin'),
    // path.resolve(__dirname, './plugins/styleLoader')
  ],
}
