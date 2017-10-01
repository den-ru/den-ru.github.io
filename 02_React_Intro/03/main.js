const IMG_URL = 'http://lorempixel.com/400/200/abstract/';
const FlipCard = React.createClass({
    getInitialState() {
        return {
            cardFliped: false,
        };
    },
    handlerClickCard() {
        this.setState({
            cardFliped: !this.state.cardFliped
        })
    },
    getCardBgclr() {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    },
    getCardImg() {
        return (this.state.cardFliped)?IMG_URL+'?'+Math.random():IMG_URL;
    },
    render() {
        let flipClass = "card";
        flipClass += this.state.cardFliped?" fliped":"";
        const frontStyles = {background: `url(${this.getCardImg()})`};
        const backStyles = {background: `${this.getCardBgclr()}`};

        return (
            <div>
                <div className={flipClass} onClick={this.handlerClickCard}>
                    <div className="flipCard">
                        <div className="front" style={frontStyles}></div>
                        <div className="back" style={backStyles}></div>
                    </div>
                </div>
            </div>
        )
    }
});


ReactDOM.render(
    <FlipCard />,
    document.getElementById('root')
);
