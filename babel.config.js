module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@constants': './src/constants',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@services': './src/services',
          '@store': './src/store',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
