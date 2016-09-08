import React, { PropTypes } from 'react'


let arr=[
  '我会吃1','我会玩2','我会睡3','我会看视频4','我还会花钱5',
  '我会吃11','我会玩2','我会睡3','我会看视频4','我还会花钱5',
  '我会吃1','我会玩2','我会睡3','我会看视频4','我还会花钱5',
  '我会吃1','我会玩2','我会睡3','我会看视频4','我还会花钱5',
  '我会吃1','我会玩2','我会睡3','我会看视频4','我还会花钱5',
]
class Test extends React.Component {
  constructor(){
    super();
    this.state={
      page:1
    }
  }
  render () {
    // let arr=[
    //   '我会吃1','我会玩2','我会睡3','我会看视频4','我还会花钱5',
    //   '我会吃1','我会玩2','我会睡3','我会看视频4','我还会花钱5',
    //   '我会吃1','我会玩2','我会睡3','我会看视频4','我还会花钱5',
    //   '我会吃1','我会玩2','我会睡3','我会看视频4','我还会花钱5',
    //   '我会吃1','我会玩2','我会睡3','我会看视频4','我还会花钱5',
    // ]
    let showArr=[];
    let num=this.state.page;
    for(let i=num*5;i<(num+1)*5;i++){
      showArr.push(
        arr[i]
      )
    };
    let items=showArr.map( (item,i) => <p key={i}>{item}</p>)
    // let items=arr.map( (item,i) => <p key={i}>{item}</p>)

    return (
      <div>
        {items}
      </div>
    )
  }
}

export default Test;
