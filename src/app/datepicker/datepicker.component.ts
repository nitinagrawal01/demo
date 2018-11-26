import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  options: object;
  datePickerWithMmDdFormat: {};
  datePickerWithDdMmFormat: {};
  datePickerWithWeak: {};
  datePickerWithanimation: {};
  selectAndShowOtherMonthDate: {};
  datePickerWithIconAndImage: {};
  numberOfMonthDisplayButtonIconText: {};

  ngOnInit() {

    this.options = {
      dateFormat: 'dd MM, yy', // set selected date format
      firstCalendarDay: 1,  // set first day of calender by passing {0:sunday, 1: monday}.
      minimumDate: new Date(), // set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.
      maximumDate: '+1y +1w', // set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format. 
      showButtonPanel: true, // show button panel if passes true.
      closeButtonText: 'Close', // you can change close button name.
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // set day name by passing in this format.
      // tslint:disable-next-line:max-line-length
      monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // set day month by passing in this format
      showWeek: true, // show week in left, if set true.
      weekHeaderName: 'W', // heading of week colomn.
      MonthsSkip: 2, // skips month when click prev/next button, set -1 for skip one month, 1 for skip two month & so on.
      yearsRange: '2017:2020', // set range of years in-between.
      appendText: '(dd-mm-yyyy)', // append date format in right side of datepicker.
      monthDropDown: false,    // month dropdown in title bar.
      yearDropDown: false,   // year dropdown in title bar.
      animationDuration: 'fast', // set animation duration like, slow/medium/fast.
      showAnimation: 'fadeIn', // set different animation type like put 'slideDown' & 'fadeIn'.
      hideIfNoPrevNext: true, // if next month is disable, then hide next & prev button by passing true.
      isRTL: true, // show calendar in right to left format.
      nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
      prevIconText: 'Earlier', // set tooltip for prevbutton icon. default set is prev.
      numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
      showCurrentMonthAtPos: 1, // if numberOfMonthsDisplay is apply then set position of current month.
      selectOtherMonthsDate: true, // if prev/next month date is show in current month,then select date by passing true.
      showOtherMonthsDate: true, // show/hide prev/next month date in current month by set true or false.
      showBarMonthAfterYear: false, // show month after year in title bar if set true.
      yearSuffix: '', // set year suffix in title bar.
      showOn: 'both', // if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.
      buttonImageOnly: true, // show icon image only at right side of datepicker.
      buttonIconImage: 'assets/calendar1.gif', // set icon image of datepicker.
      buttonIconText: 'Calendar' // set tooltip for icon of datepicker.
    };


    this.datePickerWithMmDdFormat = {
      dateFormat: 'MM dd, yy', // set selected date format
      firstCalendarDay: 0,  // set first day of calender by passing {0:sunday, 1: monday}.
      minimumDate: new Date(2017, 1, 1), // set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.
      maximumDate: '+5m +1w', // set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format. 
      showButtonPanel: false, // show button panel if passes true.
      closeButtonText: 'Close', // you can change close button name.
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // set day name by passing in this format.
      // tslint:disable-next-line:max-line-length
      monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // set day month by passing in this format
      showWeek: false, // show week in left, if set true.
      weekHeaderName: 'W', // heading of week colomn.
      MonthsSkip: 1, // skips month when click prev/next button, set -1 for skip one month, 1 for skip two month & so on.
      // yearsRange: '2016:2018', // set range of years in-between.
      appendText: '(mm-dd-yyyy)', // append date format in right side of datepicker.
      monthDropDown: false,    // month dropdown in title bar.
      yearDropDown: false,   // year dropdown in title bar.
      animationDuration: 'medium', // set animation duration like, slow/medium/fast.
      showAnimation: 'slideDown', // set different animation type like put 'slideDown' & 'fadeIn'.
      hideIfNoPrevNext: false, // if next month is disable, then hide next & prev button by passing true.
      isRTL: false, // show calendar in right to left format.
      // nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
      // prevIconText: 'Earlier', set tooltip for prevbutton icon. default set is prev.
      // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
      // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
      selectOtherMonthsDate: false, // if prev/next month date is show in current month,then select date by passing true.
      showOtherMonthsDate: false, // show/hide prev/next month date in current month by set true or false. 
      showBarMonthAfterYear: true, // show month after year in title bar if set true.
      yearSuffix: '', // set year suffix in title bar.
      // showOn: 'both', // if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.
      // buttonImageOnly: true, // show icon image only at right side of datepicker.
      // buttonIconImage: '/assets/images/calendar1.gif', // set icon image of datepicker.
      // buttonIconText: 'Calendar' // set tooltip for icon of datepicker.
    };
    this.datePickerWithDdMmFormat = {
      dateFormat: 'dd MM, yy', // set selected date format
      firstCalendarDay: 1,  // set first day of calender by passing {0:sunday, 1: monday}.
      minimumDate: new Date(2017, 1, 1), // set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.
      maximumDate: '+5m +1w', // set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format. 
      showButtonPanel: true, // show button panel if passes true.
      closeButtonText: 'Close', // you can change close button name.
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // set day name by passing in this format.
      // tslint:disable-next-line:max-line-length
      monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // set day month by passing in this format
      showWeek: false, // show week in left, if set true.
      weekHeaderName: 'W', // heading of week colomn.
      MonthsSkip: 1, // skips month when click prev/next button, set -1 for skip one month, 1 for skip two month & so on.
      // yearsRange: '2016:2018', // set range of years in-between.
      appendText: '(dd-mm-yyyy)', // append date format in right side of datepicker.
      monthDropDown: false,    // month dropdown in title bar.
      yearDropDown: false,   // year dropdown in title bar.
      animationDuration: 'medium', // set animation duration like, slow/medium/fast.
      showAnimation: 'slideDown', // set different animation type like put 'slideDown' & 'fadeIn'.
      hideIfNoPrevNext: false, // if next month is disable, then hide next & prev button by passing true.
      isRTL: false, // show calendar in right to left format.
      // nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
      // prevIconText: 'Earlier', set tooltip for prevbutton icon. default set is prev.
      // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
      // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
      selectOtherMonthsDate: false, // if prev/next month date is show in current month,then select date by passing true.
      showOtherMonthsDate: false, // show/hide prev/next month date in current month by set true or false. 
      showBarMonthAfterYear: true, // show month after year in title bar if set true.
      yearSuffix: '', // set year suffix in title bar.
      // showOn: 'both', // if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.
      // buttonImageOnly: true, // show icon image only at right side of datepicker.
      // buttonIconImage: '/assets/images/calendar1.gif', // set icon image of datepicker.
      // buttonIconText: 'Calendar' // set tooltip for icon of datepicker.
    };

    this.datePickerWithWeak = {

      dateFormat: 'dd MM, yy', // set selected date format
      firstCalendarDay: 1,  // set first day of calender by passing {0:sunday, 1: monday}.
      minimumDate: new Date(), // set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.
      maximumDate: '+1y +1w', // set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format. 
      showButtonPanel: true, // show button panel if passes true.
      closeButtonText: 'Close', // you can change close button name.
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // set day name by passing in this format.
      // tslint:disable-next-line:max-line-length
      monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // set day month by passing in this format
      showWeek: true, // show week in left, if set true.
      weekHeaderName: 'W', // heading of week colomn.
      MonthsSkip: 2, // skips month when click prev/next button, set -1 for skip one month, 1 for skip two month & so on.
      yearsRange: '2017:2020', // set range of years in-between.
      appendText: '(dd-mm-yyyy)', // append date format in right side of datepicker.
      monthDropDown: true,    // month dropdown in title bar.
      yearDropDown: true,   // year dropdown in title bar.
      animationDuration: 'medium', // set animation duration like, slow/medium/fast.
      showAnimation: 'slideDown', // set different animation type like put 'slideDown' & 'fadeIn'.
      hideIfNoPrevNext: true, // if next month is disable, then hide next & prev button by passing true.
      isRTL: false, // show calendar in right to left format.
      // nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
      // prevIconText: 'Earlier', set tooltip for prevbutton icon. default set is prev.
      // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
      // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
      selectOtherMonthsDate: false, // if prev/next month date is show in current month,then select date by passing true.
      showOtherMonthsDate: false, // show/hide prev/next month date in current month by set true or false. 
      showBarMonthAfterYear: true, // show month after year in title bar if set true.
      yearSuffix: '', // set year suffix in title bar.
      // showOn: 'both', // if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.
      // buttonImageOnly: true, // show icon image only at right side of datepicker.
      // buttonIconImage: '/assets/images/calendar1.gif', // set icon image of datepicker.
      // buttonIconText: 'Calendar' // set tooltip for icon of datepicker.


    };

    this.datePickerWithanimation = {
      dateFormat: 'dd MM, yy', // set selected date format
      firstCalendarDay: 1,  // set first day of calender by passing {0:sunday, 1: monday}.
      minimumDate: new Date(), // set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.
      maximumDate: '+1y +1w', // set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format. 
      showButtonPanel: true, // show button panel if passes true.
      closeButtonText: 'Close', // you can change close button name.
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // set day name by passing in this format.
      // tslint:disable-next-line:max-line-length
      monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // set day month by passing in this format
      showWeek: true, // show week in left, if set true.
      weekHeaderName: 'W', // heading of week colomn.
      MonthsSkip: 2, // skips month when click prev/next button, set -1 for skip one month, 1 for skip two month & so on.
      yearsRange: '2017:2020', // set range of years in-between.
      appendText: '(dd-mm-yyyy)', // append date format in right side of datepicker.
      monthDropDown: true,    // month dropdown in title bar.
      yearDropDown: true,   // year dropdown in title bar.
      animationDuration: 'fast', // set animation duration like, slow/medium/fast.
      showAnimation: 'fadeIn', // set different animation type like put 'slideDown' & 'fadeIn'.
      hideIfNoPrevNext: true, // if next month is disable, then hide next & prev button by passing true.
      isRTL: false, // show calendar in right to left format.
      nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
      prevIconText: 'Earlier', // set tooltip for prevbutton icon. default set is prev.
      // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
      // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
      selectOtherMonthsDate: false, // if prev/next month date is show in current month,then select date by passing true.
      showOtherMonthsDate: false, // show/hide prev/next month date in current month by set true or false. 
      showBarMonthAfterYear: true, // show month after year in title bar if set true.
      yearSuffix: '', // set year suffix in title bar.
      // showOn: 'both', // if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.
      // buttonImageOnly: true, // show icon image only at right side of datepicker.
      // buttonIconImage: '/assets/images/calendar1.gif', // set icon image of datepicker.
      // buttonIconText: 'Calendar' // set tooltip for icon of datepicker.

    };

    this.selectAndShowOtherMonthDate = {

      dateFormat: 'dd MM, yy', // set selected date format
      firstCalendarDay: 1,  // set first day of calender by passing {0:sunday, 1: monday}.
      minimumDate: new Date(2017, 1, 1), // set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.
      maximumDate: '++1y +1w', // set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format. 
      showButtonPanel: true, // show button panel if passes true.
      closeButtonText: 'Close', // you can change close button name.
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // set day name by passing in this format.
      // tslint:disable-next-line:max-line-length
      monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // set day month by passing in this format
      showWeek: true, // show week in left, if set true.
      weekHeaderName: 'W', // heading of week colomn.
      MonthsSkip: 2, // skips month when click prev/next button, set -1 for skip one month, 1 for skip two month & so on.
      yearsRange: '2017:2020', // set range of years in-between.
      appendText: '(dd-mm-yyyy)', // append date format in right side of datepicker.
      monthDropDown: true,    // month dropdown in title bar.
      yearDropDown: true,   // year dropdown in title bar.
      animationDuration: 'fast', // set animation duration like, slow/medium/fast.
      showAnimation: 'fadeIn', // set different animation type like put 'slideDown' & 'fadeIn'.
      hideIfNoPrevNext: true, // if next month is disable, then hide next & prev button by passing true.
      isRTL: false, // show calendar in right to left format.
      nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
      prevIconText: 'Earlier', // set tooltip for prevbutton icon. default set is prev.
      // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
      // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
      selectOtherMonthsDate: true, // if prev/next month date is show in current month,then select date by passing true.
      showOtherMonthsDate: true, // show/hide prev/next month date in current month by set true or false. 
      showBarMonthAfterYear: false, // show month after year in title bar if set true.
      yearSuffix: 'choose date', // set year suffix in title bar.
      // showOn: 'both', // if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.
      // buttonImageOnly: true, // show icon image only at right side of datepicker.
      // buttonIconImage: '/assets/images/calendar1.gif', // set icon image of datepicker.
      // buttonIconText: 'Calendar' // set tooltip for icon of datepicker.
    };
    this.datePickerWithIconAndImage = {


      dateFormat: 'dd MM, yy', // set selected date format
      firstCalendarDay: 1,  // set first day of calender by passing {0:sunday, 1: monday}.
      minimumDate: new Date(2017, 1, 1), // set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.
      maximumDate: '++1y +1w', // set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format. 
      showButtonPanel: true, // show button panel if passes true.
      closeButtonText: 'Close', // you can change close button name.
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // set day name by passing in this format.
      // tslint:disable-next-line:max-line-length
      monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // set day month by passing in this format
      showWeek: true, // show week in left, if set true.
      weekHeaderName: 'W', // heading of week colomn.
      MonthsSkip: 2, // skips month when click prev/next button, set -1 for skip one month, 1 for skip two month & so on.
      yearsRange: '2017:2020', // set range of years in-between.
      appendText: '(dd-mm-yyyy)', // append date format in right side of datepicker.
      monthDropDown: true,    // month dropdown in title bar.
      yearDropDown: true,   // year dropdown in title bar.
      animationDuration: 'fast', // set animation duration like, slow/medium/fast.
      showAnimation: 'fadeIn', // set different animation type like put 'slideDown' & 'fadeIn'.
      hideIfNoPrevNext: true, // if next month is disable, then hide next & prev button by passing true.
      isRTL: false, // show calendar in right to left format.
      nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
      prevIconText: 'Earlier', // set tooltip for prevbutton icon. default set is prev.
      // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
      // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
      selectOtherMonthsDate: true, // if prev/next month date is show in current month,then select date by passing true.
      showOtherMonthsDate: true, // show/hide prev/next month date in current month by set true or false.
      showBarMonthAfterYear: false, // show month after year in title bar if set true.
      yearSuffix: 'choose date', // set year suffix in title bar.
      showOn: 'both', // if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.
      buttonImageOnly: true, // show icon image only at right side of datepicker.
      buttonIconImage: 'assets/calendar1.gif', // set icon image of datepicker.
      // buttonIconText: 'Calendar' // set tooltip for icon of datepicker.

    };

    this.numberOfMonthDisplayButtonIconText = {

      dateFormat: 'dd MM, yy', // set selected date format
      firstCalendarDay: 1,  // set first day of calender by passing {0:sunday, 1: monday}.
      minimumDate: new Date(), // set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.
      maximumDate: '+1y +1w', // set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format. 
      showButtonPanel: true, // show button panel if passes true.
      closeButtonText: 'Close', // you can change close button name.
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // set day name by passing in this format.
      // tslint:disable-next-line:max-line-length
      monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // set day month by passing in this format
      showWeek: true, // show week in left, if set true.
      weekHeaderName: 'W', // heading of week colomn.
      MonthsSkip: 2, // skips month when click prev/next button, set -1 for skip one month, 1 for skip two month & so on.
      yearsRange: '2017:2020', // set range of years in-between.
      appendText: '(dd-mm-yyyy)', // append date format in right side of datepicker.
      monthDropDown: false,    // month dropdown in title bar.
      yearDropDown: false,   // year dropdown in title bar.
      animationDuration: 'fast', // set animation duration like, slow/medium/fast.
      showAnimation: 'fadeIn', // set different animation type like put 'slideDown' & 'fadeIn'.
      hideIfNoPrevNext: true, // if next month is disable, then hide next & prev button by passing true.
      isRTL: false, // show calendar in right to left format.
      nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
      prevIconText: 'Earlier', // set tooltip for prevbutton icon. default set is prev.
      numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
      showCurrentMonthAtPos: 1, // if numberOfMonthsDisplay is apply then set position of current month.
      selectOtherMonthsDate: true, // if prev/next month date is show in current month,then select date by passing true.
      showOtherMonthsDate: true, // show/hide prev/next month date in current month by set true or false.
      showBarMonthAfterYear: false, // show month after year in title bar if set true.
      yearSuffix: '', // set year suffix in title bar.
      showOn: 'both', // if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.
      buttonImageOnly: true, // show icon image only at right side of datepicker.
      buttonIconImage: 'assets/calendar1.gif', // set icon image of datepicker.
      buttonIconText: 'Calendar' // set tooltip for icon of datepicker.

    };

  }

  receiveDate(selectedDate) {
    console.log(selectedDate); // selected date
  }

}
