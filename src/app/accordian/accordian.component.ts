import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  userArray: any[] = [];
  options: object;
  accordianWithOneHeading: {};
  arrayWithOneHeading: { heading: string; desc: string; isDisable: boolean; isOpen: boolean; }[];
  // tslint:disable-next-line:max-line-length
  arrayWithSubHeading: { heading: string; desc: string; isDisable: boolean; isOpen: boolean; group: { subHeading: string; isOpen: boolean; subDesc: string; }[]; }[];
  accordianWithSubHeading: {
    textKeyHeading: string; // Accordion heading key of the array, you can take anything.
    textKeyDesc: string; // Accordion description key of the array, you can take anything.
    textKeysubHeading: string; // Accordion nested section heading key of the array, you can take anything.
    textKeysubDesc: string; // Accordion nested section description key of the array, you can take anything.
    addCssClass: string; // For adding CSS class in accordion.
    array: any[]; // Array of accordion.
  };
  arrayWithOneHeadingDisableFasle: { heading: string; desc: string; isDisable: boolean; isOpen: boolean; }[];
  // tslint:disable-next-line:max-line-length
  accordianWithOneHeadingDisable: { textKeyHeading: string; textKeyDesc: string; array: { heading: string; desc: string; isDisable: boolean; isOpen: boolean; }[]; };

  ngOnInit() {
    this.userArray = [
      {
        // tslint:disable-next-line:max-line-length
        heading: 'Where does it come from?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ', isDisable: false, isOpen: false,
        // tslint:disable-next-line:max-line-length
        group: [{ subHeading: 'The standard Lorem Ipsum passage', isOpen: false, subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' }]
      },
      {
        // tslint:disable-next-line:max-line-length
        heading: 'What is Lorem Ipsum?', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', isDisable: false, isOpen: false,
        // tslint:disable-next-line:max-line-length
        group: [{ subHeading: ' translation by H. Rackham', isOpen: false, subDesc: 'But I must explain to you how all this mistaken idea of denouncing' }]
      },
      {
        // tslint:disable-next-line:max-line-length
        heading: '1914 translation by H. Rackham', desc: 'On the other hand, we denounce with righteous indignation and dislike men', isDisable: false, isOpen: false,
        // tslint:disable-next-line:max-line-length
        group: [{ subHeading: 'used since the 1500', isOpen: false, subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' }]
      },

    ];
    this.options = {
      textKeyHeading: 'heading', // Accordion heading key of the array, you can take anything.
      textKeyDesc: 'desc',       // Accordion description key of the array, you can take anything.
      textKeysubHeading: 'subHeading', // Accordion nested section heading key of the array, you can take anything.
      textKeysubDesc: 'subDesc',     // Accordion nested section description key of the array, you can take anything.
      addCssClass: 'display',         // For adding CSS class in accordion.
      array: this.userArray   // Array of accordion.
    };



    this.arrayWithOneHeading = [
      {
        // tslint:disable-next-line:max-line-length
        heading: 'Technology – An Integral Part of Our Life', desc: 'Technology has become an integral part of our lives. It is ever-evolving and is responsible for our changing lifestyle. ', isDisable: true, isOpen: true,
      },
      {
        // tslint:disable-next-line:max-line-length
        heading: 'The Downside of Technology', desc: 'The use of technological equipment has given rise to various types of pollution', isDisable: true, isOpen: true,
      },
      {
        heading: 'Depletion of Natural Resource'
        , desc: 'Many natural resources are being over-exploited to produce technological equipment', isDisable: true, isOpen: true,
      },
    ];
    this.accordianWithOneHeading = {
      textKeyHeading: 'heading',
      textKeyDesc: 'desc',
      array: this.arrayWithOneHeading
    };

    this.arrayWithOneHeadingDisableFasle = [
      {
        // tslint:disable-next-line:max-line-length
        heading: 'The Global South', desc: 'Resence and minimizing the potential negative effects gain cooperation of the local people.', isDisable: false, isOpen: false,
      },
      {
        // tslint:disable-next-line:max-line-length
        heading: 'Local economy', desc: 'To strengthen local economy: Studies have shown that buying from an independent', isDisable: false, isOpen: false,
      },
      {
        // tslint:disable-next-line:max-line-length
        heading: 'Employment', desc: 'Putnam reported that many studies have shown that the highest predictor of job satisfaction', isDisable: false, isOpen: false,
      },
    ];
    this.accordianWithOneHeadingDisable = {
      textKeyHeading: 'heading',
      textKeyDesc: 'desc',
      array: this.arrayWithOneHeadingDisableFasle
    };



  }

}
