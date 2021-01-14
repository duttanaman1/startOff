import React, { Component } from "react";
import Navbar from "./Components/Navbar";
class ContactConsumer extends Component {
  render() {
    var ContactList = [
      {
        ClientId: 1,
        ClientName: "name1",
        desp: {
          phone: "98765234",
          email: "smo@gmail.com",
          address: "vbeoivbEQKV aVB/lo dsivb city",
        },
        itemsBought: [
          { name: "item1", date: "date1" },
          { name: "item2", date: "date2" },
          { name: "item3", date: "date3" },
        ],
      },
      {
        ClientId: 2,
        ClientName: "name2",
        desp: {
          phone: "98765234",
          email: "smo@gmail.com",
          address: "vbeoivbEQKV aVB/lo dsivb city",
        },
        itemsBought: [
          { name: "item1", date: "date1" },
          { name: "item2", date: "date2" },
          { name: "item3", date: "date3" },
          { name: "item3", date: "date3" },
          { name: "item3", date: "date3" },
          { name: "item3", date: "date3" },
          { name: "item3", date: "date3" },
          { name: "item3", date: "date3" },
          { name: "item3", date: "date3" },
          { name: "item3", date: "date3" },
          { name: "item3", date: "date3" },
          { name: "item3", date: "date3" },
        ],
      },
    ];
    const displayContactList = ContactList.map((item) => {
      return (
        <div className="row my-3" key={item.ClientId}>
          <div
            className="col-md-2 col-sm-10 "
            style={{ border: "1px solid black" }}
          >
            Image
          </div>
          <div className="col-md-6 col-sm-5 ">
            <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h1 className="mb-1">{item.ClientName}</h1>
              </div>

              <div className="my-1">
                <table className="table table-hover">
                  <tr>
                    <th scope="row">Phone</th>
                    <td>{item.desp.phone}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email ID</th>
                    <td>{item.desp.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>{item.desp.address}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-5"
            style={{ height: 200, overflowY: "scroll" }}
          >
            {/* {
                item.itemsBought.forEach((item, index) => {
                return <li className="list-group-item">{item + "____" + index}</li>;
              })
              } */}
            {item.itemsBought.map((elem) => {
              return (
                <button className="btn btn-light p-3 m-3">{elem.name}</button>
              );
            })}
          </div>
        </div>
      );
    });
    return (
      <div className="ContactConsumer mb-5 ">
        <Navbar />
        <div className="mb-2">
          <h1>Client Details</h1>
        </div>
        <div className="mx-5 list-group">{displayContactList}</div>
        <div>
          Note here: the items bought are displayed here in form of buttons. To
          Do: on click of these buttons, the consumer should be able to view all
          transactions made on that item
        </div>
      </div>
    );
  }
}

export default ContactConsumer;
