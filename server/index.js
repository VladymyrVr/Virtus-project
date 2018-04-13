const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

let usersList = [{user: 'admin', password: 'admin', id: 1}];

const messages = [
    {
        id: '2',
        developer: {
            name: 'Jolene Slater',
            proff: 'IOS/Android Developer',
            shortInfo: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            mail: 'joleneslater@gmail.com',
            phone: '+48 424 32 69',
            adress: '65 Lorem St, Warsaw, PL',
            company: 'Facebook',
            isOnline: false
        },
        devmessages: [
            {
                time: '4 April 2018 12:01:24',
                message: 'Wow, i have some new tasks for u'
            },
            {
                time: '4 April 2018 13:24:08',
                message: 'No problem, i sent your taks   to private mess'
            },
            {
                time: '4 April 2018 13:31:49',
                message: 'Ok i will finish work at 6 PM.'
            },
            {
                time: '4 April 2018 13:32:58',
                message: 'Can u come to me  know?'
            }
        ],
        usermessages: [
            {
                time: '4 April 2018 12:23:14',
                message: 'Hi,  can u post task in trello, i  will see it later ok?',
                user: true
            },
            {
                time: '4 April 2018 13:28:27',
                message: 'Ok, thx, i saw',
                user: true
            },
            {
                time: '4 April 2018 13:28:29',
                message: 'Maybe we go today play  basketball in evening?',
                user: true
            }
        ],
        isUnread: true
    },
    {
        id: '3',
        developer: {
            name: 'Lyall Roach',
            proff: 'UI/UX designer',
            shortInfo: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            mail: 'lyallroach@gmail.com',
            phone: '+48 123 65 78',
            adress: '24 London Main str',
            company: 'Google',
            isOnline: true
        },
        devmessages: [
            {
                time: '3 April 2018 17:05:21',
                message: 'Sent me icons of  user and password field pls)'
            },
            {
                time: '3 April 2018 17:43:17',
                message: 'Ok thx if i need i will write tomorrow ok?'
            },
            {
                time: '4 April 2018 12:12:14',
                message: 'Hi maybe we go launch together, what do you think? '
            },
        ],
        usermessages: [
            {
                time: '3 April 2018 17:06:48',
                message: 'Ok, i sent) If u need some to redraw in icons write i will help you)',
                user: true
            },
            {
                time: '3 April 2018 17:45:24',
                message: 'without problem)',
                user: true
            },
            {
                time: '4 April 2018 12:14:13',
                message: 'Ok come to me and go)',
                user: true
            }
        ],
        isUnread: false
    },
    {
        id: '1',
        developer: {
            name: 'Michelle Stewart',
            proff: 'Account',
            shortInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
            mail: 'michellestewart@gmail.com',
            phone: '+48 500 400 300',
            adress: '65 Lorem St, Warsaw, PL',
            company: 'Symu.co',
            isOnline: false
        },
        devmessages: [
            {
                time: '5 Apr 2018 16:48:24',
                message: 'Hi, i have some question about task, can u help me to solve it'
            },
            {
                time: '5 April 2018 16:52:53',
                message: 'I can`t get data from API'
            },
            {
                time: '5 April 2018 17:18:41',
                message: 'Oh it`s work thx a lot. Good luck. Bye bye)))'
            }
        ],
        usermessages: [
            {
                time: '5 April 2018 16:51:44',
                message: 'Hi, ok can u tell me more about your problem. Maybe i know how fix it',
                user: true

            },
            {
                time: '5 April 2018 17:12:24',
                message: 'Ok  I understand, first of all u need parse your data to date. U can use moment.js',
                user: true
            },
            {
                time: '5 April 2018 17:19:01',
                message: 'With great pleasure. Bye!',
                user: true
            }
        ],
        isUnread: true
    },
    {
        id: '4',
        developer: {
            name: 'Dominic Lynton',
            proff: 'Front End Dev',
            shortInfo: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
            mail: 'domoniclynton@gmail.com',
            phone: '+48 007 66 60',
            adress: 'Kiev str Chekhova 42',
            company: 'Microsoft',
            isOnline: true
        },
        devmessages: [
            {
                time: '6 April 2018 12:13:58',
                message: 'Hi bro, go pause for coffee i will tell you about my holidays in Germany'
            },
            {
                time: '6 April 2018 12:19:05',
                message: 'Yeah!)'
            },
            {
                time: '7 April 2018 19:28:20',
                message: 'Oh nice i am ready to do Rampage today O_o!!!!'
            },
            {
                time: '7 April 2018 19:29:20',
                message: 'Let`s start man!'
            }
        ],
        usermessages: [
            {
                time: '6 April 2018 12:14:18',
                message: 'Wow ok  wait 5 min i will push to git my code)',
                user: true
            },
            {
                time: '6 April 2018 12:18:24',
                message: 'I`m ready go?',
                user: true
            },
            {
                time: '7 April 2018 19:24:31',
                message: 'Maybe  play dota i have knew strategy for pick...',
                user: true
            }
        ],
        isUnread: false
    }];

