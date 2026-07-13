import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Image, Video } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  description: string;
}

// Gallery data - all project media
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: '',
    type: 'image',
    src: '/media/projects/image1.jpeg',
    description: '',
  },
  {
    id: '2',
    title: '',
    type: 'image',
    src: '/media/projects/image2.jpeg',
    description: '',
  },
  {
    id: '3',
    title: '',
    type: 'image',
    src: '/media/projects/image3.jpeg',
    description: '',
  },
  {
    id: '4',
    title: '',
    type: 'image',
    src: '/media/projects/image4.jpeg',
    description: '',
  },
  {
    id: '5',
    title: '',
    type: 'image',
    src: '/media/projects/image5.jpeg',
    description: '',
  },
  {
    id: '6',
    title: '',
    type: 'image',
    src: '/media/projects/image6.jpeg',
    description: '',
  },
  {
    id: '7',
    title: '',
    type: 'image',
    src: '/media/projects/image7.jpeg',
    description: '',
  },
  {
    id: '8',
    title: '',
    type: 'image',
    src: '/media/projects/image8.jpeg',
    description: '',
  },
  {
    id: '9',
    title: '',
    type: 'image',
    src: '/media/projects/image9.jpeg',
    description: '',
  },
  {
    id: '10',
    title: '',
    type: 'image',
    src: '/media/projects/image10.jpeg',
    description: '',
  },
  {
    id: '11',
    title: '',
    type: 'image',
    src: '/media/projects/image11.jpeg',
    description: '',
  },
  {
    id: '12',
    title: '',
    type: 'image',
    src: '/media/projects/image12.jpeg',
    description: '',
  },
  {
    id: '13',
    title: '',
    type: 'image',
    src: '/media/projects/image13.jpeg',
    description: '',
  },
  {
    id: '14',
    title: '',
    type: 'image',
    src: '/media/projects/image14.jpeg',
    description: '',
  },
  {
    id: '15',
    title: '',
    type: 'image',
    src: '/media/projects/image15.jpeg',
    description: '',
  },
  {
    id: '16',
    title: '',
    type: 'image',
    src: '/media/projects/image16.jpeg',
    description: '',
  },
  {
    id: '17',
    title: '',
    type: 'image',
    src: '/media/projects/image17.jpeg',
    description: '',
  },
  {
    id: '18',
    title: '',
    type: 'video',
    src: '/media/projects/video1.mp4',
    thumbnail: '/media/projects/video1-thumb.jpeg',
    description: '',
  },
];

interface SelectedItem extends GalleryItem {
  index: number;
}

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handlePrevious = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedItem.id);
    const newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem({ ...galleryItems[newIndex], index: newIndex });
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedItem.id);
    const newIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedItem({ ...galleryItems[newIndex], index: newIndex });
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-24 page-container relative">
        <div className="w-full max-w-4xl mx-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-green/20 text-brand-green text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
              <Image size={14} />
              <span>Visual Project Stories</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-7xl font-black text-brand-navy mb-8 leading-[0.95] tracking-tighter"
          >
            Project <span className="text-brand-green">Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-brand-navy/60 leading-relaxed max-w-2xl font-medium"
          >
            Explore our completed projects and ongoing work across energy infrastructure, smart cities, and technical installations. From site surveys to final commissioning.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="page-container mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedItem({ ...item, index })}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 bg-brand-navy/5 border border-brand-navy/10 shadow-lg hover:shadow-2xl transition-all">
                {/* Placeholder or actual image/video thumbnail */}
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <>
                    <div className="w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-green/20 flex items-center justify-center">
                      <Video size={48} className="text-brand-navy/30" />
                    </div>
                    {item.thumbnail && (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                  </>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  {item.type === 'video' && (
                    <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center shadow-xl shadow-brand-green/50 group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-white fill-white" />
                    </div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                </div>
              </div>

              {/* Card Info */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-green transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-navy/60 mt-2 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Viewer */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Media Container */}
            <div className="bg-black rounded-xl overflow-hidden flex-1 flex items-center justify-center min-h-[500px]">
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const div = document.createElement('div');
                    div.className = 'flex items-center justify-center w-full h-full text-white/50';
                    div.textContent = 'Image not available';
                    (e.target as HTMLImageElement).replaceWith(div);
                  }}
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const div = document.createElement('div');
                    div.className = 'flex items-center justify-center w-full h-full text-white/50';
                    div.textContent = 'Video not available';
                    (e.target as HTMLVideoElement).replaceWith(div);
                  }}
                />
              )}
            </div>

            {/* Info Section */}
            <div className="bg-white p-6 rounded-b-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-black text-brand-navy mb-2">{selectedItem.title}</h2>
                  <p className="text-brand-navy/60">{selectedItem.description}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-4 pt-4 border-t border-brand-navy/10">
                <button
                  onClick={handlePrevious}
                  className="px-6 py-2 bg-brand-navy text-white rounded-lg font-bold text-sm hover:bg-brand-green transition-colors"
                >
                  ← Previous
                </button>
                <div className="flex-1" />
                <span className="text-xs font-bold text-brand-navy/60 self-center">
                  {selectedItem.index + 1} / {galleryItems.length}
                </span>
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-brand-navy text-white rounded-lg font-bold text-sm hover:bg-brand-green transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
