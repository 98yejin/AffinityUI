# Design Framework: React-Themed UI Components

Welcome to our React-themed UI design framework! This library is aimed at providing a collection of reusable, customizable, and company-specific UI components for building beautiful user interfaces with ease. Each component is designed to reflect the design principles and branding style of major tech companies such as Apple, Google, Microsoft, and more.

## Screenshot

| ![Apple 1](/documentation/home/apple.png)         | ![Google 2](/documentation/home/google.png) |
| ------------------------------------------------- | ------------------------------------------- |
| ![Microsoft 3](/documentation/home/microsoft.png) | ![Airbnb 4](/documentation/home/airbnb.png) |
| ![Spotify 5](/documentation/home/spotify.png)     | ![Uber 6](/documentation/home/uber.png)     |
| ![Notion 7](/documentation/home/notion.png)       | ![Stripe 8](/documentation/home/stripe.png) |
| ![Netflix 9](/documentation/home/netflix.png)     | ![Figma 10](/documentation/home/figma.png)  |

## Features

- **Company-Themed Components**: Each UI component supports themes inspired by well-known companies including Apple, Google, Microsoft, Spotify, Airbnb, Uber, and more. Each theme comes with distinct styles and animations to bring consistency with their respective branding.

- **Customizable Themes**: The framework allows for theme customization to easily apply your own branding styles.

- **Consistent Design Language**: All components are designed based on well-defined principles that reflect the branding and tone of each company.

## Core Components

- Button (primary, secondary, icon buttons, etc.)
- Input (text input, password input, search bar)
- Select (dropdown menu, multi-select)
- Tabs (for navigation)
- Modal (dialog box)
- Tooltip (info popups)
- Popover (clickable info popups)
- Dropdown (for menus)
- Accordion
- Alert (info, warning, error)
- Notification (toast-style notifications)
- Card (content container)
- Avatar (profile picture component)
- Breadcrumb (navigation aid)
- Pagination (for content navigation)
- Checkbox (with group support)
- Radio Button (with group support)
- Form (with validation support)
- Table (with pagination, sorting)
- Menu (navigation menu with nested items)
- Loading Spinner (for loading states)
- Header

## Usage

Here's a simple example of how to use design components with the ThemeProvider:

```tsx
import React from "react";
import { AppThemeProvider } from "./themes/ThemeProvider";
import { Button } from "./components/Button";
import Typography from "./components/Typography";

const App = () => {
  return <AppThemeProvider></AppThemeProvider>;
};

export default App;
```

### Header

The `Header` component allows you to create headers that reflect each company's branding style:

```tsx
import { Header } from "./components/Header";
<Header logoText="Google" navItems={["Home", "Services", "Docs", "Contact"]} />;
```

### Button

The `Button` component supports different variants including `primary`, `default`, `link`, and `text` for various use cases:

```tsx
import { Button } from "./components/Button";
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>;
```

### Typography

`Typography` components include `Header` and `Text` to maintain consistency across texts:

```tsx
import { HeaderText, Text } from "./components/Typography";
<HeaderText level={2}>Section Title</HeaderText>
<Text>Here is some descriptive text.</Text>
```

### Layout and Space

`Layout` and `Space` components help in maintaining spacing consistency between elements:

```tsx
import Space from "./components/Space";
<Space direction="vertical" size={16}>
  <Button variant="default">Button 1</Button>
  <Button variant="default">Button 2</Button>
</Space>;
```

## Themes Supported

This design framework supports the following company themes:

- **Apple**: Smooth, natural, elegant
- **Google**: Crisp, responsive, deliberate
- **Microsoft**: Depth, light, fluid
- **Airbnb**: Welcoming, delightful
- **Spotify**: Energetic, musical
- **Uber**: Efficient, utility-driven
- **Notion**: Clean, functional
- **Stripe**: Polished, professional
- **Netflix**: Cinematic, immersive
- **Figma**: Collaborative, precise

## Customizing Themes

You can easily add new themes or modify existing ones by editing the `themes.ts` file. Each theme includes colors, fonts, borders, and box shadows to provide complete control over the component's appearance.

## Contact

For any inquiries, questions, or contributions, feel free to reach out or open an issue on this GitHub repository.
