import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, Tabs } from 'ionic-angular';

@IonicPage({ segment: 'main' })
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild( 'tab_group' ) tab_group: Tabs;
  @ViewChild( Tabs ) tab_group2: Tabs;

  public tabRoots = [
    { root: 'HomePage', title: ' News', icon: 'home', header_title: 'ニュース' },
    { root: 'AboutPage', title: 'Movie', icon: 'information-circle', header_title: 'お勧め動画' },
    { root: 'AboutPage', title: 'About', icon: 'information-circle', header_title: 'About Us' },
    { root: 'ContactPage', title: 'Contact', icon: 'contacts', header_title: 'Contact' }
  ];

  constructor(
    public modalCtrl: ModalController
  ) {}
}
