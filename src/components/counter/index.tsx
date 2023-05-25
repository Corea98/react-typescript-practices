import React from 'react';

type Props = {};

type State = {
    count: number;
};

class Counter extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            count: 0,
        }

        console.log("Constructor counter executed");
    }

    handleIncreaseCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecreaseCounter = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
        if (this.state.count !== nextState.count) {
            return false;
        }

        return true;
    }

    componentDidMount() {
        console.log("Component counter is mounted");
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log("Component updated", prevState);
    }

    componentWillUnmount() {        
        console.log("Component counter will unmount");
    }

    render() {
        console.log("Rendering the counter");

        return (
            <>
                <p>This is the counter component</p>
                <p>{ this.state.count }</p>

                <button onClick={ this.handleIncreaseCounter }>Increase counter</button>
                <button onClick={ this.handleDecreaseCounter }>Decrease counter</button>
            </>
        )
    }

}

export default Counter;