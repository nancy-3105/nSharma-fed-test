import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { UserCardsGrid } from "./UserCardsGrid";

configure({ adapter: new Adapter() });

describe("UserCardsGrid Container", () => {
  let users, wrapper;
  beforeEach(() => {
    users = [
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Raymond",
          last: "Cruz"
        },
        email: "raymond.cruz@example.com",
        phone: "045-96554665",
        picture: {
          large: "https://randomuser.me/api/portraits/men/6.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg"
        }
      },
      {
        gender: "female",
        name: {
          title: "Mr",
          first: "Otto",
          last: "Tuomala"
        },
        email: "otto.tuomala@example.com",
        phone: "02-405-338",
        picture: {
          large: "https://randomuser.me/api/portraits/men/67.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg"
        }
      }
    ];
    wrapper = mount(<UserCardsGrid users={users} />);
  });

  it("renders the Filter Container", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Checks all the data for first user", () => {
    expect(wrapper.find('[data-ref="user-name-0"]').at(0).text()).toBe(
      "Raymond Cruz"
    );
    expect(wrapper.find('[data-ref="user-email-0"]').at(0).text()).toBe(
      "raymond.cruz@example.com"
    );
  });
  it("Checks all the data for first user", () => {
    expect(wrapper.find('[data-ref="user-name-1"]').at(0).text()).toBe(
      "Otto Tuomala"
    );
    expect(wrapper.find('[data-ref="user-email-1"]').at(0).text()).toBe(
      "otto.tuomala@example.com"
    );
  });
});
