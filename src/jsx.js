/**
 * Created by Administrator on 2016/12/26.
 */

import "babel-polyfill";
console.log(Array.from('aaa'));
import React,{Component} from 'react';
class DemoComponent extends  Component{
    render(){
        return <h1>Hello World!</h1>
    }
}