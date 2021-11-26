const fs = require('fs')
const path = require('path')
const execa = require('execa')
const chalk = require('chalk')
const ignoreDir = ['.DS_Store']
const toAddPackage = []
const packagesPath = path.resolve(__dirname, '../../packages/')
const files = fs.readdirSync(packagesPath)
const owners = process.argv.slice(2)
const { log } = console

if (owners.length === 0) {
  log(chalk.red('最少一个erp用户'))
  process.exit(1)
}

files.map((item) => {
  if (!ignoreDir.includes(item)) {
    try {
      const packageJsonPath = path.join(packagesPath, item, 'package.json')
      const name = require(packageJsonPath).name
      toAddPackage.push(name)
    } catch (error) {
      log.error(`${packageJsonPath}不存在`)
    }
  }
})

try {
  toAddPackage.map((name) => {
    owners.map(async (owner) => {
      await execa('npm', ['owner', 'add', owner, name])
      log(name, owner)
    })
  })
} catch (error) {
  process.exit(1)
}
