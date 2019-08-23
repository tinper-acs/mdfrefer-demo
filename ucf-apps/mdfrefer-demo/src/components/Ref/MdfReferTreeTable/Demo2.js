
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Button} from 'tinper-bee';

class Demo2 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.modelOrg = new cb.models.ReferModel({
            cRefType:'productcenter.pc_nomalproductref',
             displayname:'code',
            
            text:'xjg-物料'
           
        });
        this.config = {
            modelconfig:{
                afterOkClick:this.afterOkClick,//与上面不能同时存在
            }
        }
    }
    afterOkClick = (data) =>{
        console.log('MdfReferTree-Demo2-afterOkClick', (data))
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
                title="（树表）物料参照-初始值"
                codeText={''}
                 footer={this.footer()}
            >
                <MdfRefer modelName={'refer'} model={this.modelOrg} config={this.config}></MdfRefer>
            </Card>
        )
    }
}
export default Demo2;