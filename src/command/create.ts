import { input, select } from '@inquirer/prompts';
import path from 'path'
import fs from 'fs-extra'
import { log } from '../utils/log';
import { clone } from '../utils/clone';

export interface TemplateInfo {
    name: string;
    downloadUrl: string;
    description: string;
    branch: string;
}

export const templates: Map<string, TemplateInfo> = new Map([
    ["Vite4-vue3-Typescript-template", {
        name: "admin-template",
        downloadUrl: "git@gitee.com:sohucw/admin-pro.git",
        description: "vue3技术开发模板",
        branch: "dev6"
    }]
])

export default async function create(projectName: string) {
    if(!projectName) projectName = await input({message: "请输入项目名称"})

    const filePath = path.resolve(process.cwd(), projectName)

    if(fs.existsSync(filePath)) {
        const run = await isOverWrite(projectName)
        if(run) {
            await fs.remove(filePath)
        }else {
            return
        }
    }

    const templateList = [...templates.entries()].map((item: [string, TemplateInfo]) => {
        const [name, info] = item;

        return {
            name,
            value: name,
            description: info.description
        }
    })

    const templateName = await select({
        message: '请选择需要的模板',
        choices: templateList
    })

    const gitRepoInfo = templates.get(templateName)
    if(gitRepoInfo) {
        await clone(gitRepoInfo.downloadUrl, projectName, ['-b', `$${gitRepoInfo.branch}`])
    }else {
        log.error(`${templateName}模板不存在`)
    }
}

export const isOverWrite = async (fileName: string) => {
    return select ({
        message: "是否覆盖文件",
        choices: [
            {name: '覆盖', value: true},
            {name: '取消', value:false}
        ]
    })
}