let settingData = null;

const randomMessages = ['Sorry i am busy now', 'Please write later', 'Woops wopps', 'NaVi', 'I am boss , i work when i want work)', 'Okey', 'Hi i work at home today. See tomorrow', 'Hi, how do you do?'];

const ProjectsList = [
    {
        id: '1',
        projectName: 'Wordpress theme',
        company: 'Symu.co',
        price: '900',
        deadline: '14 April 2018 ',
        startProject: '1 days left',
        timesSpent: '0 hours',
        progress: 0,
        status: 'Quened',
        developer: 'Dominic Lynton',
        profession: 'Front End Dev'
    },
    {
        id: '2',
        projectName: 'Landing Page',
        company: 'Google',
        price: '1200',
        deadline: '25 April 2018 ',
        startProject: '4 days left',
        timesSpent: '18 hours',
        progress: 25,
        status: 'Planning',
        developer: 'Lyall Roach',
        profession: 'UX/UI Designer'
    },
    {
        id: '3',
        projectName: 'New website',
        company: 'Symu.co',
        price: '2500',
        deadline: '3 May 2018 ',
        startProject: '5 days left',
        timesSpent: '12 hours',
        progress: 15,
        status: 'Planning',
        developer: 'Michelle Stewart',
        profession: 'Account'
    },
    {
        id: '4',
        projectName: 'New website',
        company: 'Symu.co',
        price: '1500',
        deadline: '14 May 2018',
        startProject: '31 days left',
        timesSpent: '136 hours',
        progress: 100,
        status: 'Completed',
        developer: 'John Dracula',
        profession: 'Front End Dev'
    },
    {
        id: '5',
        projectName: 'Dashboard',
        company: 'Microsoft',
        price: '500',
        deadline: '3 May 2018 ',
        startProject: '5 days left',
        timesSpent: '4 hours',
        progress: 10,
        status: 'Planning',
        developer: 'Jolene Slater',
        profession: 'IOS/Android Dev'
    },
    {
        id: '6',
        projectName: 'Mobile App',
        company: 'Facebook',
        price: '1750',
        deadline: '21 April 2018 ',
        startProject: '3 days left',
        timesSpent: '4 hours',
        progress: 17,
        status: 'Planning',
        developer: 'Dominic Lynton',
        profession: 'IOS/Android Dev'
    },
    {
        id: '7',
        projectName: 'New Logo',
        company: 'Google',
        price: '220',
        deadline: '10 April 2018',
        startProject: '5 days left',
        timesSpent: '14 hours',
        progress: 55,
        status: 'Design',
        developer: 'Dominic Lynton',
        profession: 'IOS/Android Dev'
    },
    {
        id: '8',
        projectName: 'New Website',
        company: 'JCD.pl',
        price: '1500',
        deadline: '4 April 2018',
        startProject: '15 days left',
        timesSpent: '23 hours',
        progress: 40,
        status: 'Design',
        developer: 'Michelle Stewart',
        profession: 'UI/UX Designer'
    },
    {
        id: '9',
        projectName: 'New Website',
        company: 'Themeforest',
        price: '1500',
        deadline: '7 April 2018',
        startProject: '12 days left',
        timesSpent: '42 hours',
        progress: 50,
        status: 'Design',
        developer: 'Lyall Roach',
        profession: 'UI/UX Designer'
    },
    {
        id: '10',
        projectName: 'New Website',
        company: 'Themeforest',
        price: '1500',
        deadline: '3 April 2018',
        startProject: '25 days left',
        timesSpent: '40 hours',
        progress: 95,
        status: 'Production',
        developer: 'Michelle Stewart',
        profession: 'Front End Dev'
    },
    {
        id: '11',
        projectName: 'Dashboard',
        company: 'Facebook',
        price: '500',
        deadline: '3 April 2018',
        startProject: '25 days left',
        timesSpent: '40 hours',
        progress: 95,
        status: 'Production',
        developer: 'Michelle Stewart',
        profession: 'Front End Dev'
    },
    {
        id: '12',
        projectName: 'Mobile App',
        company: 'Facebook',
        price: '1500',
        deadline: '14 April 2018',
        startProject: '25 days left',
        timesSpent: '124 hours',
        progress: 100,
        status: 'Completed',
        developer: 'Michelle Stewart',
        profession: 'Front End Dev'
    },
    {
        id: '13',
        projectName: 'Dashboard',
        company: 'JCD.pl',
        price: '500',
        deadline: '24 April 2018',
        startProject: '5 days left',
        timesSpent: '20 hours',
        progress: 35,
        status: 'Design',
        developer: 'Lyall Roach',
        profession: 'UI/UX Designer'
    },
    {
        id: '14',
        projectName: 'Mobile App',
        company: 'Facebook',
        price: '1500',
        deadline: '10 April 2018',
        startProject: '5 days left',
        timesSpent: '32 hours',
        progress: 65,
        status: 'Development',
        developer: 'John Dracula',
        profession: 'Ios/Android Dev'
    },
    {
        id: '15',
        projectName: 'New website',
        company: 'Symu.co',
        price: '1500',
        deadline: '29 April 2018',
        startProject: '15 days left',
        timesSpent: '39 hours',
        progress: 80,
        status: 'Development',
        developer: 'Michelle Stewart',
        profession: 'Front End Dev'
    },
    {
        id: '16',
        projectName: 'Dashboard',
        company: 'Google',
        price: '1500',
        deadline: '29 April 2018',
        startProject: '15 days left',
        timesSpent: '39 hours',
        progress: 70,
        status: 'Development',
        developer: 'Dominic Lynton',
        profession: 'PM'
    },
    {
        id: '17',
        projectName: 'Landing page',
        company: 'JCD.pl',
        price: '1500',
        deadline: '29 April 2018',
        startProject: '15 days left',
        timesSpent: '39 hours',
        progress: 85,
        status: 'Testing',
        developer: 'Lyall Roach',
        profession: 'QA'
    },
    {
        id: '18',
        projectName: 'Landing page',
        company: 'Google',
        price: '1500',
        deadline: '13 April 2018',
        startProject: '25 days left',
        timesSpent: '39 hours',
        progress: 90,
        status: 'Production',
        developer: 'Jolene Slater',
        profession: 'Front End Dev'
    }
];

