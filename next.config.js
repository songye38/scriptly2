
// next.config.js
module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // 클라이언트 사이드에서는 `rust` 관련 모듈을 제외시키는 설정 추가
      config.module.rules.push({
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['@babel/plugin-transform-modules-commonjs']
          }
        }
      });
    }

    return config;
  }
};


// module.exports = {
//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fullySpecified: false, // ESM 문제 해결
//       };
//       return config;
//     },
//     env: {
//       OPENAI_API_KEY: process.env.OPENAI_API_KEY,
//     },
//   };


// const nextConfig = {
//     reactStrictMode: true,
//   transpilePackages: [
//       "@ant-design",
//       "antd",
//       "rc-util",
//       "rc-pagination",
//       "rc-picker",
//   ],
//   };
  
//   module.exports = nextConfig;

//   transpilePackages: [
//     // antd & deps
//     "@ant-design",
//     "@rc-component",
//     "antd",
//     "rc-cascader",
//     "rc-checkbox",
//     "rc-collapse",
//     "rc-dialog",
//     "rc-drawer",
//     "rc-dropdown",
//     "rc-field-form",
//     "rc-image",
//     "rc-input",
//     "rc-input-number",
//     "rc-mentions",
//     "rc-menu",
//     "rc-motion",
//     "rc-notification",
//     "rc-pagination",
//     "rc-picker",
//     "rc-progress",
//     "rc-rate",
//     "rc-resize-observer",
//     "rc-segmented",
//     "rc-select",
//     "rc-slider",
//     "rc-steps",
//     "rc-switch",
//     "rc-table",
//     "rc-tabs",
//     "rc-textarea",
//     "rc-tooltip",
//     "rc-tree",
//     "rc-tree-select",
//     "rc-upload",
//     "rc-util",
//   ]