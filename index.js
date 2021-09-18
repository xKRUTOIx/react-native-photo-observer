import {NativeEventEmitter, NativeModules} from 'react-native';

export const RNPhotoObserver = new NativeEventEmitter(NativeModules.PhotosChangeObserver);
