import  React,{Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props);
        this.setState={
            displayflag:false
        };
        this.clickShow=this.clickShow.bind(this);
    };

    clickShow(){
        this.setState({
            displayflag:!this.state.displayflag
        });
    }
    renderI(){
        let showDiv={
            displayflag:this.state.displayflag?"block":"none"
        };
        return(
            <div>
                {this.props.name}
                <div className="btn" onClick={this.clickShow}>按钮</div>
                <div className="hides" style={showDiv}>内容</div>
            </div>
        )
    }

}
export default Header;