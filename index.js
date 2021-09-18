import {NativeEventEmitter, NativeModules} from 'react-native';

const emitter = new NativeEventEmitter(NativeModules.PhotosChangeObserver);
export default emitter;
