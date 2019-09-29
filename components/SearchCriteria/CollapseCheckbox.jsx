import React, { Component } from 'react';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

//import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
//import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from '@material-ui/core/ListSubheader';


class CollapseCheckbox extends Component {

    state = {
        open: false,
        checkedVals: [],
        list:[
            {
                title:"sdqdqdqdqdqd",
                values:["test","apple","manga","citron"]
        },
            {
                title:"sfmlkkopkmp",
                values:["phone","pc","mac","tv"], 
            }
        ]
    }


    componentDidMount(){
        if(this.props.initState){
            this.setState({
                open: this.props.initState
            })
        }
        //console.log(this.state.list)

    }

    handleClick = () => {
        this.setState({open: !this.state.open})
    }

    handleAngle = () => (
        this.state.open ?
            <ExpandLess />
        : 
            <ExpandMore />
            
    )

    renderList = () => (
        
        this.state.list ?
            this.state.list.map((value,ind)=>(
                //console.log(value),
                
                <ListItem key={ind} style={{padding:'10px 0'}}>
                    <ListItemText primary={value.values}/>
                    <ListItemSecondaryAction>
                        <Checkbox
                            color="primary"
                            onChange={this.handleToggle(value.values.ind)}
                            checked={this.state.checked.indexOf(value.values) !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                ))
        :null
    )


    handleToggle = (event) => () => {
        const { checkedVals } = this.state;
        //const currentIndex = checked.indexOf(value);
        const newChecked = [...checkedVals];
        
        if(checked ){
            newChecked.push(event.target.name)
        } else{
            newChecked.splice(1,1)
        }

        this.setState({
            checkedVals: newChecked
        })       
    }
    handleChange = event => {
        //this.props.handleFilters(event.target.value)
        this.setState({checked: (!event.target.checked)})
    }
    render() {
        const {list,open}=this.state
        return (
            <div className="collapse_items_wrapper">
                {list.map((head,index) => (
                    <List style={{  }}>
                        <ListItem  key={index}  onClick={this.handleClick}  style={{width:'auto' }}>
                            <ListItemText
                                primary={head.title}
                                className="collapse_title"
                            />
                            {this.handleAngle()}
                        </ListItem>

                    <List>
                    {head.values.map(val => (
                        <Collapse in={open} timeout="auto" unmountOnExit >
                            <ListItem  style={{padding:'0',borderBottom: '0px solid #dbdbdb'}} >
                                <ListItemText
                                    //onClick={this.handleClick}
                                    primary={val}
                                    className="collapse_title"
                            />
                            <ListItemSecondaryAction>
                            <Checkbox
                                color="primary"
                                onChange={(event)=>this.handleToggle(event)}
                                checked={(event)=>this.handleChange(event)}
                            />

                            </ListItemSecondaryAction>
                            </ListItem>
                         </Collapse>


                ))}
                </List>
                            </List>

            ))}

                 
    </div>
        );
    }
}

export default CollapseCheckbox;