const ProjectsListId = {
    id_1: [
        {
            project: 'Dashboard',
            company: 'Microsoft',
            price: '500'
        },
        {
            project: 'New website',
            company: 'Themeforest',
            price: '1500'
        },
        {
            project: 'Mobile App',
            company: 'Facebook',
            price: '1500'
        },
        {
            project: 'Mobile App',
            company: 'Facebook',
            price: '1500'
        }
    ],
    id_2: [
        {
            project: 'New website',
            company: 'Symu.co',
            price: '2500'
        },
        {
            project: 'Landing page',
            company: 'JCD.pl',
            price: '1500'
        },
        {
            project: 'Dashboard',
            company: 'Facebook',
            price: '500'
        },
    ],
    id_3: [
        {
            project: 'Wordpress theme',
            company: 'Symu.co',
            price: '900'
        },
        {
            project: 'New Logo',
            company: 'Google',
            price: '220'
        },
        {
            project: 'New website',
            company: 'Symu.co',
            price: '1500'
        },
        {
            project: 'New website',
            company: 'Themeforest',
            price: '1500'
        },
    ],
    id_4: [
        {
            project: 'Mobile App',
            company: 'Facebook',
            price: '1750'
        },
        {
            project: 'New website',
            company: 'JCD.pl',
            price: '1500'
        },
        {
            project: 'Dashboard',
            company: 'Google',
            price: '500'
        }
    ],
    id_5: [
        {
            project: 'Landing page',
            company: 'Google',
            price: '1200'
        },
        {
            project: 'Dashboard',
            company: 'JCD.pl',
            price: '500'
        },
        {
            project: 'Landing page',
            company: 'Google',
            price: '1500'
        }
    ]


};

