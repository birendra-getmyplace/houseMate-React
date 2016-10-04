import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import AppBar from 'material-ui/AppBar';
import {red300, red50
} from 'material-ui/styles/colors';

const style = {
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: red50
};

 class Bills extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
      events: []
     }
   }

 render(){
   return (
     <div className='bills'>
     <Paper style={style} zDepth={3} >
        <AppBar title="Upcoming Bills" style={{backgroundColor: red300
}}/>
       <ul>
          {this.props.social_events.map((event, index) =>
            <Checkbox label={event.name}/>)}
       </ul>
     </Paper>
     </div>
   )
 }
 }

 function mapStateToProps(state){
   return {
     social_events: state.events.filter(function(event){
       return event.category === "bill"
     })
   }
 }

 const componentCreator = connect(mapStateToProps)
 export default componentCreator(Bills)