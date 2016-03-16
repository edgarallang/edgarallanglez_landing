import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {EdgarallanglezCom} from 'edgarallanglez-com';

@Component({
  selector: 'main'
})

@View({
  directives: [EdgarallanglezCom],
  template: `
    <edgarallanglez-com></edgarallanglez-com>
  `
})

class Main {

}

bootstrap(Main);
