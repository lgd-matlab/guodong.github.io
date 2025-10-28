# Citation Badge Jekyll Integration

## Integration Instructions

### Method 1: HTML Integration

Add the following HTML code to your Jekyll templates or includes:

```html
<!-- In _includes/archive-single.html or wherever you want citation badges -->
<span class="citation-badge"
      data-doi="{{ page.doi | escape }}"
      data-title="{{ page.title | escape }}"
      data-venue="{{ page.venue | escape }}"
      data-config='{"showLoading": true, "cacheTime": 3600}'>
  <!-- Fallback content for users without JavaScript -->
  {% if page.citation_count %}
    <span class="citation-count">Cited by {{ page.citation_count }}</span>
  {% else %}
    <span class="citation-count">Citations unavailable</span>
  {% endif %}
</span>

<!-- Load the React component -->
<script type="module" src="/assets/js/bundles/citation-badge.js"></script>
```

### Method 2: Liquid Include

Create a new include file `_includes/citation-badge.html`:

```liquid
{% if page.doi %}
<span class="citation-badge"
      data-doi="{{ page.doi | escape }}"
      data-title="{{ page.title | escape }}"
      data-venue="{{ page.venue | escape }}">
  {% if page.citation_count %}
    <span class="citation-count">Cited by {{ page.citation_count }}</span>
  {% else %}
    <span class="citation-count">Citations unavailable</span>
  {% endif %}
</span>
{% endif %}
```

Then include it in your templates:

```liquid
{% include citation-badge.html %}
```

### Method 3: Direct ID Integration

For specific placement, use:

```html
<div id="react-citation-badge"
     data-doi="10.1234/your.doi.here"
     data-title="Your Paper Title"
     data-venue="Journal Name">
  <!-- Fallback content -->
  <span class="citation-count">Loading citations...</span>
</div>

<script type="module" src="/assets/js/bundles/citation-badge.js"></script>
```

## Data Attributes

### Required Attributes

- `data-doi`: Digital Object Identifier (required)

### Optional Attributes

- `data-title`: Paper title (used for tooltips and accessibility)
- `data-venue`: Publication venue (journal name, conference, etc.)
- `data-className`: Additional CSS classes to apply
- `data-config`: JSON configuration object

### Configuration Options

```json
{
  "showLoading": true,        // Show loading state
  "cacheTime": 3600,         // Cache duration in seconds
  "retryAttempts": 3,         // Number of retry attempts
  "timeout": 5000            // Request timeout in milliseconds
}
```

## Progressive Enhancement

The component includes progressive enhancement:

1. **JavaScript Disabled**: Shows fallback content
2. **Network Error**: Shows "Citations unavailable"
3. **Loading**: Shows loading spinner
4. **Success**: Shows citation count

## Example in Publication List

In `_layouts/single.html` for publications:

```html
<article class="publication">
  <header>
    <h2>{{ page.title }}</h2>
    <div class="publication-meta">
      <span>{{ page.venue }}</span>
      <span>{{ page.date | date: "%Y" }}</span>
      <!-- Add citation badge here -->
      {% include citation-badge.html %}
    </div>
  </header>

  <div class="publication-content">
    {{ content }}
  </div>
</article>
```

## Multiple Badges

You can have multiple citation badges on the same page:

```html
<span class="citation-badge" data-doi="10.1234/paper1.doi"></span>
<span class="citation-badge" data-doi="10.5678/paper2.doi"></span>
```

Each will be mounted independently.

## CSS Styling

The badge uses CSS Modules and integrates with your existing theme. You can override styles by targeting the `.citation-badge` class in your CSS:

```css
.citation-badge {
  margin-left: 0.5rem;
  font-size: 0.8rem;
}
```

## Testing Integration

1. **Build the component**: `npm run build:react`
2. **Start Jekyll**: `bundle exec jekyll serve`
3. **Visit a publication page** with DOI data
4. **Check browser console** for any errors

## Troubleshooting

### Badge Not Appearing

1. Check browser console for JavaScript errors
2. Verify the bundle file exists: `assets/js/bundles/citation-badge.js`
3. Ensure DOI is provided in data attributes
4. Check network tab for API call failures

### Styling Issues

1. Verify CSS variables are defined in your theme
2. Check if CSS Modules are loading properly
3. Ensure no conflicting styles

### API Errors

1. Check if DOI is valid and exists in OpenAlex
2. Verify network connectivity
3. Check browser console for specific error messages

## Performance Considerations

- **Caching**: Citations are cached for 1 hour in localStorage
- **Lazy Loading**: Badges load independently and don't block page rendering
- **Bundle Size**: The badge bundle is small and loads quickly
- **API Rate Limits**: OpenAlex has rate limits, but caching helps avoid repeated requests