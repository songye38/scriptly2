module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,  // ES 모듈을 유지하려면 false로 설정
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      // 필요한 플러그인 추가
    ],
  };
  