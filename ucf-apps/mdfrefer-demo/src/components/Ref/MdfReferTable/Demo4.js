
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Form,Button} from 'tinper-bee';
class Demo4 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.tableModel = new cb.models.ReferModel({
            cRefType:'ucf-staff-center.bd_staff_ref',
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
                title="（表）组织参照-配合bee-form必选项"
                codeText={''}
                footer={this.cardFooter() }
            >
                <MdfRefer modelName={'refer'} model={this.tableModel} config={this.config}
                 {...getFieldProps('table1', {
                    initialValue:'初始值由表格传入',
                    rules: [{
                        required:true,
                        message: '请输入请选择', 
                    }]
                })}
                ></MdfRefer>
                 <span className='error'>{getFieldError('table1')}</span>
            </Card>
        )
    }
}
export default Form.createForm()(Demo4);