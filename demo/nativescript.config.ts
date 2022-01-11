import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "org.nativescript.demo",
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none",
  },
  cli: {
    packageManager: 'npm'
  }
} as NativeScriptConfig;
