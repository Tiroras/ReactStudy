import React from 'react';

class Status extends  React.Component{
    state={
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState(({
                status: this.props.status
            }))
        }
        console.log('component')
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <input
                        onChange={this.onStatusChange}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        autoFocus={true}
                    />
                    :
                    <span
                        onClick={this.activateEditMode}
                    >{this.props.status || 'No status'}</span>
                }
            </div>
        )
    }
}

export default Status;