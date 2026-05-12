# Media Organization Guide for ECO-AI Gallery

## Folder Structure

```
public/
└── media/
    ├── projects/
    │   ├── completed/
    │   │   ├── mahagenco-solar.jpg
    │   │   ├── mahagenco-installation.mp4
    │   │   ├── mahagenco-installation-thumb.jpg
    │   │   ├── ntpc-320mw.jpg
    │   │   └── [more project images/videos]
    │   │
    │   └── ongoing/
    │       ├── ntpc-site.jpg
    │       ├── team-operations.mp4
    │       ├── team-operations-thumb.jpg
    │       └── [more ongoing project media]
    │
    ├── team/
    │   ├── nimesh-profile.jpg
    │   ├── mitul-profile.jpg
    │   └── [team member photos]
    │
    └── process-videos/
        ├── installation-process.mp4
        ├── commissioning-guide.mp4
        └── [other process videos]
```

## Best Practices

### 1. **File Naming Conventions**
- Use lowercase with hyphens: `mahagenco-solar-array.jpg`
- Include project name and brief description
- Use descriptive names, NOT numbers: ✅ `team-work-site.mp4` ❌ `video1.mp4`
- Example: `[project-name]-[description]-[date].jpg`

### 2. **Image Optimization**
- **Resolution**: 1920x1080px minimum for high quality
- **Format**: Use `.jpg` for photos (better compression), `.png` for graphics with transparency
- **Size**: Aim for 500KB-2MB per image for web
- **Tools**: Use ImageOptim, TinyPNG, or similar services
- **Compression**: Use `mozjpeg` or equivalent for best quality/size ratio

```bash
# Example: Compress an image
# Using ImageMagick: convert input.jpg -quality 85 -resize 1920x1080 output.jpg
```

### 3. **Video Optimization**
- **Format**: MP4 (.mp4) for best browser compatibility
- **Codec**: H.264 video codec + AAC audio
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Bitrate**: 2-5 Mbps for 1080p
- **Thumbnails**: Create a thumbnail image for each video
  - Named as: `[video-name]-thumb.jpg`
  - Size: Same aspect ratio as video, ~500KB

```bash
# Example: Convert and compress video using FFmpeg
# ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -acodec aac -b:a 128k output.mp4

# Example: Extract thumbnail at 5-second mark
# ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 -vf scale=1920:-1 thumbnail.jpg
```

### 4. **Referencing Media in Code**

#### Image Example:
```typescript
{
  id: '1',
  title: 'MAHAGENCO 250 MW - Solar Array Installation',
  category: 'completed',
  type: 'image',
  src: '/media/projects/completed/mahagenco-solar.jpg',
  description: 'Complete solar array setup at MAHAGENCO facility',
}
```

#### Video Example:
```typescript
{
  id: '2',
  title: 'MAHAGENCO - Installation Process',
  category: 'completed',
  type: 'video',
  src: '/media/projects/completed/mahagenco-installation.mp4',
  thumbnail: '/media/projects/completed/mahagenco-installation-thumb.jpg',
  description: 'Time-lapse of installation process',
}
```

### 5. **Path References**
- **Always start with** `/media/` (forward slash)
- **Use relative paths from `public` folder**
- Structure: `/media/[category]/[subcategory]/[filename]`

### 6. **Adding New Gallery Items**

Edit `src/pages/Gallery.tsx` and add to `galleryItems` array:

```typescript
{
  id: '5', // Unique ID
  title: 'Your Project Title',
  category: 'completed', // or 'ongoing'
  type: 'image', // or 'video'
  src: '/media/projects/completed/your-image.jpg',
  thumbnail: undefined, // Only for videos (optional)
  description: 'Brief description of the project',
}
```

### 7. **CDN/Cloud Storage (Future Optimization)**

For better performance, consider:
- **AWS S3**: `https://your-bucket.s3.amazonaws.com/media/...`
- **Cloudinary**: Auto-compression and CDN delivery
- **Bunny CDN**: Affordable content delivery

Example with CDN:
```typescript
src: 'https://cdn.yourdomain.com/media/projects/completed/mahagenco-solar.jpg'
```

## Quick Commands

### Compress Multiple Images
```bash
cd public/media/projects/completed
for img in *.jpg; do
  convert "$img" -quality 85 -resize 1920x1080 "optimized-$img"
done
```

### Batch Convert WebP (Better Compression)
```bash
# Install cwebp first: brew install webp (Mac) or apt install webp (Linux)
for img in *.jpg; do
  cwebp "$img" -o "${img%.jpg}.webp" -q 80
done
```

### Check File Sizes
```bash
du -sh public/media/
ls -lh public/media/projects/completed/
```

## Performance Tips

1. **Lazy Loading**: Gallery already uses lazy loading via framer-motion
2. **Picture Element**: Use modern image format fallbacks
3. **Web Format**: Consider using `.webp` for even smaller sizes (with jpg fallback)
4. **CDN**: Serve from CDN for faster global delivery
5. **Caching**: Browser caching enabled by default

## Troubleshooting

### Media Not Showing?
1. Check file path matches exactly (case-sensitive on Linux)
2. Verify file exists: `ls -la public/media/...`
3. Check browser console for 404 errors
4. Verify file format is supported by browser

### Slow Loading?
1. Compress images/videos further
2. Consider CDN delivery
3. Use next-gen formats (.webp)
4. Check file sizes: `du -sh public/media/`

## References
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [ImageMagick Guide](https://imagemagick.org/Usage/)
- [Web Video Best Practices](https://developer.mozilla.org/en-US/docs/Web/Media/HTML5_Video)
