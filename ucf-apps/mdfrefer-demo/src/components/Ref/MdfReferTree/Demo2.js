
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'

class Demo2 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.modelOrg = new cb.models.ReferModel({
            cRefType:'ucf-org-center.bd_adminorgtreeviewref',
            displayname:'name',
            valueField:'id',
            text:'eflong-all   eflong-all'
           
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
    render(){
        return(
            <Card
                title="（树）组织参照-初始值"
                codeText={''}
                footer={'' }
            >
                <MdfRefer modelName={'refer'} model={this.modelOrg} config={this.config}></MdfRefer>
            </Card>
        )
    }
}
export default Demo2;