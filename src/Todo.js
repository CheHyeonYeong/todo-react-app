import React from "react";

import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core"
import { DeleteOutlineOutlined } from "@material-ui/icons/DeleteOutlineOutlined";
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item : props.item,
            readOnly:true
        };
        this.delete=props.delete;
    }
    deleteEventHandler = () =>{
        //app.js에서 실제로 작용 -> delete는 app.js에서 해야 함
        this.delete(this.state.item)
        //여기서 delete 함수는 app.js에서 전달받은 함수이다.
    };
    offReadOnlyMode=()=>{
        this.setState({readOnly:false},()=>{
            console.log("ReadOnly?", this.state.readOnly)
        });
    };

    editEventHandler=(e)=>{
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        thisItem.setState({item:thisItem});
    };
    enterkeyEventHandler = (e) =>{
        if(e.key ==="Enter") {
            this.setState({readOnly: true});
        }
    };
    checkboxEventHandler = ()=>{
        const thisItem = this.state.item;
        thisItem.done= !thisItem.done;
        this.setState({item:thisItem});
    };
    render(){
        const item= this.state.item;
        return(
            <ListItem>
                <Checkbox checked={item.done}
                    onChange={this.checkboxEventHandler} />
                <ListItemText>
                    <InputBase 
                        inputProps={{
                            "aria-label": "naked",
                            readOnly : this.state.readOnly,
                        }}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline = {true}
                        fullWidth = {true}
                        onClick={this.offReadOnlyMode}
                        onChange={this.editEventHandler}
                        onKeyPress={this.enterkeyEventHandler}
                    />

                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={this.deleteEventHandler}>
                        <DeleteOutlineOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}
export default Todo;