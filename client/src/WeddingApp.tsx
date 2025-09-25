import React, { Component } from "react";
import { isRecord } from './record';
import { AddGuest } from "./AddGuest";
import { GuestDetails } from "./GuestDetails";
import { GuestInfo, toJson, fromJson } from "./WeddingDetails";
import { GuestList } from "./GuestList";

type Page = "new" | "list" | {kind: "details", info: GuestInfo}

type WeddingAppState = {
  page: Page;
}

/** Displays the UI of the Wedding rsvp application. */
export class WeddingApp extends Component<{}, WeddingAppState> {

  constructor(props: {}) {
    super(props);

    this.state = {page: "list"};
  }
  
  render = (): JSX.Element => {
    if (this.state.page === "new") {
      return <div>
      <GuestList
      openAddGuestsPage={this.doAddGuestsPageClick}
      openShowGuestDetailsPage={this.doOpenGuestClick}></GuestList>
    </div>
    } else if (this.state.page === "list") {
      return <div><AddGuest 
      addingGuest={this.doAddingGuestClick} 
      previousPage={this.doPreviousPageClick}></AddGuest></div>;
    } else {
      return <div><GuestDetails 
      info={this.state.page.info} 
      savingGuest={this.doSavingGuestClick} 
      previousPage={this.doPreviousPageClick}></GuestDetails></div>
    }
  };

  doAddingGuestClick = (guestName: string, whichParty: "Molly" | "James", isFamily: boolean): void => {
    console.log("Add Guest Clicked")
    const info: GuestInfo = {
      guestName: guestName,
      whichParty: whichParty,
      isFamily: isFamily,
      dietRes: undefined,
      addGuestRes: undefined,
      addName: undefined,
      additional: undefined
    }
    this.doSavingGuestClick(info)
  }
  doAddGuestsPageClick = (): void => {
    this.setState({page: "new"})
  }
  doPreviousPageClick = (): void => {
    this.setState({page: "list"})
  } 
  doSavingGuestClick = (information: GuestInfo): void => {
    fetch("/api/save", {method: 'POST', body: JSON.stringify({name: information.guestName, 
      content: toJson(information)}),
      headers: {'Content-Type': 'application/json'}})
    .then((res) => this.doSaveResp(res))
    .catch(() => this.doSaveError("failed to connect to server"));
  }
  doSaveResp = (res: Response): void => {
    if (res.status === 200) {
      res.json().then((val) => this.doSaveJson(val))
        .catch(() => this.doSaveError("200 response is not JSON"));
    } else if (res.status === 400) {
      res.text().then(this.doSaveError)
        .catch(() => this.doSaveError("400 response is not text"));
    } else {
      this.doSaveError(`bad status code: ${res.status}`);
    }
  }
  doSaveError = (msg: string): void => {
    console.error(`Error fetching /api/save: ${msg}`);
  }
  doSaveJson = (val: unknown): void => {
    if (!isRecord(val) || typeof val.saved !== 'boolean') {
      console.error('Invalid JSON from /api/save', val);
      return;
    }
    if(!val.saved) {
      throw new Error("Error: The guest was not saved!")
    } else {
      this.doPreviousPageClick()
    }
  }

  doOpenGuestClick = (name: string): void => {
    fetch("/api/load?name=" + encodeURIComponent(name))
      .then((res) => this.doLoadResp(res))
      .catch(() => this.doLoadError("Error! Failed to connect to the server"));
  }

  doLoadResp = (res: Response): void => {
    if (res.status === 200) {
      res.json().then((val) => this.doLoadJson(val))
        .catch(() => this.doLoadError("200 response is not JSON"));
    } else if (res.status === 400) {
      res.text().then(this.doLoadError)
        .catch(() => this.doLoadError("400 response is not text"));
    } else {
      this.doLoadError(`bad status code: ${res.status}`);
    }
  };
  doLoadError = (message: string): void => {
    console.error(`Error fetching /api/load: ${message}`);
  };

  doLoadJson = (value: unknown): void => {
    if (!isRecord(value) || typeof value.name !== 'string' ||
        value.content === undefined) {
      console.error('Invalid JSON from /api/load', value);
      return;
    }

    this.setState({page: {kind: "details", info: fromJson(value.content)}})
  };


}

