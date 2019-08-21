
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Button} from 'tinper-bee';

class Demo1 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.modelOrg = new cb.models.ReferModel({
            cRefType:'productcenter.pc_nomalproductref',
            displayname:'name',
            valueField:'id',
           
        });
        this.config = {
            modelconfig:{
                afterValueChange:this.afterValueChange,//与上面不能同时存在
            }
        }
    }
    afterValueChange = (data) =>{
        console.log('MdfReferTree-Demo1-afterValueChange', (data))
    }
    footer = () =>{
        let _this = this;
        function getValue(){
            return('参照选中值'+_this.modelOrg._get_data("text")+'\n完整数据'+JSON.stringify(_this.modelOrg._get_data('select')))
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
                title="（树表）物料参照"
                codeText={''}
                 footer={this.footer()}
            >
                <MdfRefer modelName={'refer'} model={this.modelOrg} config={this.config}></MdfRefer>
            </Card>
        )
    }
}
export default Demo1;