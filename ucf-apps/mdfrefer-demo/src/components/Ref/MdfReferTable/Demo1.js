
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Button} from 'tinper-bee';

const codeText = `
import React, { Component } from "react";
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Button} from 'tinper-bee';
class Demo1 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.tableModel = new cb.models.ReferModel({
            cRefType:'ucf-staff-center.bd_staff_ref',
            multiple:false,
             displayname:'code',
        });
        this.config = {
            modelconfig:{
                afterValueChange:this.afterValueChange,//与上面不能同时存在
            }
        }
    }
    afterValueChange = (data) =>{
        console.log('MdfReferTable-Demo1-afterValueChange', (data))
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
export default Demo1;s
`
class Demo1 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.tableModel = new cb.models.ReferModel({
            cRefType:'ucf-staff-center.bd_staff_ref',
            multiple:false,
             displayname:'code',
        });
        this.config = {
            modelconfig:{
                afterValueChange:this.afterValueChange,//与上面不能同时存在
            }
        }
    }
    afterValueChange = (data) =>{
        console.log('MdfReferTable-Demo1-afterValueChange', (data))
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
                title="（表）人员参照"
                codeText={codeText}
                 footer={this.footer()}
            >
                <MdfRefer modelName={'refer'} model={this.tableModel} config={this.config}></MdfRefer>
            </Card>
        )
    }
}
export default Demo1;