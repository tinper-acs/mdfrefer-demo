/**
 *
 * @title mdf-refer基础使用3
 * @description 参照的级联功能
 *
 */
import React, { Component } from 'react';
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Button} from 'tinper-bee';

const codeText = `
/**
 *
 * @title mdf-refer基础使用3
 * @description 参照的级联功能
 *
 */
import React, { Component } from 'react';
import Card from '../Card';
import MdfRefer,{cb} from '@yonyou/mdf-refer'
import {Button} from 'tinper-bee';
class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:{},
            selectedKeys:[],
        }
        this.model = new cb.models.ReferModel({
            cRefType:'ucf-org-center.bd_adminorgtreeviewref',
            multiple:true,
             displayname:'code',
            
        });
        this.model2 = new cb.models.ReferModel({
            cRefType:'ucf-staff-center.bd_staff_ref',
            multiple:false,
             displayname:'code',
        });
        this.config={
            modelconfig:{
                afterValueChange:this.afterValueChange
            }
        }
    }
    
    componentDidMount(){
    }
    componentDidUpdate(){
    }
    componentWillReceiveProps(nextProps){
    }
    afterValueChange = (data) =>{
        console.log('MdfReferJiLian-Demo2-afterValueChange', (data))
        let {value} = data;
        let simpleVOs = [];
        if(Array.isArray(value)){
            value.forEach((item)=>{
                let  newObj = {};
                newObj.field = 'mainJobList.org_id';
                newObj.op = 'in';
                newObj.value1 = item.id;
                simpleVOs.push(newObj)
            })
            this.model2.setFilter({
                "isExtend":true,
                "simpleVOs":simpleVOs
            })
        }else if(Object.prototype.toString.call(value) === "[object Object]"){
            let  newObj = {};
            newObj.field = 'mainJobList.org_id';
            newObj.op = 'eq';
            newObj.value1 = value.id;
            simpleVOs.push(newObj);
            this.model2.setFilter({
                "isExtend":true,
                "simpleVOs":simpleVOs
            })
        }else{
            //点叉号清空操作
            this.model2.setFilter({
            })
        }
        
       
    }
    render () {
       
        return (
            <div
            >
                <label>组织树</label> 
                <MdfRefer 
                    modelName={'refer'} model={this.model}   config={this.config} 
                /> 
               <label>人员表格</label> 
               <MdfRefer 
                    modelName={'refer'} model={this.model2} 
                /> 
              
            </div>
         )
    }
}

export default Demo2;
`
class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:{},
            selectedKeys:[],
        }
        this.model = new cb.models.ReferModel({
            cRefType:'ucf-org-center.bd_adminorgtreeviewref',
            multiple:true,
             displayname:'code',
            
        });
        this.model2 = new cb.models.ReferModel({
            cRefType:'ucf-staff-center.bd_staff_ref',
            multiple:false,
             displayname:'code',
        });
        this.config={
            modelconfig:{
                afterValueChange:this.afterValueChange
            }
        }
    }
    
    componentDidMount(){
    }
    componentDidUpdate(){
    }
    componentWillReceiveProps(nextProps){
    }
    afterValueChange = (data) =>{
        console.log('MdfReferJiLian-Demo2-afterValueChange', (data))
        let {value} = data;
        let simpleVOs = [];
        if(Array.isArray(value)){
            value.forEach((item)=>{
                let  newObj = {};
                newObj.field = 'mainJobList.org_id';
                newObj.op = 'in';
                newObj.value1 = item.id;
                simpleVOs.push(newObj)
            })
            this.model2.setFilter({
                "isExtend":true,
                "simpleVOs":simpleVOs
            })
        }else if(Object.prototype.toString.call(value) === "[object Object]"){
            let  newObj = {};
            newObj.field = 'mainJobList.org_id';
            newObj.op = 'eq';
            newObj.value1 = value.id;
            simpleVOs.push(newObj);
            this.model2.setFilter({
                "isExtend":true,
                "simpleVOs":simpleVOs
            })
        }else{
            //点叉号清空操作
            this.model2.setFilter({
            })
        }
        
       
    }
    render () {
       
        return (
            <Card
                title="级联-组织人员-多选"
                codeText={codeText}
                 footer={''}
            >
                <label>组织树</label> 
                <MdfRefer 
                    modelName={'refer'} model={this.model}   config={this.config} 
                /> 
               <label>人员表格</label> 
               <MdfRefer 
                    modelName={'refer'} model={this.model2} 
                /> 
              
            </Card>
         )
    }
}

export default Demo2;