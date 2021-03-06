package com.driverone;

import android.app.Application;
import android.util.Log;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import com.imagepicker.ImagePickerPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.horcrux.svg.SvgPackage;
import com.BV.LinearGradient.LinearGradientPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

            @Override
    protected ReactGateway createReactGateway() {
            ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                        return "index";
                    }
        };
            return new ReactGateway(this, isDebug(), host);
        }

            @Override
    public boolean isDebug() {
            return BuildConfig.DEBUG;
        }

            protected List<ReactPackage> getPackages() {
            // Add additional packages you require here
                    // No need to add RnnPackage and MainReactPackage
                            return Arrays.<ReactPackage>asList(
                        // eg. new VectorIconsPackage()
                                    new SvgPackage(),
																		new VectorIconsPackage(),
																		new ReanimatedPackage(),
																		new RNGestureHandlerPackage(),
																		new LinearGradientPackage(),
																		new ImagePickerPackage()
                            );
        }

            @Override
    public List<ReactPackage> createAdditionalReactPackages() {
            return getPackages();
        }
        }
