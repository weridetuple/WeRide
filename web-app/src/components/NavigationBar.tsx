import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { CommandBarButton, IButtonProps, IButtonStyles } from '@fluentui/react/lib/Button';
import {
  IContextualMenuItemProps,
  ContextualMenuItem,
  IContextualMenuItemStyles,
  IContextualMenuStyles,
} from '@fluentui/react/lib/ContextualMenu';
import { getTheme, concatStyleSets } from '@fluentui/react/lib/Styling';
import { memoizeFunction } from '@fluentui/react/lib/Utilities';

const theme = getTheme();
// Styles for both command bar and overflow/menu items
const itemStyles: Partial<IContextualMenuItemStyles> = {
  label: { fontSize: 18 },
  icon: { color: theme.palette.green },
  iconHovered: { color: theme.palette.greenDark },
};
// For passing the styles through to the context menus
const menuStyles: Partial<IContextualMenuStyles> = {
  subComponentStyles: { menuItem: itemStyles, callout: {} },
};

const getCommandBarButtonStyles = memoizeFunction(
  (originalStyles: IButtonStyles | undefined): Partial<IContextualMenuItemStyles> => {
    if (!originalStyles) {
      return itemStyles;
    }

    return concatStyleSets(originalStyles, itemStyles);
  },
);

// Custom renderer for main command bar items
const CustomButton: React.FunctionComponent<IButtonProps> = props => {
  const buttonOnMouseClick = () => alert(`${props.text} clicked`);
  // eslint-disable-next-line react/jsx-no-bind
  return <CommandBarButton {...props} onClick={buttonOnMouseClick} styles={getCommandBarButtonStyles(props.styles)} />;
};

// Custom renderer for menu items (these must have a separate custom renderer because it's unlikely
// that the same component could be rendered properly as both a command bar item and menu item).
// It's also okay to custom render only the command bar items without changing the menu items.
const CustomMenuItem: React.FunctionComponent<IContextualMenuItemProps> = props => {
  // Due to ContextualMenu implementation quirks, passing styles or onClick here doesn't work.
  // The onClick handler must be on the ICommandBarItemProps item instead (_overflowItems in this example).
  return <ContextualMenuItem {...props} />;
};

export const NavigationBar: React.FunctionComponent = () => {
  return (
    <CommandBar
      // Custom render all buttons
      buttonAs={CustomButton}
      items={_items}
      farItems={_farItems}
      ariaLabel="Use left and right arrow keys to navigate between commands"
    />
  );
};

const _items: ICommandBarItemProps[] = [
  {
    key: 'home',
    text: 'Home',
    ariaLabel: 'Home',
    iconOnly: true,
    iconProps: { iconName: 'Home' },
    onClick: () => console.log('Home')
  },
  {
    key: 'getToWork',
    text: 'Get to Work',
    onClick: () => console.log('Get to Work')
  },
  {
    key: 'getBackHome',
    text: 'Get back Home',
    href: 'https://developer.microsoft.com/en-us/fluentui',
    onClick: () => console.log('Get back Home')
  },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: 'language',
    text: 'Language',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Language',
    iconOnly: true,
    iconProps: { iconName: 'Globe' },
    onClick: () => console.log('Language'),
  },
  {
    key: 'user',
    text: 'User',
    ariaLabel: 'User',
    iconOnly: true,
    iconProps: { iconName: 'PlayerSettings' },
    subMenuProps: {
      // Must specify the menu item type for submenus too!
      contextualMenuItemAs: CustomMenuItem,
      // Styles are passed through to menu items here
      styles: menuStyles,
      items: [
        { key: 'logIn', text: 'Log In' },
        { key: 'help', text: 'Help' },
      ],
    },
    onClick: () => console.log('Info'),
  },
];
