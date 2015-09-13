React Native Cropping Components
================================

This library provides two components `CroppingView` and `CroppedImage`
that allow you to crop views and to provide cropped images.

## Obligatory Demo

![Demo page](./images/preview.gif)

## CroppingView

Cropping view crops the child elements. It takes four props:

| `cropTop`  | The cropping top coordinate    |
| `cropLeft` | The cropping left coordinate   |
| `width`    | The width of the cropped area  |
| `height`   | The height of the cropped area |

The width of the `CroppingView` is the `width` plus the `cropLeft`. And
the height is the `height` put the `cropTop` value.

The can be animated as shown in the example using `AnimatedLayout`.

## CroppedImage

Cropped image crops an image. It takes five props:

| `cropTop`    | The cropping top coordinate    |
| `cropLeft`   | The cropping left coordinate   |
| `cropWidth`  | The width of the cropped area  |
| `cropHeight` | The height of the cropped area |
| `source`     | The source of the image |

The resultant image is sized to the `cropWidth` and `cropHeight`.

## Example Code

There is [some sample code provided](./example/animcrop.js).
