document.addEventListener('DOMContentLoaded', () => {
    initBlogBands();
    initBlogPosts();
});

function initBlogBands() {
    document.querySelectorAll('.blog-band-header').forEach(header => {
        header.addEventListener('click', () => {
            const band = header.closest('.blog-band');
            const content = band.querySelector('.blog-band-content');
            const isOpen = band.classList.contains('open');

            document.querySelectorAll('.blog-band').forEach(b => b.classList.remove('open'));
            document.querySelectorAll('.blog-band-header').forEach(h => h.setAttribute('aria-expanded', 'false'));

            if (!isOpen) {
                band.classList.add('open');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

function initBlogPosts() {
    document.querySelectorAll('.blog-post-header').forEach(header => {
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            const post = header.closest('.blog-post');
            const isOpen = post.classList.contains('open');

            post.classList.toggle('open');
            header.setAttribute('aria-expanded', !isOpen);
        });
    });
}
