import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiselectdropdown',
  templateUrl: './multiselectdropdown.component.html',
  styleUrls: ['./multiselectdropdown.component.css']
})
export class MultiselectdropdownComponent implements OnInit {

  userArray: any[] = [];
  selectedItems = [];
  options: object;
  simpleMultiSelect: {};
  MultiSelectFilter: {};
  multiselectAsSingleSelect: {};
  arrayForSimpleMultiSelect: any[];
  arrayForMultiSelectWithFilter: any[];
  arrayForSingleSelect: any[];

  ngOnInit() {
    this.userArray = [{ name: 'santosh', id: 1 },
    { name: 'nitin', id: 2 },
    { name: 'riya', id: 3 },
    { name: 'rishi', id: 4 },
    { name: 'muskan', id: 5 },
    { name: 'nandini', id: 6 },
    { name: 'krishna', id: 7 }]; // in array, Id is optional

    this.options = {
      allowSearchFilter: true,  // boolean option if user want to show or hide search box in drop-down
      isSelect: true,  // option if user want to show or hide selectAll/DeSelectAll button in drop-down
      isMultiSelectOrSingleSelect: true,  // if set true then you can use Multi-select drop-down else you can use single select drop-down
      textKey: 'name',  // this is the text-Key of your array, example- name: 'santosh', here name is the text key
      valueKey: 'name',  // this is the value-Key of your array, example- name: 'santosh' or id: 1
      array: this.userArray,  // This is User Array
      itemsShowLimit: 5,  // option if user want to show minimum 3 selected data in drop-down button
      addCssClass: '',  // By using this user can add CSS class in drop-down
      texts: {
        selectPlaceHolder: 'Select Items',  // This is placeholder of drop-down, if user set empty then default placeholder will be showed
        closeButtonName: '',  // user can change close button name by passing name, default it set close
        selectAllButtonName: 'Select All',  // user can change or edit select All button name
        unSelectAllButtonName: 'UnSelect All',  // user can change or edit Unselect All button name
        searchPlaceHolder: 'Search items' // user can change or edit search placehoder
      },
      disableDropdown: false// disable dropdown
    };


    // this is for the simple multiselect

    this.arrayForSimpleMultiSelect = [{ name: 'santosh', id: 1 },
    { name: 'nitin', id: 2 },
    { name: 'riya', id: 3 },
    { name: 'rishi', id: 4 },
    { name: 'muskan', id: 5 },
    { name: 'nandini', id: 6 },
    { name: 'krishna', id: 7 }];
    this.simpleMultiSelect = {
      allowSearchFilter: false,  // boolean option if user want to show or hide search box in drop-down
      isSelect: false,  // option if user want to show or hide selectAll/DeSelectAll button in drop-down
      isMultiSelectOrSingleSelect: true,  // if set true then you can use Multi-select drop-down else you can use single select drop-down
      textKey: 'name',  // this is the text-Key of your array, example- name: 'santosh', here name is the text key
      valueKey: 'name',  // this is the value-Key of your array, example- name: 'santosh' or id: 1
      array: this.arrayForSimpleMultiSelect,  // This is User Array
      // itemsShowLimit: 3,  // option if user want to show minimum 3 selected data in drop-down button
      addCssClass: '',  // By using this user can add CSS class in drop-down
      texts: {
        selectPlaceHolder: '',  // This is placeholder of drop-down, if user set empty then default placeholder will be showed
        closeButtonName: '',  // user can change close button name by passing name, default it set close
        selectAllButtonName: 'Select All',  // user can change or edit select All button name
        unSelectAllButtonName: 'UnSelect All',  // user can change or edit Unselect All button name
        searchPlaceHolder: 'Search items' // user can change or edit search placehoder
      },
      disableDropdown: false // disable dropdown

    };

    //  this is the multiselect with filter

    this.arrayForMultiSelectWithFilter = [
      { name: 'santosh', id: 1 },
      { name: 'nitin', id: 2 },
      { name: 'riya', id: 3 },
      { name: 'rishi', id: 4 },
      { name: 'muskan', id: 5 },
      { name: 'nandini', id: 6 },
      { name: 'krishna', id: 7 }
    ];
    this.MultiSelectFilter = {
      allowSearchFilter: true,  // boolean option if user want to show or hide search box in drop-down
      isSelect: true,  // option if user want to show or hide selectAll/DeSelectAll button in drop-down
      isMultiSelectOrSingleSelect: true,  // if set true then you can use Multi-select drop-down else you can use single select drop-down
      textKey: 'name',  // this is the text-Key of your array, example- name: 'santosh', here name is the text key
      valueKey: 'name',  // this is the value-Key of your array, example- name: 'santosh' or id: 1
      array: this.arrayForMultiSelectWithFilter,  // This is User Array
      // itemsShowLimit: 3,  // option if user want to show minimum 3 selected data in drop-down button
      addCssClass: '',  // By using this user can add CSS class in drop-down
      texts: {
        selectPlaceHolder: 'Select Items',  // This is placeholder of drop-down, if user set empty then default placeholder will be showed
        closeButtonName: '',  // user can change close button name by passing name, default it set close
        selectAllButtonName: 'Select All',  // user can change or edit select All button name
        unSelectAllButtonName: 'UnSelect All',  // user can change or edit Unselect All button name
        searchPlaceHolder: 'Search items' // user can change or edit search placehoder
      },
      disableDropdown: false // disable dropdown

    };


    //   multiselect as a single select

    this.arrayForSingleSelect = [
      { name: 'santosh', id: 1 },
      { name: 'nitin', id: 2 },
      { name: 'riya', id: 3 },
      { name: 'rishi', id: 4 },
      { name: 'muskan', id: 5 },
      { name: 'nandini', id: 6 },
      { name: 'krishna', id: 7 }
    ];
    this.multiselectAsSingleSelect = {

      allowSearchFilter: true,  // boolean option if user want to show or hide search box in drop-down
      isSelect: true,  // option if user want to show or hide selectAll/DeSelectAll button in drop-down
      isMultiSelectOrSingleSelect: false,  // if set true then you can use Multi-select drop-down else you can use single select drop-down
      textKey: 'name',  // this is the text-Key of your array, example- name: 'santosh', here name is the text key
      valueKey: 'name',  // this is the value-Key of your array, example- name: 'santosh' or id: 1
      array: this.arrayForSingleSelect,  // This is User Array
      // itemsShowLimit: 3,  // option if user want to show minimum 3 selected data in drop-down button
      addCssClass: '',  // By using this user can add CSS class in drop-down
      texts: {
        selectPlaceHolder: 'Select Items',  // This is placeholder of drop-down, if user set empty then default placeholder will be showed
        closeButtonName: '',  // user can change close button name by passing name, default it set close
        selectAllButtonName: 'Select All',  // user can change or edit select All button name
        unSelectAllButtonName: 'UnSelect All',  // user can change or edit Unselect All button name
        searchPlaceHolder: 'Search items' // user can change or edit search placehoder
      },
      disableDropdown: false// disable dropdown
    };

  }


  onItemSelect(event): void {
    this.selectedItems = event;  // getArrayData is your selected checkbox data array
    console.log(this.selectedItems);
  }

}
