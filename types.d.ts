import {NativeEventEmitter} from 'react-native';

declare module '@flekflekerov/react-native-photo-observer' {
    export const RNPhotoObserver: NativeEventEmitter;
    export const PhotosChangeObserverModule: any;
}
