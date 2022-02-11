// 引入打包后的样式和文件。
import '../test-component/theme/index.css';

export default async ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    // 直接导入 window is not defined  原因就是编译的时候需要 node.js 服务端渲染。所以要改成异步导入
    await import('../test-component').then(testComp => {
      Vue.use(testComp);
    });
  }
};
