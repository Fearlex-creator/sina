document.addEventListener("DOMContentLoaded", function() {
    var githubCorner = document.createElement('a');
    githubCorner.href = 'https://github.com';
    githubCorner.className = 'github-corner';
    githubCorner.innerHTML = '<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#70B7FD; color:#fff; position: absolute; top: 0; border: 0; left: 0; transform: scale(-1, 1);" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path class="octo-arm" fill="currentColor" style="transform-origin: 130px 106px;" d="M125,135 C130,130 135,125 135,120 C135,115 130,110 125,110 C120,110 115,115 115,120 C115,125 120,130 125,135 Z"></path><path class="octo-body" fill="currentColor" d="M125,135 C130,130 135,125 135,120 C135,115 130,110 125,110 C120,110 115,115 115,120 C115,125 120,130 125,135 Z"></path></svg>';
    document.body.appendChild(githubCorner);
});
