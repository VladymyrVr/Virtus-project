import React, {Component} from 'react';
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';

import './StatisticTable.css';


const tableHeader = [
    {
        label: 'Campaing',
        sort: 'asc'
    },
    {
        label: 'Time',
        sort: 'default'
    },
    {
        label: 'Views',
        sort: 'default'
    },
    {
        label: 'Visitors',
        sort: 'default'
    },
    {
        label: 'CTR',
        sort: 'default'
    },
    {
        label: 'CPC',
        sort: 'default'
    },
    {
        label: 'CPV',
        sort: 'default'
    },
    {
        label: 'CPM',
        sort: 'default'
    },
    {
        label: 'Status',
        sort: 'default'
    },
];

const SortableHeader = (props) => {
    const { columns, onClick } = props;

    return(
        <thead className='TableHeader'>
        <tr>
            {columns.map((element, index) =>
                <th
                    key={index}
                    className={'SortingBlock ' + (element.sort === 'asc' ? 'asc' : element.sort === 'desc' ? 'desc' : 'default')

                    }
                    onClick={() => onClick(index, element.sort)}
                >
                    {element.label}
                </th>
            )}
        </tr>
        </thead>
    );
};

const SortableBody = (props) => {
    const { data } = props;
    return (
        <tbody className='TableBody'>
        {data.map((element, index) =>
            <tr key={index}>
                <td style={{paddingLeft: '50px'}}>{element[0]}</td>
                <td>{element[1]}</td>
                <td>{element[2]}</td>
                <td>{element[3]}</td>
                <td>{element[4]+'%'}</td>
                <td>{element[5]+'$'}</td>
                <td>{element[6]+'$'}</td>
                <td>{element[7]+'%'}</td>
                <td className={element[8] === 'Active' ? 'ActiveStatus' : 'DisableStatus'}>{element[8]}</td>
            </tr>
        )}
        </tbody>
    )
};


class StatisticTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            columns: tableHeader,
            isLoading: true
        }
    }

    componentWillMount() {
        fetch('/api/statisticTable', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res,
                    isLoading: false
                });
            });
    }

    sortTableFunc = (id, sortMethod) => {
        const { data, columns } = this.state;

        let currentSortMethod = 'default';

        switch (sortMethod) {
            case 'default':
                currentSortMethod = 'asc';
                break;
            case 'asc':
                currentSortMethod = 'desc';
                break;
            case 'desc':
                currentSortMethod = 'asc';
                break;
            default:
                currentSortMethod = 'asc';
        }

        const changeColumn = columns.map((e, i) =>
            ({ ...e, sort: i === id ? currentSortMethod : 'default' })
        );

        const sortData = sortMultidimensionalArrayFunc(data, id, currentSortMethod);

        this.setState({
            data: sortData,
            columns: changeColumn,
        });

    };

    render() {
        return (
            <table className='StatisticTable'>
                <SortableHeader columns={this.state.columns} onClick={this.sortTableFunc}/>
                {
                    !this.state.isLoading &&
                    <SortableBody data={this.state.data}/>
                }

            </table>
        )
    }
}

export default StatisticTable;