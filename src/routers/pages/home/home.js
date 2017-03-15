import React from 'react'

class Item extends React.Component {
    render() {
        let {title, text, timer, img} = this.props;
        return (
            <div className="item-block borderB">
                <div className="item-photo">
                    <img src={img} alt=""/>
                </div>
                <div className="item-info">
                    <div className="item-info-detail">
                        <h3 className="info-name">{title}</h3>
                        <p className="info-text">{text}</p>
                    </div>
                    <div className="item-info-tirm">{timer}</div>
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
                    title: '追风少年',
                    img: 'https://avatars.githubusercontent.com/u/18258268',
                    text: '最为一个有情怀的人，总能够写出好文章',
                    timer: '2015:3:$'
                },
                {
                    title: '陌路',
                    img: 'https://avatars.githubusercontent.com/u/18258268',
                    text: '世界那么大，我想去看看',
                    timer: '2016-4-5'
                }
            ]
        }
    }
    componentWillMount() {
        console.log('start')
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