#!/bin/bash

export ANDROID_SDK_ROOT=/home/eric/Programming/Android/sdk

cordova build android -- --gradleArg=-PcdvMinSdkVersion=29