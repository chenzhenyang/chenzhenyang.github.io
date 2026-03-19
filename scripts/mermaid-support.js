/**
 * Hexo Mermaid 支持脚本
 * 
 * 工作原理：
 * 1. 在 before_post_render 阶段，将 ```mermaid 代码块转换为 HTML 注释标记
 * 2. 在 after_post_render 阶段，将标记转换为 <div class="mermaid">
 */

hexo.extend.filter.register('before_post_render', function(data) {
  // 将 ```mermaid 代码块转换为特殊标记
  data.content = data.content.replace(
    /```mermaid\s*([\s\S]*?)```/g,
    function(match, code) {
      // 将代码进行 Base64 编码，避免被 Hexo 处理
      const encoded = Buffer.from(code.trim()).toString('base64');
      return `<!-- MERMAID_START:${encoded}:MERMAID_END -->`;
    }
  );
  return data;
});

hexo.extend.filter.register('after_post_render', function(data) {
  // 将特殊标记转换为 <div class="mermaid">
  data.content = data.content.replace(
    /<!-- MERMAID_START:([A-Za-z0-9+/=]+):MERMAID_END -->/g,
    function(match, encoded) {
      // 解码 Base64
      const code = Buffer.from(encoded, 'base64').toString('utf-8');
      // 转义 HTML 特殊字符
      const escaped = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
      return `<div class="mermaid">\n${escaped}\n</div>`;
    }
  );
  return data;
});
