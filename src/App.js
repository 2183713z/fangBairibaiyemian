import React from 'react'
import Card from './Card'
import data from './data'
class App extends React.Component {
  render () {
    // var cards=data.map( (item,i) => <Card title={item.title} date={item.date} index={item.index} key={i}/>)
    var cards=data.map( (item,i) => <Card{...item} key={i} />);
    return (
      <div>
          {cards}
      </div>
    )
  }
}
//方法2：
// class App extends React.Component {
//   render () {
//     return (
//       <div>
//           <Card item={data} />
//       </div>
//     )
//   }
// }
export default App;
