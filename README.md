# react-native-photo-observer

### What it does

This module has a listener which is triggered every time when amount of photos in a library has been changed. It implements `photoLibraryDidChange`event from`PHPhotoLibraryChangeObserver`. 

(iOS only)


### Installation

`npm i @flekflekerov/react-native-photo-observer@latest`

### Usage

```
import {PhotosChangeObserverModule, RNPhotoObserver} from '@flekflekerov/react-native-photo-observer';

componentDidMount(): void {
  PhotosChangeObserverModule.register();
  RNPhotoObserver.addListener('onPhotosChanged', () => {
    // Do whatever you need when amount of photos were changed
  });
}

componentWillUnmount(): void {
  PhotosChangeObserverModule.unregister();
  RNPhotoObserver.removeAllListeners('onPhotosChanged');
}

```
