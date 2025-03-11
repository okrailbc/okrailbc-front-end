import Page from "@/App.vue";
import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import { routes } from "@/router";
import { describe, beforeEach, it, expect } from "vitest";

const templateRouter = createRouter({
  history: createMemoryHistory(),
  routes: routes,
});

describe("Testpage.vue", async () => {
  let router = null;
  let wrapper = null;

  beforeEach(async () => {
    router = templateRouter;
    router.push("/");
    await router.isReady();

    wrapper = mount(Page, {
      global: {
        plugins: [router],
      },
    });
  });

  it("renders", () => {
    expect(wrapper.element).toBeDefined();
  });
});
