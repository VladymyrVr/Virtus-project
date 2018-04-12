import React, { Component } from 'react';

import './Home.css';

//components
import HomeStatisticGraph from "../organisms/HomeStatisticGraph";
import HomeCalendar from "../molecules/HomeCalendar";
import HomeColumnGraph from "../organisms/HomeColumnGraph";
import HomeUsersProjects from "../molecules/HomeUsersProjects";
import InboxMessages from "../molecules/InboxMessages";

class Home extends Component {
    render() {
        return (
            <section className="HomePage">
                <div className="HomeFlexWrapper MarginMiddle">
                    <HomeStatisticGraph/>
                    <HomeUsersProjects/>
                </div>
                <div className="HomeFlexWrapper">
                    <HomeColumnGraph/>
                    <InboxMessages/>
                    <HomeCalendar/>
                </div>
            </section>
        );
    }
}

export default Home;