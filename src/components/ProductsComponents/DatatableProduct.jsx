import DataTable from 'react-data-table-component';
// import { useGetProductsQuery } from '../../redux/api';
// import React from 'react';

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
    {
        name: 'Image',
        selector: row => (
            <img src={row.image} alt={row.make} width={45} height={45} />
        ),
    },

    {
        name: 'make',
        selector: row => row.make,
        sortable: true
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true
    },

    {
        name: 'Color',
        selector: row => row.color
    },
    {
        name: 'Price',
        selector: row => row.price
    }
];

// custom pagination 
// const paginationComponentOptions = {
//     rowsPerPageText: 'បង្ហាញ១០ទិន្នន័យក្នុងមួយទំព័រ',
//     rangeSeparatorText: 'ចន្លោះ',
//     selectAllRowsItem: true,
//     selectAllRowsItemText: 'ទាំងអស់',
// };


export default function DataTableProduct() {

    // const [totalRows, setTotalRows] = useState(1);
    // const [perPage, setPerPage] = useState(10);
    // const [dataUsage, setData] = useState([]);
    // const { data = [] } = useGetProductsQuery({
    //     page: 1,
    //     limit: 10
    // })
    // const [filterText, setFilterText] = React.useState('');
    // const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    // const filteredItems = data.filter(item => item.make && item.make.toLowerCase().includes(filterText.toLowerCase()));
    // const subHeaderComponentMemo = React.useMemo(() => {
    //     const handleClear = () => {
    //         if (filterText) {
    //             setResetPaginationToggle(!resetPaginationToggle);
    //             setFilterText('');
    //         }
    //     };
    //     // return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
    // }, [filterText, resetPaginationToggle]);

    
    // setData(data);

    // useEffect(()=>{
    //     function fetchData(){

    //     }
    //     fetchData();

    // },[])


    // setPerPage(1);
    // setTotalRows(dataUsage.length)


    // const handlePerRowsChange = page => (

    // })
    // )




    return <DataTable title="Contact List" columns={columns}  pagination  // optionally, a hook to reset pagination to page 1
        subHeader selectableRows persistTableHead />;

    // return (
    //     <DataTable
    //         columns={columns}
    //         data={data}
    //         selectableRows
    //         expandableRowsComponent={ExpandedComponent}
    //         pagination
    //         paginationComponentOptions={paginationComponentOptions}
    //         paginationServer
    //         paginationTotalRows={10}
    //         // onChangeRowsPerPage={handlePerRowsChange}
    //         // onChangePage={handlePageChange}
    //     />
    // );
};