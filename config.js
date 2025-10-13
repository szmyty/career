// config.js
module.exports = {
  stylesheet: [
    'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.min.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap'
  ],

  pdf_options: {
    format: 'A4',
    margin: {
      top: '50px',
      bottom: '60px',
      left: '40px',
      right: '40px'
    },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-family:Inter,sans-serif;font-size:10px;color:#888;width:100%;text-align:center;margin-top:10px;">
        🪐 <span class="title"></span>
      </div>`,
    footerTemplate: `
      <div style="font-family:Inter,sans-serif;font-size:10px;color:#888;width:100%;text-align:center;">
        <span class="pageNumber"></span> / <span class="totalPages"></span>
      </div>`
  },

  body_class: 'markdown-body',

  // Optional: Customize emoji rendering (see below)
  marked_options: {
    gfm: true,
    breaks: true,
    smartypants: true
  }
};

