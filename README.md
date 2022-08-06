[![npm](https://img.shields.io/npm/v/@deejayy/overlay-spinner?label=@deejayy/overlay-spinner)](https://www.npmjs.com/package/@deejayy/overlay-spinner)

# Overlay Spinner Component for Angular

## Installation

`npm install @deejayy/overlay-spinner`

## Demo

![Overlay Spinner Component demo](https://github.com/deejayy/overlay-spinner/raw/animation-content/overlay-spinner-v1.gif)

## Usage

```ts
import { OverlaySpinnerModule } from '@deejayy/overlay-spinner';
```

Selector: `overlay-spinner`

## Properties

| Name | Description |
| - | - |
| `@Input()`<br>`title: string` | Default: **'Please wait'**<br><br>Title text to display below the animation. |
| `@Input()`<br>`loading: boolean` | Default: **false**<br><br>Is loading state in effect, so the spinner overlay should be active? |
| `@Input()`<br>`fullPage: boolean` | Default: **false**<br><br>Whether it should it cover the full page, not just the content which is embedded inside the `<overlay-spinner>` |
| `@Input()`<br>`imagePath: string` | Default: **''**<br><br>The component has an animated SVG included by default, but this property gives the ability to replace it with hosted spinner animation/gif. |

## Examples

```html
<overlay-spinner [loading]="(loading$ | async) === true">
  This is the content which should be covered with the overlay spinner while loading is in effect.
</overlay-spinner>
```
