import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const peee = [
    {id: 0, name: 'zjj', frends: [1,2,3]},
    {id: 1, name: 'fyy', frends: [0,2,3]},
    {id: 2, name: 'yy', frends: [0,1]},
    {id: 3, name: 'love', frends: [0,2] }
];

let find = id => peee.find(item => item.id == id);

const Hahe = () => (
    <Router>
        <Persion match={{params: {id: 0}, url: ''}}/>
    </Router>
);

const Persion = ({match}) => {
    let data = find(match.params.id);
    return (
        <div>
            <h3>{data.name + '的朋友'}</h3>
            {
               data.frends.map(index => (
                   <p key={index}>
                       <Link to={`${match.url}/${index}`}>
                           {find(index).name}
                       </Link>
                   </p>
               ))
            }
            <Route path={`${match.url}/:id`} component={Persion}/>
        </div>
    )
};

ReactDOM.render(
    <Hahe/>,
    document.getElementById('root')
);