const UsersList = [
    {
        id: '1',
        name: 'Dominic Lynton',
        prof: 'Front End Dev',
        activity: 'Online now!',
        mail: 'dominic@virtus.com',
        phone: '(099)-000-999-09'
    },
    {
        id: '2',
        name: 'Lyall Roach',
        prof: 'UI/UX designer',
        activity: 'Online now!',
        mail: 'lyall@virtus.com',
        phone: '(066)-000-666-06'
    },
    {
        id: '3',
        name: 'Michelle Stewart',
        prof: 'Account',
        activity: '12 minutes ago',
        mail: 'michelle@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '4',
        name: 'John Dracula',
        prof: 'Front End Dev',
        activity: '2 hours ago',
        mail: 'john@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '5',
        name: 'Jolene Slater',
        prof: 'IOS/Android Developer',
        activity: '4 hours ago',
        mail: 'jolene@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '1',
        name: 'Dominic Lynton',
        prof: 'Front End Dev',
        activity: 'Online now!',
        mail: 'dominic@virtus.com',
        phone: '(099)-000-999-09'
    },
    {
        id: '2',
        name: 'Lyall Roach',
        prof: 'UI/UX designer',
        activity: 'Online now!',
        mail: 'lyall@virtus.com',
        phone: '(066)-000-666-06'
    },
    {
        id: '3',
        name: 'Michelle Stewart',
        prof: 'Account',
        activity: '12 minutes ago',
        mail: 'michelle@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '4',
        name: 'John Dracula',
        prof: 'Front End Dev',
        activity: '2 hours ago',
        mail: 'john@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '5',
        name: 'Jolene Slater',
        prof: 'IOS/Android Developer',
        activity: '4 hours ago',
        mail: 'jolene@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '1',
        name: 'Dominic Lynton',
        prof: 'Front End Dev',
        activity: 'Online now!',
        mail: 'dominic@virtus.com',
        phone: '(099)-000-999-09'
    },
    {
        id: '2',
        name: 'Lyall Roach',
        prof: 'UI/UX designer',
        activity: 'Online now!',
        mail: 'lyall@virtus.com',
        phone: '(066)-000-666-06'
    },
    {
        id: '3',
        name: 'Michelle Stewart',
        prof: 'Account',
        activity: '12 minutes ago',
        mail: 'michelle@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '4',
        name: 'John Dracula',
        prof: 'Front End Dev',
        activity: '2 hours ago',
        mail: 'john@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '5',
        name: 'Jolene Slater',
        prof: 'IOS/Android Developer',
        activity: '4 hours ago',
        mail: 'jolene@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '1',
        name: 'Dominic Lynton',
        prof: 'Front End Dev',
        activity: 'Online now!',
        mail: 'dominic@virtus.com',
        phone: '(099)-000-999-09'
    },
    {
        id: '2',
        name: 'Lyall Roach',
        prof: 'UI/UX designer',
        activity: 'Online now!',
        mail: 'lyall@virtus.com',
        phone: '(066)-000-666-06'
    },
    {
        id: '3',
        name: 'Michelle Stewart',
        prof: 'Account',
        activity: '12 minutes ago',
        mail: 'michelle@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '4',
        name: 'John Dracula',
        prof: 'Front End Dev',
        activity: '2 hours ago',
        mail: 'john@virtus.com',
        phone: '(088)-000-888-08'
    },
    {
        id: '5',
        name: 'Jolene Slater',
        prof: 'IOS/Android Developer',
        activity: '4 hours ago',
        mail: 'jolene@virtus.com',
        phone: '(088)-000-888-08'
    }
];

const StatsForWeek = {
    SeriesData: [28, 25, 15, 20, 10, 35, 15, 18, 20],
    CategoriesData: ['', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', ''],
    viewsData: {
        percent: 75,
        counter: 1300
    },
    visitorsData: {
        percent: 35,
        counter: 800
    },
    impressionsData: {
        percent: 62,
        counter: 3800
    }
};

const StatsForMonth = {
    SeriesData: [28, 25, 15, 20, 10, 35, 15, 18, 20, 28, 25, 15, 20, 10, 35, 15, 18, 20, 28, 25, 15, 20, 10, 35, 15, 18, 20, 24, 18, 23, 25, 21],
    CategoriesData: ['', '1 DAY', '2 DAY', '3 DAY', '4 DAY', '5 DAY', '6 DAY', '7 DAY', '8 DAY', '9 DAY', '10 DAY', '11 DAY', '12 DAY', '13 DAY', '14 DAY', '15 DAY', '16 DAY', '17 DAY', '18 DAY', '19 DAY', '20 DAY', '21 DAY', '2 DAY', '23 DAY', '24 DAY', '25 DAY', '26 DAY', '27 DAY', '28 DAY', '29 DAY', '30 DAY', ''],
    viewsData: {
        percent: 63,
        counter: 5150
    },
    visitorsData: {
        percent: 48,
        counter: 3200
    },
    impressionsData: {
        percent: 82,
        counter: 15000
    }
};

const StatsForYear = {
    SeriesData: [1220, 1250, 1440, 1375, 1695, 1725, 1550, 1000, 1111, 1385, 1495, 1625, 1580, 1510],
    CategoriesData: ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', ''],
    viewsData: {
        percent: 88,
        counter: 62450
    },
    visitorsData: {
        percent: 67,
        counter: 38500
    },
    impressionsData: {
        percent: 94,
        counter: 185550
    }
};

const StatisticTableData = [
    ['Lorem ipsum dolor sit amet tetur', '6 days', '35800', '5800', '25', '3.02', '2.51', '28.35', 'Active'],
    ['Sed do eiusmod tempor', '3 hours', '1200', '8000', '10', '8.45', '6.13', '45.22', 'Disable'],
    ['Consectetur adipisicing elit sed', '3 days', '69000', '7300', '19', '6.22', '3.90', '37.82', 'Active'],
    ['Duis aute irure dolor in reprehenderit', '2 days', '24000', '6200', '31', '9.12', '7.80', '41.94', 'Disable'],
];

const LastMessages = [];

function getRandomInt() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}


