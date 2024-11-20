// DO NOT EDIT!
// Automatically generated from docusaurus-template-liquid/templates/docusaurus.

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import typedocSidebarItems from "./docs/api/typedoc-sidebar.cjs";
import cliSidebar from "./sidebar-cli";
import {customDocsSidebar} from "./sidebar-docs-custom";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {

  
  docsSidebar: customDocsSidebar,
  
  typedocSidebar: [
    {
      type: "category",
      label: "API Reference (TypeDoc)",
      link: {
        type: "doc",
        id: "api/index",
      },
      items: typedocSidebarItems,
    },
  ],
  cliSidebar
  
};

export default sidebars;
