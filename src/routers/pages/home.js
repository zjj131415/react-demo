import React from 'react'

class Item extends React.Component {
    render() {
        let {title, text, timer, img} = this.props;
        return (
            <div className="item-block">
                <div className="item-photo">
                    <img src={img} alt=""/>
                </div>
                <div className="item-info">
                    <div className="">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                    <div>{timer}</div>
                </div>
            </div>
        )
    }
}

export class Home extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            infor: [
                {
                    text: 'hehe',
                    img: '',
                    title: 'hahaha',
                    timer: '2016-4-5'
                }
            ]
        }
    }
    componentWillMount() {
    }
    render() {
        return (
            <div className="layout-home">
                <div className="block-container">
                    {
                        this.state.infor.map((item, index) => (
                            <Item key={index}
                                  title={item.title}
                                  text={item.text}
                                  img={item.img}
                                  timer={item.timer} />
                        ))
                    }
                </div>
            </div>
        )
    }
}