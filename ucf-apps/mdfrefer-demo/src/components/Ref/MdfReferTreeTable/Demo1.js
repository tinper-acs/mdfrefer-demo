
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'

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
    render(){
        return(
            <Card
                title="（树表）物料参照"
                codeText={''}
                footer={'' }
            >
                <MdfRefer modelName={'refer'} model={this.modelOrg} config={this.config}></MdfRefer>
            </Card>
        )
    }
}
export default Demo1;