
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
        this.modelOrg = new cb.models.ReferModel({
            cRefType:'ucf-org-center.bd_adminorgtreeviewref',
             displayname:'code',
            
           
        });
        this.config = {
            modelconfig:{
                afterValueChange:this.afterValueChange,//与上面不能同时存在
            }
        }
    }
    afterValueChange = (data) =>{
        console.log('MdfReferTree-Demo1-afterValueChange',(data))
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
            <div>
                 {cb.utils.initSupport('refer',this.modelOrg,this.config)}
            </div>
        )
    }
}
export default Demo1;
`
class Demo1 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.modelOrg = new cb.models.ReferModel({
            cRefType:'ucf-org-center.bd_adminorgtreeviewref',
             displayname:'code',
            
           
        });
        this.config = {
            modelconfig:{
                afterValueChange:this.afterValueChange,//与上面不能同时存在
            }
        }
    }
    afterValueChange = (data) =>{
        console.log('MdfReferTree-Demo1-afterValueChange',(data))
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
                title="（树）组织参照-cb.utils.initSupport创建"
                codeText={codeText}
                 footer={this.footer()}
            >
                 {cb.utils.initSupport('refer',this.modelOrg,this.config)}
            </Card>
        )
    }
}
export default Demo1;