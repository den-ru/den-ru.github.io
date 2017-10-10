const DX = 150;
const Universe = React.createClass({
    getInitialState() {
        console.log('New Singularity!');
        return {
            width: 10,
            height: 10,
        }
    },
    componentDidMount(){
        const endOfAll = document.getElementById('nothing');
        endOfAll.style.height = endOfAll.offsetHeight+'px';
        endOfAll.style.width = endOfAll.offsetWidth+'px';
    },
    handlerDivineTouch() {
        let {width, height} = this.getInitialState();
        if (window.outerWidth > this.state.width + DX
                &&
            window.outerHeight > this.state.height + DX) {
                        width = this.state.width + DX;
                        height = this.state.height + DX;
                        console.log(width, height);
                    };
            this.setState({
                width: width,
                height: height
            })
    },
    render() {
        return (
            <div>
                <div onClick={this.handlerDivineTouch} className="universe"
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }}></div>
            </div>
        )
    }
});

ReactDOM.render(
    <Universe />,
    document.getElementById('nothing')
);
