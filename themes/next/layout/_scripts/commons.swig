{%
  set js_commons = [
    'src/utils.js',
    'src/motion.js'
  ]
%}

{% for common in js_commons %}
  <script src="{{ url_for(theme.js) }}/{{ common }}?v={{ version }}"></script>
{% endfor %}

<!-- Mermaid 支持 -->
{% if theme.mermaid and theme.mermaid.enable %}
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      mermaid.initialize({ 
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
      });
    });
  </script>
{% endif %}
