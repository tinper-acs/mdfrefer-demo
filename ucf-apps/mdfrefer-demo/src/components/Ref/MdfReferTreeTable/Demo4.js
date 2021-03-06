
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Form,Button} from 'tinper-bee';
const codeText = `

import React, { Component } from "react";
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Form,Button} from 'tinper-bee';
class Demo4 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.modelOrg = new cb.models.ReferModel({
            cRefType:'productcenter.pc_nomalproductref',
             displayname:'code',
            
           
        });
        this.config = {
            modelconfig:{
                afterValueChange:this.afterValueChange,//与上面不能同时存在
            }
        }
    }
    afterValueChange = (data) =>{
        console.log('MdfReferTree-Demo4-afterValueChange',(data))
    }
    cardFooter = () =>{
        return(
            <Button colors="primary" onClick={
                ()=>{
                    this.props.form.validateFields((err, values) => {
                    if(err){
                        alert(""+JSON.stringify(err));
                        return false;
                    }
                    alert(""+JSON.stringify(values))
                    });
                }
                }>提交</Button>
        )
    }

    render(){
        const { getFieldProps, getFieldError } = this.props.form;
        return(
            <div>
                <MdfRefer modelName={'refer'} model={this.modelOrg} config={this.config}
                 {...getFieldProps('treeTable1', {
                    initialValue:'初始值由表格传入',
                    rules: [{
                        required:true,
                        message: '请输入请选择', 
                    }]
                })}
                ></MdfRefer>
                 <span className='error'>{getFieldError('treeTable1')}</span>
            </div>
        )
    }
}
export default Form.createForm()(Demo4);
`
class Demo4 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.modelOrg = new cb.models.ReferModel({
            cRefType:'productcenter.pc_nomalproductref',
             displayname:'code',
            
           
        });
        this.config = {
            modelconfig:{
                afterValueChange:this.afterValueChange,//与上面不能同时存在
            }
        }
    }
    afterValueChange = (data) =>{
        console.log('MdfReferTree-Demo4-afterValueChange',(data))
    }
    cardFooter = () =>{
        return(
            <Button colors="primary" onClick={
                ()=>{
                    this.props.form.validateFields((err, values) => {
                    if(err){
                        alert(""+JSON.stringify(err));
                        return false;
                    }
                    alert(""+JSON.stringify(values))
                    });
                }
                }>提交</Button>
        )
    }

    render(){
        const { getFieldProps, getFieldError } = this.props.form;
        return(
            <Card
                title="（树表）组织参照-配合bee-form必选项"
                codeText={codeText}
                footer={this.cardFooter() }
            >
                <MdfRefer modelName={'refer'} model={this.modelOrg} config={this.config}
                 {...getFieldProps('treeTable1', {
                    initialValue:'初始值由表格传入',
                    rules: [{
                        required:true,
                        message: '请输入请选择', 
                    }]
                })}
                ></MdfRefer>
                 <span className='error'>{getFieldError('treeTable1')}</span>
            </Card>
        )
    }
}
export default Form.createForm()(Demo4);