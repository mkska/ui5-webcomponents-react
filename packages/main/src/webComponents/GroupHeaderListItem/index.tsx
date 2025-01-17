'use client';

import '@ui5/webcomponents/dist/GroupHeaderListItem.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface GroupHeaderListItemAttributes {
  /**
   * Defines the text alternative of the component.
   *
   * **Note:** If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;

  /**
   * Defines the selected state of the `ListItem`.
   * @default false
   */
  selected?: boolean;
}

interface GroupHeaderListItemDomRef extends Required<GroupHeaderListItemAttributes>, Ui5DomRef {}

interface GroupHeaderListItemPropTypes
  extends GroupHeaderListItemAttributes,
    Omit<CommonProps, keyof GroupHeaderListItemAttributes | 'children'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `GroupHeaderListItem` is a special list item, used only to separate other list items into logical groups.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const GroupHeaderListItem = withWebComponent<GroupHeaderListItemPropTypes, GroupHeaderListItemDomRef>(
  'ui5-li-groupheader',
  ['accessibleName'],
  ['selected'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/GroupHeaderListItem.js')
);

GroupHeaderListItem.displayName = 'GroupHeaderListItem';

export { GroupHeaderListItem };
export type { GroupHeaderListItemDomRef, GroupHeaderListItemPropTypes };
