/**
 * 入口、路由、导入组件样式、渲染页面
 */

import React,{Component} from 'react';
import { render } from 'mirrorx';
import {TreeDemo1,TreeDemo2,TreeDemo3,TreeDemo4} from './components/Ref/MdfReferTree'
import {TableDemo1,TableDemo2,TableDemo3,TableDemo4} from './components/Ref/MdfReferTable'
import {TreeTableDemo1,TreeTableDemo2,TreeTableDemo3,TreeTableDemo4} from './components/Ref/MdfReferTreeTable'
import {JLDemo1,JLDemo2} from './components/Ref/MdfReferJiLian';
// 全局样式
import './app.less';

class MdfReferDemo extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
          <div>
            <h2>树参照</h2>
            <div className={`demo-row `}>
                <div className="demo-col">
                    <TreeDemo1/>
                </div>
                <div className="demo-col">
                    <TreeDemo2/>
                </div>
                <div className="demo-col">
                    <TreeDemo3/>
                </div>
                <div className="demo-col">
                    <TreeDemo4/>
                </div>
            </div>
            <h2>表参照</h2>
            <div className={`demo-row `}>
                <div className="demo-col">
                    <TableDemo1/>
                </div>
                <div className="demo-col">
                    <TableDemo2/>
                </div>
                <div className="demo-col">
                    <TableDemo3/>
                </div>
                <div className="demo-col">
                    <TableDemo4/>
                </div>
            </div>
            <h2>树表参照</h2>
            <div className={`demo-row `}>
                <div className="demo-col">
                    <TreeTableDemo1/>
                </div>
                <div className="demo-col">
                    <TreeTableDemo2/>
                </div>
                <div className="demo-col">
                    <TreeTableDemo3/>
                </div>
                <div className='demo-col'>
                    <TreeTableDemo4/>
                </div>
            </div>
            <h2>级联场景</h2>
            <div className={`demo-row `}>
                <div className="demo-col">
                    <JLDemo1/>
                </div>
                <div className="demo-col">
                    <JLDemo2/>
                </div>
                <div className="demo-col">
                </div>
            </div>
          </div>
        )
    }
}

render(<MdfReferDemo/>, document.querySelector("#app"));