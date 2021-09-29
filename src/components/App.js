import React from 'react';
import './App.css';
import POST_IMG from '../img-1.png'
import Faker from 'faker';


import Post from './Post';

function getRandomPostTime() {
    return (Math.floor(Math.random() * 10) + 1) + 'h';
}

const App = (props) => {




    return (
        <div>
            <Post avatar={Faker.internet.avatar()} username="mjm" image={POST_IMG} caption="this is first caption" time="5h ago"
            comments={[
                {
                    username:Faker.internet.userName() ,
                    comment:Faker.lorem.words(10),
                    time: getRandomPostTime(),
                    avatar: Faker.internet.avatar(),
                    "is-like": Faker.datatype.boolean(),
                },
                {
                    username:Faker.internet.userName() ,
                    comment:Faker.lorem.words(10),
                    time: getRandomPostTime(),
                    avatar: Faker.internet.avatar(),
                    "is-like": Faker.datatype.boolean(),
                },
                {
                    username:Faker.internet.userName() ,
                    comment:Faker.lorem.words(10),
                    time: getRandomPostTime(),
                    avatar: Faker.internet.avatar(),
                    "is-like": Faker.datatype.boolean(),
                },
                
            ]}
            />
            <Post avatar={Faker.internet.avatar()} username="ali" image={Faker.image.image()} caption="this is second caption" time="3h ago"
            comments={[
                {
                    username:Faker.internet.userName() ,
                    comment:Faker.lorem.words(10),
                    time: getRandomPostTime(),
                    avatar: Faker.internet.avatar(),
                    "is-like": Faker.datatype.boolean(),
                },
            ]}
            />
        </div>
    );
}

export default App;