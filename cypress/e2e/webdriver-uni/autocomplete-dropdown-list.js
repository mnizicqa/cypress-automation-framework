import AutocompleteDropdown_PO from "../../support/pageObjects/webdriver-uni/AutocompleteDropdown_PO";

describe("Verify autocomplete dropdown lists", () => {
  const autocompletedropdownpage = new AutocompleteDropdown_PO();
  it("Select specific product using autocomplete list", () => {
    autocompletedropdownpage.selectAutocompleteDropdownValue();
  });
});
