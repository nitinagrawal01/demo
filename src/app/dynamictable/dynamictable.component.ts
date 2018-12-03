import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamictable',
  templateUrl: './dynamictable.component.html',
  styleUrls: ['./dynamictable.component.css']
})
export class DynamictableComponent implements OnInit {
  tableData: any[];
  pagination: object;
  searchData: object;
  headerData: any[];
  options: object;
  table: {};
  tableSearchData: {};
  tableHeaderData: any[];
  tablePagination: {};
  tableWithFooter: {};
  tableWithDefaultSortingandAndSortbySomeFields: any[];
  tableWithSoorting: {};
  tablesearchData: {};
  tableWithSearching: {};
  tablesearchDataBymultipleName: {};
  tableWithSearchingbyMultipleName: {};
  dataForOnlyTable: any[];
  dataForOnlyTableWithFooter: any[];
  tableDataForSorting: any[];
  tableDataForSearch: any[];
  tableDataSearchByMultipleField: any[];

  constructor() {

    this.tableData = [
      { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
      { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
      { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
      { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
      { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
      { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
      { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
      { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
    ];
    this.pagination = {
      isPagination: true, // this is for allow paginatin
      showEntries: [3, 4], // how many items you want to show on per page
    };
    this.searchData = {
      'isSearching': true, // this is for if you want to search allow
      'searchBy': ['FirstName', 'LastName'], // this is for choice  by the column name searching
      'searchTitle': ' FirstName lastName Id', // this is the placeholder which you want to show
      'noRecord': 'No record found' // this is for the msg if records does not found
    };
    this.headerData = [
      {
        'columnName': 'FirstName', // this is for the columnname   data
        'sortBy': 'FirstName', // this option for the givin sorting by column name
        'isSorting': true, // this is for the sorting i you want to sort true
        'keyName': 'FirstName', // this is for the arranging the column data and row data in same place
        'defaultSorting': 'FirstName' // this is for default sorting
      },
      {
        'columnName': 'LastName',
        'sortBy': 'LastName',
        'isSorting': true,
        'keyName': 'LastName',
      },
      {
        'columnName': 'Id',
        'sortBy': 'Id',
        'isSorting': true,
        'keyName': 'Id',
      },

    ];
    this.options = {
      headerData: this.headerData, // this is for the header of the table
      tableData: this.tableData, // this is for the data of the table
      footerData: true, // this will show the footer of the table    i you allow true and if you give false then it will remove
      searchData: this.searchData, // this is for search data into table
      pagination: this.pagination // this is for the pagination
    };

    this.dataForOnlyTable = [
      { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
      { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
      { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
      { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
      { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
      { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
      { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
      { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
    ];

    this.tableSearchData = {
      'isSearching': false, // this is for if you want to search allow
      'searchBy': ['FirstName', 'LastName'], // this is for choice  by the column name searching
      'searchTitle': 'search by  name or lastName', // this is the placeholder which you want to show
      'noRecord': 'No record found' // this is for the msg if records does not found
    };
    this.tableHeaderData = [
      {
        'columnName': 'FirstName', // this is for the columnname   data
        'sortBy': 'FirstName', // this option for the givin sorting by column name
        'isSorting': false, // this is for the sorting i you want to sort true
        'keyName': 'FirstName', // this is for the arranging the column data and row data in same place
        'defaultSorting': 'FirstName' // this is for default sorting
      },
      {
        'columnName': 'LastName',
        'sortBy': 'LastName',
        'isSorting': false,
        'keyName': 'LastName',
      },
      {
        'columnName': 'Id',
        'sortBy': 'Id',
        'isSorting': false,
        'keyName': 'Id',
      },

    ];
    this.tablePagination = {
      isPagination: false, // this is for allow paginatin
      showEntries: [3, 4], // how many items you want to show on per page
    };
    this.table = {
      headerData: this.tableHeaderData, // this is for the header of the table
      tableData: this.dataForOnlyTable, // this is for the data of the table
      footerData: false, // this will show the footer of the table    i you allow true and if you give false then it will remove
      searchData: this.tableSearchData, // this is for search data into table
      pagination: this.tablePagination // this is for the pagination
    };

    // table with footer

    this.dataForOnlyTableWithFooter = [
      { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
      { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
      { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
      { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
      { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
      { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
      { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
      { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
    ];
    this.tableWithFooter = {
      headerData: this.tableHeaderData, // this is for the header of the table
      tableData: this.dataForOnlyTableWithFooter, // this is for the data of the table
      footerData: true, // this will show the footer of the table    i you allow true and if you give false then it will remove
      searchData: this.tableSearchData, // this is for search data into table
      pagination: this.tablePagination // this is for the pagination
    };

    // table with soorting

    this.tableDataForSorting = [
      { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
      { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
      { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
      { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
      { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
      { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
      { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
      { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
    ];
    this.tableWithDefaultSortingandAndSortbySomeFields = [
      {
        'columnName': 'FirstName', // this is for the columnname   data
        'sortBy': 'FirstName', // this option for the givin sorting by column name
        'isSorting': true, // this is for the sorting i you want to sort true
        'keyName': 'FirstName', // this is for the arranging the column data and row data in same place
        'defaultSorting': 'FirstName' // this is for default sorting
      },
      {
        'columnName': 'LastName',
        'sortBy': 'LastName',
        'isSorting': true,
        'keyName': 'LastName',
      },
      {
        'columnName': 'Id',
        'sortBy': 'Id',
        'isSorting': true,
        'keyName': 'Id',
      },

    ];
    this.tableWithSoorting = {
      headerData: this.tableWithDefaultSortingandAndSortbySomeFields, // this is for the header of the table
      tableData: this.tableDataForSorting, // this is for the data of the table
      footerData: true, // this will show the footer of the table    i you allow true and if you give false then it will remove
      searchData: this.tableSearchData, // this is for search data into table
      pagination: this.tablePagination // this is for the pagination
    };

    // this is for the search
    this.tableDataForSearch = [
      { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
      { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
      { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
      { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
      { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
      { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
      { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
      { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
    ];

    this.tablesearchData = {
      'isSearching': true, // this is for if you want to search allow
      'searchBy': ['FirstName'], // this is for choice  by the column name searching
      'searchTitle': '', // this is the placeholder which you want to show
      'noRecord': '' // this is for the msg if records does not found
    };
    this.tableWithSearching = {
      headerData: this.tableWithDefaultSortingandAndSortbySomeFields, // this is for the header of the table
      tableData: this.tableDataForSearch, // this is for the data of the table
      footerData: true, // this will show the footer of the table    i you allow true and if you give false then it will remove
      searchData: this.tablesearchData, // this is for search data into table
      pagination: this.tablePagination // this is for the pagination
    };

    // table data ssearch by multiole column name
    this.tableDataSearchByMultipleField = [
      { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
      { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
      { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
      { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
      { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
      { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
      { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
      { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
    ];
    this.tablesearchDataBymultipleName = {
      'isSearching': true, // this is for if you want to search allow
      'searchBy': ['FirstName', 'LastName', 'Id'], // this is for choice  by the column name searching
      'searchTitle': 'FirstName LastName Id', // this is the placeholder which you want to show
      'noRecord': 'No Record Found' // this is for the msg if records does not found
    };

    this.tableWithSearchingbyMultipleName = {
      headerData: this.tableWithDefaultSortingandAndSortbySomeFields, // this is for the header of the table
      tableData: this.tableDataSearchByMultipleField, // this is for the data of the table
      footerData: true, // this will show the footer of the table    i you allow true and if you give false then it will remove
      searchData: this.tablesearchDataBymultipleName, // this is for search data into table
      pagination: this.tablePagination // this is for the pagination
    };

  }


  // this is for the to get the value of the row of table
  receiveRowValue(event) {
    console.log(event);
  }
  ngOnInit() {
  }

}
