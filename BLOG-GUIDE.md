# Blog — How to Add Posts

To add a blog post, paste this inside the `.blog-posts` div for the band (Game, Art, Marketing, or Story):

```html
<div class="blog-post">
    <button class="blog-post-header" aria-expanded="false">
        <span class="blog-post-title">Your post title</span>
        <span class="blog-post-icon" aria-hidden="true"></span>
    </button>
    <div class="blog-post-content">
        <div class="blog-post-content-inner">
            <p>Your content here.</p>
        </div>
    </div>
</div>
```

**Where to add it:** In `blog.html`, find the band (e.g. `id="band-game"`) and paste inside the `<div class="blog-posts"></div>`.
