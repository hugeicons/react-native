![31c9262e-aeea-4403-9086-3c8b88885cab](https://github.com/hugeicons/hugeicons-react/assets/130147052/ff91f2f0-095a-4c6d-8942-3af4759f9021)

# @hugeicons/react-native

> HugeIcons Pro React Native Component Library - Beautiful and customizable icons for your React Native applications

## What is HugeIcons?

HugeIcons is a comprehensive icon library designed for modern web and mobile applications. The free package includes 4,000+ carefully crafted icons in the Stroke Rounded style, while the pro version offers over 36,000 icons across 9 unique styles.

### Key Highlights
- **4,000+ Free Icons**: Extensive collection of Stroke Rounded icons covering essential UI elements, actions, and concepts
- **Pixel Perfect**: Every icon is crafted on a 24x24 pixel grid ensuring crisp, clear display at any size
- **Customizable**: Easily adjust colors, sizes, and styles to match your design needs
- **Regular Updates**: New icons added regularly to keep up with evolving design trends

> 📚 **Looking for Pro Icons?** Check out our comprehensive documentation at [docs.hugeicons.com](https://docs.hugeicons.com) for detailed information about pro icons, styles, and advanced usage.

![a40aa766-1b04-4a2a-a2e6-0ec3c492b96a](https://github.com/hugeicons/hugeicons-react/assets/130147052/f82c0e0e-60ae-4617-802f-812cdc7a58da)

## Table of Contents
- [What is HugeIcons?](#what-is-hugeicons)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
  - [Basic Usage](#basic-usage)
  - [Custom Size and Color](#custom-size-and-color)
  - [Interactive Examples](#interactive-examples)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)
- [Platform Support](#platform-support)
- [Related Packages](#related-packages)
- [Pro Version](#pro-version)
- [License](#license)
- [Related](#related)

## Features

- 🎨 Customizable colors and sizes
- 💪 TypeScript support with full type definitions
- 🎯 Tree-shakeable for optimal bundle size
- 📱 Native SVG rendering for optimal performance
- ⚡ Lightweight and optimized
- 🔄 Alternate icon support for dynamic interactions

## Installation

```bash
# Using npm
npm install @hugeicons/react-native @hugeicons/core-free-icons react-native-svg

# Using yarn
yarn add @hugeicons/react-native @hugeicons/core-free-icons react-native-svg

# Using pnpm
pnpm add @hugeicons/react-native @hugeicons/core-free-icons react-native-svg

# Using bun
bun add @hugeicons/react-native @hugeicons/core-free-icons react-native-svg
```

Note: This package requires `react-native-svg` as a peer dependency. Make sure to follow the [react-native-svg installation instructions](https://github.com/react-native-svg/react-native-svg#installation) for your platform.

## Usage

```jsx
import { HugeiconsIcon } from '@hugeicons/react-native';
import { SearchIcon } from '@hugeicons/core-free-icons';

function MyComponent() {
  return (
    <HugeiconsIcon
      icon={SearchIcon}
      size={24}
      color="black"
      strokeWidth={1.5}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconType` | Required | The main icon to display |
| `altIcon` | `IconType` | - | Alternative icon that can be used for states, interactions, animations, or dynamic icon swapping |
| `showAlt` | `boolean` | `false` | When true, displays the altIcon instead of the main icon |
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `currentColor` | Icon color (CSS color value) |
| `strokeWidth` | `number` | `undefined` | Width of the icon strokes. When used with `absoluteStrokeWidth`, the stroke width will be automatically scaled relative to the icon size |
| `absoluteStrokeWidth` | `boolean` | `false` | When true, the stroke width will be scaled relative to the icon size to maintain visual consistency across different sizes |

## Changelog

### v1.0.3
- Added `absoluteStrokeWidth` prop for consistent stroke width scaling
- Improved stroke width handling by applying it at the SVG level
- Enhanced TypeScript types and documentation

### v1.0.2
- Added `altIcon` prop for alternate icon support
- Added `showAlt` prop for conditional icon display
- Improved TypeScript types and documentation

### v1.0.0
- Initial release
- Basic icon rendering functionality
- Support for customization (size, color, alternate icons)
- Full TypeScript support

## Examples

### Basic Usage
```jsx
import React from 'react';
import { View } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { SearchIcon } from '@hugeicons/core-free-icons';

function BasicExample() {
  return (
    <View>
      <HugeiconsIcon icon={SearchIcon} />
    </View>
  );
}
```

### Custom Size and Color
```jsx
import React from 'react';
import { View } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { NotificationIcon } from '@hugeicons/core-free-icons';

function CustomExample() {
  return (
    <View>
      <HugeiconsIcon
        icon={NotificationIcon}
        size={32}
        color="#FF5733"
      />
    </View>
  );
}
```

### Interactive Examples

#### Search Bar with Clear Button
```jsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { SearchIcon, CloseCircleIcon } from '@hugeicons/core-free-icons';

function SearchExample() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Search..."
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => searchValue.length > 0 && setSearchValue('')}
      >
        <HugeiconsIcon
          icon={SearchIcon}
          altIcon={CloseCircleIcon}
          showAlt={searchValue.length > 0}
          color="#666"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 8,
  },
});
```

#### Theme Toggle
```jsx
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { SunIcon, MoonIcon } from '@hugeicons/core-free-icons';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsDark(!isDark)}>
      <HugeiconsIcon
        icon={SunIcon}
        altIcon={MoonIcon}
        showAlt={isDark}
        color={isDark ? '#FFF' : '#000'}
      />
    </TouchableOpacity>
  );
}
```

## Performance

- **Tree-shaking**: The package is fully tree-shakeable, ensuring only the icons you use are included in your final bundle
- **Native SVG Rendering**: Uses react-native-svg for optimal performance
- **Optimized SVGs**: All icons are optimized for size and performance
- **Code Splitting**: Icons can be easily code-split when using dynamic imports

## Troubleshooting

### Common Issues

1. **Icons not showing up?**
   - Make sure you've installed both `@hugeicons/react-native` and `@hugeicons/core-free-icons`
   - Verify that `react-native-svg` is properly installed and linked
   - Check that icon names are correctly imported

2. **TypeScript errors?**
   - Ensure your `tsconfig.json` includes the necessary type definitions
   - Check that you're using the latest version of the package

3. **Bundle size concerns?**
   - Use named imports instead of importing the entire icon set
   - Implement code splitting for different sections of your app

4. **Android/iOS specific issues?**
   - Make sure you've followed platform-specific setup for react-native-svg
   - Check platform-specific color values are valid

## Platform Support

The library supports both iOS and Android through react-native-svg.

## Related Packages

- [@hugeicons/react](https://www.npmjs.com/package/@hugeicons/react) - React component
- [@hugeicons/vue](https://www.npmjs.com/package/@hugeicons/vue) - Vue component
- [@hugeicons/svelte](https://www.npmjs.com/package/@hugeicons/svelte) - Svelte component
- [@hugeicons/angular](https://www.npmjs.com/package/@hugeicons/angular) - Angular component

## Pro Version

> 🌟 **Want access to 36,000+ icons and 9 unique styles?** 
> Check out our [Pro Version](https://hugeicons.com/pricing) and visit [docs.hugeicons.com](https://docs.hugeicons.com) for comprehensive documentation.

### Available Pro Styles
- **Stroke Styles**
  - Stroke Rounded (`@hugeicons-pro/core-stroke-rounded`)
  - Stroke Sharp (`@hugeicons-pro/core-stroke-sharp`)
  - Stroke Standard (`@hugeicons-pro/core-stroke-standard`)
- **Solid Styles**
  - Solid Rounded (`@hugeicons-pro/core-solid-rounded`)
  - Solid Sharp (`@hugeicons-pro/core-solid-sharp`)
  - Solid Standard (`@hugeicons-pro/core-solid-standard`)
- **Special Styles**
  - Bulk Rounded (`@hugeicons-pro/core-bulk-rounded`)
  - Duotone Rounded (`@hugeicons-pro/core-duotone-rounded`)
  - Twotone Rounded (`@hugeicons-pro/core-twotone-rounded`)

## License

This project is licensed under the [MIT License](LICENSE.md).

## Related

- [@hugeicons/core-free-icons](https://www.npmjs.com/package/@hugeicons/core-free-icons) - Free icon package
- [HugeIcons Website](https://hugeicons.com) - Browse all available icons 