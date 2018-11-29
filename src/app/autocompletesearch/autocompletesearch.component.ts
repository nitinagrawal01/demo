import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocompletesearch',
  templateUrl: './autocompletesearch.component.html',
  styleUrls: ['./autocompletesearch.component.css']
})
export class AutocompletesearchComponent implements OnInit {

  data: any[];
  searchData: object;
  options: any;
  searchByNameDisplayByName: {
    'searchBy': string[]; // this is for the search data by the filed name.
    'displayBy': string[]; // this is for  the display the data when searched.
    'placeHolder': string; // this is for the placeHolder of the search field.
    'noRecord': string; // this is message for for the no record found.
    'highlightColour': string; // this is for giving the highlight color.
    'ishighlight': boolean; // this is for you want highlight or not
  };
  dataByFirstNameDisplayByLastName: {
    searchData: {
      'searchBy': string[]; // this is for the search data by the filed name.
      // this is for the search data by the filed name.
      'displayBy': string[]; // this is for  the display the data when searched.
      // this is for  the display the data when searched.
      'placeHolder': string; // this is for the placeHolder of the search field.
      // this is for the placeHolder of the search field.
      'noRecord': string; // this is message for for the no record found.
      // this is message for for the no record found.
      'highlightColour': string; // this is for giving the highlight color.
      // this is for giving the highlight color.
      'ishighlight': boolean; // this is for you want highlight or not
    }; // this is for searchData;
    data: any[]; // this is the data of the field
  };
  dataByAllFieldAndSearchByallField: {};
  searchByAllFieldAndDisplayAllField: {
    'searchBy': string[]; // this is for the search data by the filed name. 
    'displayBy': string[]; // this is for  the display the data when searched.
    'placeHolder': string; // this is for the placeHolder of the search field.
    'noRecord': string; // this is message for for the no record found.
    'highlightColour': string; // this is for giving the highlight color.
    'ishighlight': boolean; // this is for you want highlight or not
  };
  dataWithDefaultHighlightColor: {};
  displayWithDefaultHighLightColor: {
  'searchBy': string[]; // this is for the search data by the filed name.
    'displayBy': string[]; // this is for  the display the data when searched.
    'placeHolder': string; // this is for the placeHolder of the search field.
    'noRecord': string; // this is message for for the no record found.
    'highlightColour': string; // this is for giving the highlight color.
    'ishighlight': boolean; // this is for you want highlight or not
  };

  constructor() {

    this.data = [

      { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
      { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
      { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
      { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
      { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
      { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
      { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },

    ];

    this.searchData = {
      'searchBy': ['FirstName', 'LastName'], // this is for the search data by the filed name.
      'displayBy': ['FirstName', 'LastName'], // this is for  the display the data when searched.
      'placeHolder': 'Firstname LastName',  // this is for the placeHolder of the search field.
      'noRecord': 'no record found', // this is message for for the no record found.
      'highlightColour': 'green',  // this is for giving the highlight color.
      'ishighlight': true // this is for you want highlight or not
    };

    this.options = {
      searchData: this.searchData,  // this is for searchData;
      data: this.data   // this is the data of the field
    };

    this.searchByNameDisplayByName = {
      'searchBy': ['FirstName'], // this is for the search data by the filed name.
      'displayBy': ['FirstName' ], // this is for  the display the data when searched.
      'placeHolder': '',  // this is for the placeHolder of the search field.
      'noRecord': '', // this is message for for the no record found.
      'highlightColour': '',  // this is for giving the highlight color.
      'ishighlight': false// this is for you want highlight or not
    };
    this.dataByFirstNameDisplayByLastName = {
      searchData: this.searchByNameDisplayByName,  // this is for searchData;
      data: this.data   // this is the data of the field
    };

    this.searchByAllFieldAndDisplayAllField = {
      'searchBy': ['FirstName', 'LastName', 'Id'], // this is for the search data by the filed name. 
      'displayBy': ['FirstName', 'LastName', 'Id'], // this is for  the display the data when searched.
      'placeHolder': 'FirstName LastName',  // this is for the placeHolder of the search field.
      'noRecord': 'No record found', // this is message for for the no record found.
      'highlightColour': '',  // this is for giving the highlight color.
      'ishighlight': false// this is for you want highlight or not
    };
    this.dataByAllFieldAndSearchByallField = {
      searchData: this.searchByAllFieldAndDisplayAllField,  // this is for searchData;
      data: this.data   // this is the data of the field
    };


    this.searchByAllFieldAndDisplayAllField = {
      'searchBy': ['FirstName', 'LastName', 'Id'], // this is for the search data by the filed name. 
      'displayBy': ['FirstName', 'LastName', 'Id'], // this is for  the display the data when searched.
      'placeHolder': 'FirstName LastName',  // this is for the placeHolder of the search field.
      'noRecord': 'no record found', // this is message for for the no record found.
      'highlightColour': '',  // this is for giving the highlight color.
      'ishighlight': false// this is for you want highlight or not
    };

    this.displayWithDefaultHighLightColor = {
      'searchBy': ['FirstName', 'LastName', 'Id'], // this is for the search data by the filed name. 
      'displayBy': ['FirstName', 'LastName', 'Id'], // this is for  the display the data when searched.
      'placeHolder': 'FirstName LastName',  // this is for the placeHolder of the search field.
      'noRecord': '', // this is message for for the no record found.
      'highlightColour': '',  // this is for giving the highlight color.
      'ishighlight': true// this is for you want highlight or not
    };

  this.dataWithDefaultHighlightColor = {
    searchData: this.displayWithDefaultHighLightColor,  // this is for searchData;
    data: this.data   // this is the data of the field
   };
  }


  receiveRowValue(event) {
    console.log(event);
  }
  ngOnInit(): void {
  }


}




