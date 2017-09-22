const FlipCard = React.createClass({
    getInitialState() {
        return {
            cardFliped: false,
            url:'http://lorempixel.com/400/200/abstract/',
            image:'http://lorempixel.com/400/200/abstract/',
            bgclr: this.getRandomRgb()
        };
    },
    handlerClickCard() {
        this.setState({
            cardFliped: !this.state.cardFliped
        })
        this.getRandomBg();
    },
    getRandomRgb() {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    },
    getRandomBg() {
        if (this.state.cardFliped)
        this.setState({
            image: this.state.url+'?'+Math.random()
        })
    },
    render() {
        let flipClass = "card";
        flipClass += this.state.cardFliped?" fliped":"";
        const frontStyles = {backgroundImage: `url(${this.state.image})`};
        const backStyles = {background: `${this.state.bgclr}`};
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
