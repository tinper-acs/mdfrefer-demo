
import React, { Component } from "react";
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'

class Demo1 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.tableModel = new cb.models.ReferModel({
            cRefType:'ucf-staff-center.bd_staff_ref',
            multiple:false,
            displayname:'name',
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
    render(){
        return(
            <Card
                title="（表）人员参照"
                codeText={''}
                footer={'' }
            >
                <MdfRefer modelName={'refer'} model={this.tableModel} config={this.config}></MdfRefer>
            </Card>
        )
    }
}
export default Demo1;