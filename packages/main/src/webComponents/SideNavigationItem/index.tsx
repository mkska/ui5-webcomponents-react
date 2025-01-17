'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface SideNavigationItemAttributes {
  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines if the item is expanded
   * @default false
   */
  expanded?: boolean;

  /**
   * Defines the link target URI. Supports standard hyperlink behavior.
   * If a JavaScript action should be triggered,
   * this should not be set, but instead an event handler
   * for the `click` event should be registered.
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   */
  href?: string;

  /**
   * Defines the icon of the item.
   *
   * The SAP-icons font provides numerous options.
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Defines whether the item is selected
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the component target.
   *
   * **Notes:**
   *
   * - `_self`
   * - `_top`
   * - `_blank`
   * - `_parent`
   * - `_search`
   *
   * **This property must only be used when the `href` property is set.**
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   */
  target?: string;

  /**
   * Defines the text of the item.
   */
  text?: string;

  /**
   * Defines whether clicking the whole item or only pressing the icon will show/hide the sub items (if present).
   * If set to true, clicking the whole item will toggle the sub items, and it won't fire the `click` event.
   * By default, only clicking the arrow icon will toggle the sub items.
   * @default false
   */
  wholeItemToggleable?: boolean;
}

interface SideNavigationItemDomRef extends Required<SideNavigationItemAttributes>, Ui5DomRef {}

interface SideNavigationItemPropTypes
  extends SideNavigationItemAttributes,
    Omit<CommonProps, keyof SideNavigationItemAttributes | 'children' | 'onClick'> {
  /**
   * Defines nested items by passing `SideNavigationSubItem` to the default slot.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a
   * click/tap or by using the [Enter] or [Space] keys.
   */
  onClick?: (event: Ui5CustomEvent<SideNavigationItemDomRef>) => void;
}

/**
 * Represents a navigation action. It can provide sub items.
 * The `SideNavigationItem` is used within `SideNavigation` or `SideNavigationGroup` only.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const SideNavigationItem = withWebComponent<SideNavigationItemPropTypes, SideNavigationItemDomRef>(
  'ui5-side-navigation-item',
  ['href', 'icon', 'target', 'text'],
  ['disabled', 'expanded', 'selected', 'wholeItemToggleable'],
  [],
  ['click'],
  () => import('@ui5/webcomponents-fiori/dist/SideNavigationItem.js')
);

SideNavigationItem.displayName = 'SideNavigationItem';

export { SideNavigationItem };
export type { SideNavigationItemDomRef, SideNavigationItemPropTypes };
