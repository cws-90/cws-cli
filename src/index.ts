
import { Command } from "commander";
import { version } from "../package.json"

const program = new Command('dawei')
program.version(version, '-v, --version')

program.command('create').
description('创建一个项目').
argument('[name]', '项目名称').
action((name) => {
    if(name) {
        console.log(`create ${name}`)
    }else {
        console.log(`create command`)
    }
})

program.parse()