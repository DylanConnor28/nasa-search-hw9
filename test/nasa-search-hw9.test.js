import { html, fixture, expect } from '@open-wc/testing';
import "../nasa-search-hw9.js";

describe("nasaSearchHw9 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <nasa-search-hw9
        title="title"
      ></nasa-search-hw9>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
