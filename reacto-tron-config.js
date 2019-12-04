// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from "reactotron-react-native";

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

const nativeLog = console.log;
console.log = (...args) => {
  nativeLog(...args);

  Reactotron.display({
    name: "LOG",
    important: true,
    value: args,
    preview: args.length ? JSON.stringify(args) : args[0]
  });
};
