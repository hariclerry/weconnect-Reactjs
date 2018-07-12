import React from "react";
import { shallow, mount } from "enzyme";
import BusinessList from "../../components/business/businessList";

describe("Business List", () => {
  let wrapper;
  beforeEach(() => {
    const businesses = [];
    const searchBusinesses = {};
    const searching = true;
    const searchedBusinesses = [
      {
        id: 1,
        name: "business test",
        category: "test",
        location: "loc",
        description: "desc"
      }
    ];
    wrapper = shallow(
      <BusinessList
        searching={searching}
        businesses={businesses}
        searchBusinesses={searchBusinesses}
        searchedBusinesses={searchedBusinesses}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