App.get('/api/chat/randomMessage', (req, res) => {
    let random = Math.floor(Math.random() * randomMessages.length);

    return res.json(
        randomMessages[random]
    )
});

App.get('/api/chat/inbox', (req, res) => {
    return res.json(
        messages
    )
});

App.get('/api/lastMessages', (req, res) => {
    return res.json(
        LastMessages
    )
});


App.get('/api/statisticTable', (req, res) => {
    return res.json(
        StatisticTableData
    )
});

App.get('/api/home/projects', (req, res) => {
    return res.json(
        ProjectsListId
    )
});

App.post('/api/notificationsMessages', (req, res) => {
    LastMessages.push({
        id: req.body.id,
        developer: req.body.developer,
        messages: req.body.message,
        time: req.body.time
    });
    console.log('New Messages add');
    console.log(LastMessages);
    return res.json();
});

App.post('/api/register', (req, res) => {
    let randomId = getRandomInt();
    console.log(randomId);
    usersList.push({user: req.body.username, password: req.body.pass, id: randomId});
    console.log('New User register in system');
    console.log(usersList);
    return res.json();
});

App.post('/api/settingData', (req, res) => {
    settingData = req.body;
    console.log(settingData);
    return res.json();
});

App.get('/api/getSettingData', (req, res) => {
    return res.json(
        settingData
    )
});

App.post('/api/pushUserMessage', (req, res) => {
    if (req.body.id === '3') {
        messages[1].usermessages.push({time: req.body.time, message: req.body.message, user: true})
    }
    else if (req.body.id === '2') {
        messages[0].usermessages.push({time: req.body.time, message: req.body.message, user: true})
    }
    else if (req.body.id === '1') {
        messages[2].usermessages.push({time: req.body.time, message: req.body.message, user: true})
    }
    else if (req.body.id === '4') {
        messages[3].usermessages.push({time: req.body.time, message: req.body.message, user: true})
    }
    return res.json();
});

App.post('/api/pushDevMessages', (req, res) => {
    if (req.body.id === '3') {
        messages[1].devmessages.push({time: req.body.time, message: req.body.message})
    }
    else if (req.body.id === '2') {
        messages[0].devmessages.push({time: req.body.time, message: req.body.message})
    }
    else if (req.body.id === '1') {
        messages[2].devmessages.push({time: req.body.time, message: req.body.message})
    }
    else if (req.body.id === '4') {
        messages[3].devmessages.push({time: req.body.time, message: req.body.message})
    }
    return res.json();
});


App.get('/api/projects', (req, res) => {
    return res.json(
        ProjectsList
    )
});

App.get('/api/users', (req, res) => {
    return res.json(
        UsersList
    )
});

App.post('/api/login', (req, res) => {
    const user = req.body.login;
    const password = req.body.pass;

    let userCheck = usersList.filter((item) => {
        return ( item.user === user && item.password === password)
    });

    if (userCheck[0] !== undefined) {
        console.log('User sign in succesfully');
        return res.json({
            check: true,
            user: userCheck[0].user,
            id: userCheck[0].id
        });
    } else {
        console.log('Incorrect user or password');
        return res.json({
            check: false
        })
    }

});

App.get('/api/statistics/week', (req, res) => {
    return res.json(
        StatsForWeek
    )
});

App.get('/api/statistics/month', (req, res) => {
    return res.json(
        StatsForMonth
    )
});

App.get('/api/statistics/year', (req, res) => {
    return res.json(
        StatsForYear
    )
});

App.listen(4000, () => {
    console.log('Server is up!');
});