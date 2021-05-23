package com.appcitor.rntodo_app;

import android.provider.Settings;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceInfoModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext context;

   DeviceInfoModule(ReactApplicationContext context) {
       super(context);
       this.context = context;
   }

   @Override
    public String getName() {
        return "DeviceInfoModule";
    }

    @ReactMethod
    public void getDeviceId(Promise promise) {
       try{
           String androidId = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ANDROID_ID);
           promise.resolve(androidId);
       }catch(Exception exception){
            promise.reject(exception);
       }
    }
}