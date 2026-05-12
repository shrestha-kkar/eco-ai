// Example Gallery Data - Copy to src/pages/Gallery.tsx
// This shows how to structure your gallery items

export const exampleGalleryItems = [
  // ============ COMPLETED PROJECTS ============
  {
    id: '1',
    title: 'MAHAGENCO 250 MW - Solar Array Installation',
    category: 'completed' as const,
    type: 'image' as const,
    src: '/media/projects/completed/mahagenco-solar-array.jpg',
    description: 'Complete 15.08 MW AC/DC solar installation at MAHAGENCO Dondaicha facility',
  },
  {
    id: '2',
    title: 'MAHAGENCO - Installation Time-Lapse',
    category: 'completed' as const,
    type: 'video' as const,
    src: '/media/projects/completed/mahagenco-installation-timelapse.mp4',
    thumbnail: '/media/projects/completed/mahagenco-installation-timelapse-thumb.jpg',
    description: 'Complete installation process from site prep to commissioning',
  },
  {
    id: '3',
    title: 'MAHAGENCO - Electrical Work Completion',
    category: 'completed' as const,
    type: 'image' as const,
    src: '/media/projects/completed/mahagenco-electrical-work.jpg',
    description: 'DC & AC electrification and substation connectivity',
  },
  {
    id: '4',
    title: 'MAHAGENCO - MMS Structure Installation',
    category: 'completed' as const,
    type: 'image' as const,
    src: '/media/projects/completed/mahagenco-mms-structures.jpg',
    description: 'Module Mounting Systems installation across the array',
  },
  {
    id: '5',
    title: 'NTPC 320 MW Unit - Final Site View',
    category: 'completed' as const,
    type: 'image' as const,
    src: '/media/projects/completed/ntpc-320mw-final-view.jpg',
    description: '2 MW DC & MMS work completed at NTPC Bhainsra facility',
  },
  {
    id: '6',
    title: 'NTPC - Team Coordination Meeting',
    category: 'completed' as const,
    type: 'video' as const,
    src: '/media/projects/completed/ntpc-team-coordination.mp4',
    thumbnail: '/media/projects/completed/ntpc-team-coordination-thumb.jpg',
    description: 'Project coordination and quality review session',
  },

  // ============ ONGOING PROJECTS ============
  {
    id: '7',
    title: 'Multi-State Operations - Regional Expansion',
    category: 'ongoing' as const,
    type: 'image' as const,
    src: '/media/projects/ongoing/multistate-operations-map.jpg',
    description: 'Current operations across Maharashtra, Rajasthan, and Gujarat',
  },
  {
    id: '8',
    title: 'Solar AI Solution - POC Testing',
    category: 'ongoing' as const,
    type: 'video' as const,
    src: '/media/projects/ongoing/solar-ai-poc-demo.mp4',
    thumbnail: '/media/projects/ongoing/solar-ai-poc-demo-thumb.jpg',
    description: 'Image processing based solar plant maintenance solution in action',
  },
  {
    id: '9',
    title: 'NTPC Ongoing Work - Site Progress',
    category: 'ongoing' as const,
    type: 'image' as const,
    src: '/media/projects/ongoing/ntpc-current-progress.jpg',
    description: 'Current phase of NTPC 320 MW expansion project',
  },
  {
    id: '10',
    title: 'Innovation Group - Research Laboratory',
    category: 'ongoing' as const,
    type: 'image' as const,
    src: '/media/projects/ongoing/research-lab-setup.jpg',
    description: 'R&D facility for AI/ML applications and POC development',
  },
  {
    id: '11',
    title: 'Field Team Operations - Daily Work',
    category: 'ongoing' as const,
    type: 'video' as const,
    src: '/media/projects/ongoing/field-team-daily-work.mp4',
    thumbnail: '/media/projects/ongoing/field-team-daily-work-thumb.jpg',
    description: 'Our technical team executing field operations',
  },
  {
    id: '12',
    title: 'Solar Panel Installation Process',
    category: 'ongoing' as const,
    type: 'video' as const,
    src: '/media/projects/ongoing/solar-panel-installation.mp4',
    thumbnail: '/media/projects/ongoing/solar-panel-installation-thumb.jpg',
    description: 'Step-by-step solar panel installation methodology',
  },

  // ============ TEAM & PROCESS DOCUMENTATION ============
  {
    id: '13',
    title: 'Team Leadership - ECO-AI Management',
    category: 'completed' as const,
    type: 'image' as const,
    src: '/media/team/leadership-team.jpg',
    description: 'Founding partners Nimesh Mayank and Mitul Trivedi',
  },
  {
    id: '14',
    title: 'Installation Process Guide',
    category: 'completed' as const,
    type: 'video' as const,
    src: '/media/process-videos/installation-process-guide.mp4',
    thumbnail: '/media/process-videos/installation-process-guide-thumb.jpg',
    description: 'Complete guide to our installation methodology and quality standards',
  },
];

/**
 * HOW TO USE THIS FILE:
 * 
 * 1. Replace the existing galleryItems in src/pages/Gallery.tsx with this data
 * 2. Create the corresponding media files in public/media/
 * 3. Update file names to match your actual project files
 * 
 * FOLDER STRUCTURE TO CREATE:
 * public/media/
 * ├── projects/
 * │   ├── completed/
 * │   │   ├── mahagenco-solar-array.jpg
 * │   │   ├── mahagenco-installation-timelapse.mp4
 * │   │   ├── mahagenco-installation-timelapse-thumb.jpg
 * │   │   ├── mahagenco-electrical-work.jpg
 * │   │   ├── mahagenco-mms-structures.jpg
 * │   │   ├── ntpc-320mw-final-view.jpg
 * │   │   ├── ntpc-team-coordination.mp4
 * │   │   └── ntpc-team-coordination-thumb.jpg
 * │   │
 * │   └── ongoing/
 * │       ├── multistate-operations-map.jpg
 * │       ├── solar-ai-poc-demo.mp4
 * │       ├── solar-ai-poc-demo-thumb.jpg
 * │       ├── ntpc-current-progress.jpg
 * │       ├── research-lab-setup.jpg
 * │       ├── field-team-daily-work.mp4
 * │       ├── field-team-daily-work-thumb.jpg
 * │       ├── solar-panel-installation.mp4
 * │       └── solar-panel-installation-thumb.jpg
 * │
 * └── team/
 *     └── leadership-team.jpg
 * 
 * IMPORTANT NOTES:
 * - All paths start with /media/ (from public folder)
 * - Videos MUST have a thumbnail image
 * - Use .jpg for photos, .mp4 for videos
 * - Keep file names lowercase with hyphens
 * - Optimize images to ~500KB-2MB and videos to 2-5Mbps
 * 
 * OPTIMIZATION COMMANDS:
 * 
 * Images:
 * convert image.jpg -quality 85 -resize 1920x1080 optimized.jpg
 * 
 * Videos:
 * ffmpeg -i video.mp4 -vcodec libx264 -crf 23 -acodec aac -b:a 128k output.mp4
 * 
 * Thumbnails:
 * ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 -vf scale=1920:-1 thumb.jpg
 */
