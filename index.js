import {NativeEventEmitter, NativeModules} from 'react-native';

export const PhotosChangeObserverModule = NativeModules.PhotosChangeObserver;
export const RNPhotoObserver = new NativeEventEmitter(PhotosChangeObserverModule);
