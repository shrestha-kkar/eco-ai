# Gallery Page Implementation - Quick Reference

## What's Changed

### 1. **New Pages Structure**
- **Home Page** (`/`): Original landing page with all sections
- **Gallery Page** (`/gallery`): Dedicated gallery for project images & videos
- Navigation automatically updated with "Gallery" link as last tab

### 2. **Folder Structure Created**
```
public/media/
├── projects/
│   ├── completed/    ← Completed projects images/videos
│   └── ongoing/      ← Ongoing projects images/videos
├── team/             ← Team member photos
└── process-videos/   ← Process documentation
```

### 3. **How to Add Media to Gallery**

#### Step 1: Place Files in Correct Folder
```bash
# Example: Adding completed project images
cp mahagenco-solar.jpg /home/sloka-thakkar/dev/vs/personal/eco-ai/public/media/projects/completed/
cp mahagenco-installation.mp4 /home/sloka-thakkar/dev/vs/personal/eco-ai/public/media/projects/completed/
```

#### Step 2: Add Entry to Gallery
Edit: `src/pages/Gallery.tsx` → Find `const galleryItems` array

```typescript
const galleryItems: GalleryItem[] = [
  // ... existing items ...
  {
    id: '5',
    title: 'MAHAGENCO 250 MW - Installation Complete',
    category: 'completed',  // 'completed' or 'ongoing'
    type: 'image',          // 'image' or 'video'
    src: '/media/projects/completed/mahagenco-solar.jpg',
    description: 'Solar array fully installed and tested',
  },
];
```

### 4. **Media Path Reference**

Always reference media from the **`public` folder**:
- ✅ `/media/projects/completed/file.jpg`
- ❌ `./media/projects/completed/file.jpg`
- ❌ `public/media/projects/completed/file.jpg`

### 5. **Image & Video Optimization**

**Images:**
- Use `.jpg` for photos (better compression)
- Target: 1920x1080px, 500KB-2MB
- Command: `convert input.jpg -quality 85 -resize 1920x1080 output.jpg`

**Videos:**
- Use `.mp4` format (H.264 + AAC)
- Target: 1920x1080 (1080p), 2-5 Mbps bitrate
- Always create a thumbnail image for video preview
- Command: `ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -acodec aac -b:a 128k output.mp4`

**Video Thumbnail:**
- Named: `[video-name]-thumb.jpg`
- Extract: `ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 -vf scale=1920:-1 thumbnail.jpg`

### 6. **Gallery Features**

✅ **Responsive Grid**: Auto-adapts from 1 → 2 → 3 columns
✅ **Filter Tabs**: View all, completed, or ongoing projects
✅ **Modal Viewer**: Click any item to view full-size
✅ **Video Controls**: Built-in play/pause/fullscreen for videos
✅ **Navigation**: Previous/Next buttons in modal
✅ **Lazy Loading**: Images load only when visible
✅ **Category Badges**: Green for completed, blue for ongoing

### 7. **Gallery Item Data Structure**

```typescript
interface GalleryItem {
  id: string;              // Unique identifier (used in filtering)
  title: string;           // Display title in gallery
  category: 'completed' | 'ongoing';  // For filtering
  type: 'image' | 'video'; // Determines how to display
  src: string;             // Path to image or video file
  thumbnail?: string;      // For videos: preview image path
  description: string;     // Short description shown in card & modal
}
```

### 8. **Example Gallery Entries**

**Image Entry:**
```typescript
{
  id: '1',
  title: 'Solar Array Installation - Day View',
  category: 'completed',
  type: 'image',
  src: '/media/projects/completed/solar-array-day.jpg',
  description: 'Complete overview of installed solar panels',
}
```

**Video Entry:**
```typescript
{
  id: '2',
  title: 'Installation Time-Lapse',
  category: 'completed',
  type: 'video',
  src: '/media/projects/completed/installation-timelapse.mp4',
  thumbnail: '/media/projects/completed/installation-timelapse-thumb.jpg',
  description: '24-hour installation process compressed',
}
```

### 9. **Navigation Setup**

The nav automatically handles both:
- **Home page sections**: Anchor links (`#expertise`, `#team`, etc.)
- **Gallery page**: React Router link (`/gallery`)

Navigation items in `src/components/Layout.tsx`:
```typescript
const navItems = [
  { label: 'Expertise', hash: '#expertise' },
  { label: 'Our Why', hash: '#our-why' },
  { label: 'Team', hash: '#team' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Gallery', href: '/gallery' },  // ← New Gallery link
];
```

### 10. **File Organization Best Practices**

```
public/media/
├── projects/
│   ├── completed/
│   │   ├── mahagenco-250mw-solar.jpg
│   │   ├── mahagenco-installation.mp4
│   │   ├── mahagenco-installation-thumb.jpg
│   │   ├── ntpc-320mw-site.jpg
│   │   └── ntpc-team-work.mp4
│   │
│   └── ongoing/
│       ├── multi-state-ops.jpg
│       ├── solar-ai-poc.mp4
│       └── solar-ai-poc-thumb.jpg
│
└── team/
    ├── nimesh-leadership.jpg
    └── mitul-expertise.jpg
```

**Naming Convention**: `[project-name]-[description]-[optional-date].ext`
- ✅ `mahagenco-solar-installation-2025-04.mp4`
- ❌ `video1.mp4`

### 11. **Performance Optimization**

For large galleries with many items:

1. **Lazy Load Images**: Already implemented via Framer Motion
2. **Use CDN**: Update image paths to CDN URL
   ```typescript
   src: 'https://cdn.yourdomain.com/media/projects/completed/file.jpg'
   ```
3. **WebP Format**: Add fallbacks for modern format
   ```typescript
   src: '/media/projects/completed/file.webp'
   // Browser falls back to .jpg if unsupported
   ```

### 12. **Common Tasks**

**Add 10 project images:**
1. Place in `public/media/projects/completed/` or `ongoing/`
2. Add 10 entries to `galleryItems` array in `Gallery.tsx`
3. Restart dev server (`npm run dev`)

**Change filter default:**
Edit `Gallery.tsx` line: `const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');`
Change `'all'` to `'completed'` or `'ongoing'`

**Disable video autoplay:**
Edit `Gallery.tsx` - Remove `autoPlay` from `<video>` tag

**Add more categories:**
1. Create new type: `type GalleryCategory = 'completed' | 'ongoing' | 'planning'`
2. Add button to filter section
3. Update gallery items with new category

## Development

### Run Dev Server
```bash
npm run dev
```
Visit: `http://localhost:5173/gallery`

### Build for Production
```bash
npm run build
```

### Directory to Edit
- **Add items**: `src/pages/Gallery.tsx` (galleryItems array)
- **Change styles**: CSS classes use Tailwind (see tailwind.config.js)
- **Modify layout**: `src/components/Layout.tsx`
- **Update navigation**: Same file, navItems array

## Troubleshooting

### Images not showing?
1. Check exact path in browser dev tools (Network tab)
2. Verify file exists: `ls -la public/media/projects/completed/`
3. Ensure path starts with `/media/`
4. Check file is readable: `chmod 644 filename`

### Videos won't play?
1. Verify file is valid MP4: `ffprobe filename.mp4`
2. Check codec: `ffmpeg -i filename.mp4 | grep Video`
3. Try re-encoding with H.264 codec
4. Check browser console for CORS errors

### Grid looks wrong?
- Check breakpoints: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Adjust in `src/pages/Gallery.tsx` line 165

---

**For complete media optimization guide**, see: `MEDIA_GUIDE.md`
