
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'

class Demo2 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.tableModel = new cb.models.ReferModel({
            cRefType:'ucf-staff-center.bd_staff_ref',
            text:'冯青平',
            multiple:false,
            displayname:'name',
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
    render(){
        return(
            <Card
                title="（表）人员参照-初始值"
                codeText={''}
                footer={'' }
            >
                <MdfRefer modelName={'refer'} model={this.tableModel} config={this.config}></MdfRefer>
            </Card>
        )
    }
}
export default Demo2;