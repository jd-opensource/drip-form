import React, { useEffect } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    feature: '语义化',
    desc: '简洁高效的JSON协议使得表单结构更加清晰，更有助于开发者阅读和理解，能够有效降低开发和维护成本。',
    imgurl:
      'https://m.360buyimg.com/babel/jfs/t1/137903/4/23517/13776/618e2fdbEb411a7b2/d7cb5f13dacd2f9e.png!q20.webp',
    link: 'docs/use/unitedSchema',
  },
  {
    feature: '校验一体化',
    desc: (
      <>
        前后端校验一体化，更具保障能力，Drip-Form的检验基于
        <a href="https://ajv.js.org/">AJV</a>，
        无需将数据验证和清理逻辑编写为冗长的代码，只需要将校验的JSONSchema维护在Drip-Form的JSON文件中，
        就可以享受极具保障力的快速校验功能。
      </>
    ),
    imgurl:
      'https://m.360buyimg.com/babel/jfs/t1/205341/32/15002/47336/618e2fe0Ea4216011/03c8f109ccd1f583.png!q20.webp',
    link: 'docs/use/onValidate',
  },
  {
    feature: '可扩展',
    desc: `支持二次开发，可扩展自定义组件集、校验集。对于业务开发中的特殊组件、
           主题或者校验机制，Drip-Form提供了插件扩展接口，可进行自定义开发满足业务需求。
          `,
    imgurl:
      'https://m.360buyimg.com/babel/jfs/t1/205544/27/15297/13457/618e2fe9E543aa34b/47a00e8d6322a2c2.png!q20.webp',
    link: 'docs/expert/customTheme',
  },
  {
    feature: '自动化',
    desc: `表单界面由JSON数据自动生成，表单中的组件、样式、表单项之间的交互和校验逻辑等都由JSON文件维护；
           Drip-Form以数据为核心驱动，开发人员只需要关注数据层便可配置满足业务需求的表单。
         `,
    imgurl:
      'https://m.360buyimg.com/babel/jfs/t1/216709/33/4211/31064/618e11e1E35c025f5/e5b5d119518a826e.png!q20.webp',
    link: 'docs/expert/automatic',
  },
  {
    feature: '使用示例',
    desc: `维护JSON数据层，即可实现表单的高度自定义，搭配可视化表单生成器等工具可进一步降低开发和维护成本；
           此外，支持联动、校验、嵌套能力，灵活化程度高；表单组件和样式支持自定义扩展，可满足普遍的业务需求。`,
    imgurl:
      'https://m.360buyimg.com/babel/jfs/t1/220991/23/2317/345227/617bc017E8450f570/dc8a7066180ea370.png',
    isImg: true,
  },
]

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  useEffect(() => {
    window.addEventListener('scroll', animateLoadThrottle)
    return () => {
      window.removeEventListener('scroll', animateLoadThrottle)
    }
  }, [])

  const animateLoad = () => {
    let count = 0
    const imgs = document.getElementsByClassName('animate')
    if (count >= imgs.length) {
      window.removeEventListener('scroll', animateLoadThrottle)
    }

    for (let i = count; i < imgs.length; i++) {
      const img = imgs[i]
      const { top } = img.getBoundingClientRect()
      if (top > document.documentElement.clientHeight + 100) {
        break
      }
      img.classList.add('loading')
      count++
      if (count >= imgs.length) {
        window.removeEventListener('scroll', animateLoadThrottle)
      }
    }
  }

  function throttle(fn, delay = 1000) {
    var prev = Date.now()
    return function () {
      var context = this
      var args = arguments
      var now = Date.now()
      if (now - prev >= delay) {
        fn.apply(context, args)
        prev = Date.now()
      }
    }
  }

  const animateLoadThrottle = throttle(animateLoad, 1000)

  return (
    <Layout>
      <div className={styles.box}>
        <header className={styles.header}>
          <div className={styles.container}>
            <div>
              <div className={styles.title}>{siteConfig.title}</div>
              <p className={styles.tagline}>基于React和JsonSchema的</p>
              <p className={clsx(styles.tagline, styles.subline)}>
                动态表单解决方案
              </p>
            </div>
            <div className={styles.buttons}>
              <Link to={useBaseUrl('docs/')} className={styles.start}>
                Get Started
              </Link>
            </div>
          </div>
          <img
            className={styles.mac}
            src="http://m.360buyimg.com/babel/jfs/t1/169605/10/22697/469965/617bdbe7Ef9daf337/42eb203310a85ae5.png"
          />
        </header>
        <main>
          {features?.length > 0 && (
            <>
              {features.map((item, index) => {
                return (
                  <section
                    className={styles.features}
                    key={index}
                    style={{ flexDirection: index % 2 ? 'row' : 'row-reverse' }}
                  >
                    <div className={styles.wordContainer}>
                      <div className={styles.featuretitle}>{item.feature}</div>
                      <div className={styles.featureitem}>{item.desc}</div>
                      {item.link && (
                        <div className={styles.buttons}>
                          <Link
                            to={useBaseUrl(item.link)}
                            className={styles.start}
                          >
                            立即了解
                          </Link>
                        </div>
                      )}
                    </div>
                    <div
                      className={styles.piccontainer}
                      style={{
                        justifyContent: index % 2 ? 'flex-end' : 'flex-start',
                      }}
                    >
                      <div className="animate">
                        {item?.isImg ? (
                          <img className={styles.demoImage} src={item.imgurl} />
                        ) : (
                          <div className={styles.featureimgbg}>
                            <img
                              className={styles.featureImage}
                              src={item.imgurl}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                )
              })}
            </>
          )}
        </main>
      </div>
    </Layout>
  )
}

export default Home
