***
# NOTICE:

## This repository has been archived and is not supported.

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
***
NOTICE: SUPPORT FOR THIS PROJECT HAS ENDED 

This projected was owned and maintained by Walmart. This project has reached its end of life and Walmart no longer supports this project.

We will no longer be monitoring the issues for this project or reviewing pull requests. You are free to continue using this project under the license terms or forks of this project at your own risk. This project is no longer subject to Walmart's bug bounty program or other security monitoring.


## Actions you can take

We recommend you take the following action:

  * Review any configuration files used for build automation and make appropriate updates to remove or replace this project
  * Notify other members of your team and/or organization of this change
  * Notify your security team to help you evaluate alternative options

## Forking and transition of ownership

For [security reasons](https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/), Walmart does not transfer the ownership of our primary repos on Github or other platforms to other individuals/organizations. Further, we do not transfer ownership of packages for public package management systems.

If you would like to fork this package and continue development, you should choose a new name for the project and create your own packages, build automation, etc.

Please review the licensing terms of this project, which continue to be in effect even after decommission.

React Native Cropping Components
================================

This library provides two components `CroppingView` and `CroppedImage`
that allow you to crop views and to provide cropped images.

## Installation

```
npm install react-native-cropping --save
```

## Obligatory Demo

![Demo page](./images/preview.gif)

## CroppingView

Cropping view crops the child elements. It takes four props:

| Property   | Description                    |
| ---------- | ------------------------------ |
| `cropTop`  | The cropping top coordinate    |
| `cropLeft` | The cropping left coordinate   |
| `width`    | The width of the cropped area  |
| `height`   | The height of the cropped area |

The width of the `CroppingView` is the `width` plus the `cropLeft`. And
the height is the `height` put the `cropTop` value.

In the demo the size of `CroppingView` when cropped is this:

![Cropping View](./images/cropping-view.png)

The can be animated as shown in the example using `AnimatedLayout`.

Here is a code sample:

```
<CroppingView
  cropTop={50}
  cropLeft={50}
  width={200}
  height={300}
  style={{
    borderRadius: 5
  }}>
  <Image
    source={require('image!alien')}
    style={{
      width: 350,
      height: 526
    }}
    resizeMode="contain" />
</CroppingView>
```

## CroppedImage

Cropped image crops an image. It takes these props:

| Property     | Description                    |
| ------------ | ------------------------------ |
| `cropTop`    | The cropping top coordinate    |
| `cropLeft`   | The cropping left coordinate   |
| `cropWidth`  | The width of the cropped area  |
| `cropHeight` | The height of the cropped area |
| `source`     | The source of the image        |
| `resizeMode` | The image resize mode          |
| `width`      | The image height               |
| `height`     | The image width                |

The resultant image is sized to the `cropWidth` and `cropHeight`.

In the example the image is sized to the cropping area.

![Cropped Image](./images/cropped-image.png)

Here is a pretty simple example:

```
<CroppedImage
  source={require('image!alien')}
  cropTop={110}
  cropLeft={75}
  cropWidth={190}
  cropHeight={250}
  width={350}
  height={526}
  resizeMode="contain" />
```

## Example Code

There is [some sample code provided](./example/animcrop.js).
