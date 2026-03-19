// Hexo Mermaid 支持
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.header.file.push('source/_partials/mermaid.swig');
});

hexo.extend.filter.register('after_post_render', function(data) {
  // 检测是否有 mermaid 代码块
  if (data.content.includes('class="mermaid"')) {
    data.content += '<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>';
  }
  return data;
});
