const path = require('path');

const nextConfig = {
  reactStrictMode: true, // React의 엄격 모드 활성화

  // Webpack 설정
  webpack(config, { isServer }) {
    // ESM 문제 해결
    config.resolve = {
      ...config.resolve,
      fullySpecified: false,
    };

    // 클라이언트 사이드에서 rust 관련 모듈 제외
    if (!isServer) {
      config.module.rules.push({
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['@babel/plugin-transform-modules-commonjs'],
          },
        },
      });
    }

    // 특정 파일을 alias로 매핑
    config.resolve.alias = {
      ...config.resolve.alias,
      '@uiw/react-md-editor/esm/components/TextArea/index.css': path.resolve(
        __dirname,
        'src/styles/md-editor/TextArea.css'
      ),
    };

    return config;
  },

  // Transpile 특정 패키지
  transpilePackages: [
    '@ant-design',
    '@rc-component',
    'antd',
    'rc-cascader',
    'rc-checkbox',
    'rc-collapse',
    'rc-dialog',
    'rc-drawer',
    'rc-dropdown',
    'rc-field-form',
    'rc-image',
    'rc-input',
    'rc-input-number',
    'rc-mentions',
    'rc-menu',
    'rc-motion',
    'rc-notification',
    'rc-pagination',
    'rc-picker',
    'rc-progress',
    'rc-rate',
    'rc-resize-observer',
    'rc-segmented',
    'rc-select',
    'rc-slider',
    'rc-steps',
    'rc-switch',
    'rc-table',
    'rc-tabs',
    'rc-textarea',
    'rc-tooltip',
    'rc-tree',
    'rc-tree-select',
    'rc-upload',
    'rc-util',
  ],

  // 환경 변수 설정
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

module.exports = nextConfig;
