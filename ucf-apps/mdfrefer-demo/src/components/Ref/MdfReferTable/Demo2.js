
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Button} from 'tinper-bee';

const codeText = `

import React, { Component } from "react";
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Button} from 'tinper-bee';
class Demo2 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.tableModel = new cb.models.ReferModel({
            cRefType:'ucf-staff-center.bd_staff_ref',
            text:'冯青平',
            multiple:false,
             displayname:'code',
        });
        this.config = {
            modelconfig:{
                afterOkClick:this.afterOkClick,//与上面不能同时存在
            }
        }
    }
    afterOkClick = (data) =>{
        console.log('MdfReferTable-Demo2-afterOkClick', (data))
    }
    footer = () =>{
        let _this = this;
        function getValue(){
            return('参照选中值'+_this.tableModel._get_data("text")+'\n完整数据'+JSON.stringify(_this.tableModel._get_data('select')))
        }
        return(
            <Button colors="primary" onClick={()=>{alert(getValue())}}>
                提交
            </Button>
        )
    }

render(){
        return(
            <div
            >
                <MdfRefer modelName={'refer'} model={this.tableModel} config={this.config}></MdfRefer>
            </div>
        )
    }
}
export default Demo2;
`
class Demo2 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.tableModel = new cb.models.ReferModel({
            cRefType:'ucf-staff-center.bd_staff_ref',
            text:'冯青平',
            multiple:false,
             displayname:'code',
        });
        this.config = {
            modelconfig:{
                afterOkClick:this.afterOkClick,//与上面不能同时存在
            }
        }
    }
    afterOkClick = (data) =>{
        console.log('MdfReferTable-Demo2-afterOkClick', (data))
    }
    footer = () =>{
        let _this = this;
        function getValue(){
            return('参照选中值'+_this.tableModel._get_data("text")+'\n完整数据'+JSON.stringify(_this.tableModel._get_data('select')))
        }
        return(
            <Button colors="primary" onClick={()=>{alert(getValue())}}>
                提交
            </Button>
        )
    }

render(){
        return(
            <Card
                title="（表）人员参照-初始值"
                codeText={codeText}
                 footer={this.footer()}
            >
                <MdfRefer modelName={'refer'} model={this.tableModel} config={this.config}></MdfRefer>
            </Card>
        )
    }
}
export default Demo2;