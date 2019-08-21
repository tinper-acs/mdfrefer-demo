//更新参照，修改参照内字体资源地址
const fs = require('fs-extra');
const exec = require('child_process').exec;

const reg = new RegExp(/\/iconfont\./,'g');

const iconfontPath = '../../static/mdf-refer';

let replaceCmd = 'cp -R node_modules/@yonyou/mdf-refer/dist/* ucf-common/src/static/mdf-refer/';
exec(replaceCmd,error=>{//替换文件
    if(error){
        console.log(`ERROR: copy ERROR! `)
        console.log(error);
    }else{
        console.log(`SUCCESS: copy SUCCESS! `);
        let data = fs.readFileSync(`ucf-common/src/static/mdf-refer/index.css`,'utf-8');  
        data = data.replace(reg,`${iconfontPath}/iconfont.`);
        fs.writeFile('ucf-common/src/static/mdf-refer/index.css', data, (err) => {
            if(err){
                console.log(`ERROR: replace ERROR `)
                console.log(err);
            }else{
                console.log(`SUCCESS:  replace SUCCESS! `);
            }
        });
    }
})




