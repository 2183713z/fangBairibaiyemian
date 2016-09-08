import React, { PropTypes } from 'react'
class  Card extends React.Component {
  render () {
    let styles={
      root:{
        width:'100%',
        height:'100px',
        maxWidth:'760px',
        backgroundColor:'#F44336',
        margin:'0 auto',
        marginTop:'20px',
        boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px'
      },
      left:{
        float:'left',
        width:'12%',
        height:'100px',
        lineHeight:'100px',
        backgroundColor:'#2196F3',
        fontWeight:'700',
        fontSize:'1.8em',
        textAlign:'center',
        color:'#fff'
      },
      right:{
        width:'88%',
        padding:'10px',
        color:'#aa00ff',
        float:'left'
      }
    }
    return (
      <div style={styles.root}>
        <div style={styles.left}>
          <span>{this.props.index}</span>
        </div>
        <div style={styles.right}>
          <h3 style={{marginBottom:'10px'}}>{this.props.title}</h3>
          <p style={{marginTop:'20px'}}>{this.props.date}</p>
        </div>
      </div>
    )
  }
}

//方法2：
// class  Card extends React.Component {
//   render () {
//     // console.log(this.props);
//     let styles={
//       root:{
//         width:'100%',
//         height:'100px',
//         maxWidth:'760px',
//         backgroundColor:'#F44336',
//         margin:'0 auto',
//         marginTop:'20px',
//         boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px'
//       },
//       left:{
//         float:'left',
//         width:'12%',
//         height:'100px',
//         lineHeight:'100px',
//         backgroundColor:'#2196F3',
//         fontWeight:'700',
//         fontSize:'1.8em',
//         textAlign:'center',
//         color:'#fff'
//       },
//       right:{
//         width:'88%',
//         padding:'10px',
//         color:'#aa00ff',
//         float:'left'
//       }
//     }
//     let xxx=this.props.item;
//     let cards=xxx.map( (item,i) =>
//       (
//         <div style={styles.root} key={i}>
//           <div style={styles.left}>
//             <span>{item.index}</span>
//           </div>
//           <div style={styles.right}>
//             <h3 style={{marginBottom:'10px'}}>{item.title}</h3>
//             <p style={{marginTop:'20px'}}>{item.date}</p>
//           </div>
//         </div>
//       )
//   )
//     return (
//       <div>
//         {cards}
//       </div>
//     )
//   }
// }


Card.defaultProps={
  title:'请输入标题',
  date:'2016-8-12',
  index:1
}
Card.propTypes={
  title:PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
  index:PropTypes.number.isRequired,
}
export default Card;
